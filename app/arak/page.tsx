'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, CalendarCheck, Info, ArrowRight } from 'lucide-react';

// --- 1. ADATOK (Itt tudod szerkeszteni az árakat és linkeket) ---

type PriceItem = {
  name: string;
  price: string;
  description?: string; // Ha van kisbetűs kiegészítés (pl. "éhgyomorra")
  bookingLink?: string; // A Medicall link
  isHeader?: boolean;   // Ha ez egy alfejezet címe (pl. "Natív vizsgálatok")
};

type Category = {
  id: string;
  title: string;
  items: PriceItem[];
};

const pricingData: Category[] = [
  {
    id: 'belgyogyaszat',
    title: 'Általános Belgyógyázat',
    items: [
      { name: 'Konzultáció', price: '39 500 Ft', description: 'anamnézis, fizikális vizsgálat, kivizsgálási javaslat', bookingLink: 'https://medicall.cc/idopontfoglalas/endo-kapszula/doctors?specializationId=41657' },
      { name: 'Kontroll szakvizsgálat', price: '34 500 Ft', description: 'szövettan, eredmények megbeszélése, szakorvosi javaslat', bookingLink: 'https://medicall.cc/idopontfoglalas/endo-kapszula/doctors?specializationId=41658' },
      { name: 'Belgyógyászati labordiagnosztika', price: '23 500 Ft', bookingLink: 'https://medicall.cc/idopontfoglalas/endo-kapszula/doctors?specializationId=70327' },
      { name: 'Sürgős orvosi konzultáció felár', price: '49 500 Ft', description: '24 órán belüli konzultáció esetén' }
    ]
  },
  {
    id: 'gasztro',
    title: 'Gasztroenterológia',
    items: [
      { name: 'Konzultáció', price: '39 500 Ft', description: 'anamnézis, fizikális vizsgálat' },
      { name: 'Endoszkópia előtti kötelező konzultáció', price: '27 500 Ft' },
      { name: 'Gyomortükrözés altatásban', price: '150 000 Ft' },
      { name: 'Vastagbéltükrözés altatásban', price: '195 000 Ft' },
      { name: 'Gyomor- és vastagbél tükrözés altatásban', price: '275 000 Ft' },
      { name: 'Polip eltávolítás (3 mm alatti)', price: '23 500 Ft', description: 'biopsziás fogóval, AI értékeléssel' },
      { name: 'Polip eltávolítás (3-5 mm között)', price: '46 500 Ft', description: 'hurokkal, hidegen, AI értékeléssel' },
      { name: 'Tejcukor (Laktóz) érzékenység vizsgálat', price: '29 500 Ft', description: 'H2 kilégzési teszt' },
      { name: 'Helicobacter UBT kilégzési teszt', price: '29 500 Ft' },
      { name: 'Szövettani vizsgálat', price: '22 000 Ft' },
      { name: 'Aneszteziológiai előkonzílium', price: '30 000 Ft' }
    ]
  },
  {
    id: 'kapszula',
    title: 'Kapszula Endoszkópia',
    items: [
      { name: 'Vékonybél kapszula vizsgálat', price: '199 000 Ft', bookingLink: 'https://medicall.cc/idopontfoglalas/endo-kapszula/doctors?specializationId=44165' },
      { name: 'Vastagbél kapszula pánenterikus protokollal', price: '349 000 Ft', bookingLink: 'https://medicall.cc/idopontfoglalas/endo-kapszula/doctors?specializationId=54283' },
      { name: 'Mágneses gyomorkapszula', price: '249 000 Ft', bookingLink: 'https://medicall.cc/idopontfoglalas/endo-kapszula/doctors?specializationId=10016245' },
      { name: 'Vékonybél kapszula + Gyomortükrözés (altatásban)', price: '362 000 Ft' },
      { name: 'Vastagbél kapszula + Gyomor- és vastagbéltükrözés', price: '499 000 Ft' },
      { name: 'Patency (átjárhatósági) kapszula', price: '88 000 Ft' }
    ]
  },
  {
    id: 'ct',
    title: 'CT Diagnosztika',
    items: [
      { name: 'Natív vizsgálatok', price: '', isHeader: true },
      { name: 'Natív CT vizsgálat (régiónként)', price: '34 500 Ft', description: 'koponya, gerinc, végtag, has, medence' },
      { name: 'Mellkasi CT', price: '24 500 Ft', description: 'csökkentett sugárterheléssel' },
      { name: 'Virtuális CT kolonoszkópia', price: '99 000 Ft', description: 'vastagbél vizsgálat natívan előkészítéssel' },
      { name: 'Natív és Kontrasztos vizsgálatok', price: '', isHeader: true },
      { name: 'CT vizsgálat natív + kontrasztos', price: '65 000 Ft', description: 'régiónként' },
      { name: 'Mellkas + has + medence CT', price: '109 000 Ft', description: 'natív és kontrasztanyaggal' },
      { name: 'CT szív koszorúér vizsgálat', price: '199 000 Ft', bookingLink: 'https://medicall.cc/idopontfoglalas/endo-kapszula/doctors?specializationId=10091644' }
    ]
  },
  {
    id: 'ultrahang',
    title: 'Ultrahang',
    items: [
      { name: 'Hasi ultrahang (szakorvosi kiértékeléssel)', price: '38 500 Ft', bookingLink: 'https://medicall.cc/idopontfoglalas/endo-kapszula/doctors?specializationId=42274' },
      { name: 'Hasi ultrahang diagnosztika', price: '33 000 Ft', description: 'komplex, has és kismedence', bookingLink: 'https://medicall.cc/idopontfoglalas/endo-kapszula/doctors?specializationId=74689' }
    ]
  },
  {
    id: 'infuzio',
    title: 'Infúziós Kezelések',
    items: [
      { name: 'Immunerősítő infúzió (Glutation, C-vitamin)', price: '15 000 Ft', bookingLink: 'https://medicall.cc/idopontfoglalas/endo-kapszula/doctors?specializationId=10058594' },
      { name: 'Másnaposság elleni infúzió', price: '25 000 Ft', bookingLink: 'https://medicall.cc/idopontfoglalas/endo-kapszula/doctors?specializationId=10058599' },
      { name: 'Vaspótló infúziós kezelés (Ferinject)', price: '65 000 Ft', bookingLink: 'https://medicall.cc/idopontfoglalas/endo-kapszula/doctors?specializationId=54492' },
      { name: 'Vitamin laborcsomag', price: '120 000 Ft', description: 'A, B3, B6, B12, C, D, E, Folsav, Mg, Vas, Q10...' }
    ]
  },
  {
    id: 'labor',
    title: 'Laborvizsgálatok',
    items: [
      { name: 'Csomagok', price: '', isHeader: true },
      { name: 'Alap laborcsomag', price: '9 500 Ft', description: 'Vérkép, Máj, Vese, Na, K, CRP, Cukor' },
      { name: 'Bővített laborcsomag', price: '14 500 Ft', description: 'Alap + Pajzsmirigy TSH + Lipid profil', bookingLink: 'https://medicall.cc/idopontfoglalas/endo-kapszula/doctors?specializationId=10052662' },
      { name: 'Egyedi vizsgálatok', price: '', isHeader: true },
      { name: 'CRP', price: '5 500 Ft', bookingLink: 'https://medicall.cc/idopontfoglalas/endo-kapszula/doctors?specializationId=43728' },
      { name: 'D-Vitamin', price: '7 500 Ft' },
      { name: 'TSH', price: '7 500 Ft', bookingLink: 'https://medicall.cc/idopontfoglalas/endo-kapszula/doctors?specializationId=43724' },
      { name: 'Széklet vér (Calprotectin)', price: '22 000 Ft', bookingLink: 'https://medicall.cc/idopontfoglalas/endo-kapszula/doctors?specializationId=41672' },
      { name: 'Tumormarker CEA', price: '12 500 Ft' }
    ]
  },
  {
    id: 'kardiologia',
    title: 'Kardiológia',
    items: [
      { name: 'Alapvizsgálat és konzultáció', price: '39 500 Ft', bookingLink: 'https://medicall.cc/idopontfoglalas/endo-kapszula/doctors?specializationId=10090398,10091632' },
      { name: 'Szív ultrahang (Echocardiográfia)', price: '43 000 Ft', bookingLink: 'https://medicall.cc/idopontfoglalas/endo-kapszula/doctors?specializationId=10091587,10091634' },
      { name: 'Komplex szűrőcsomag', price: '60 500 Ft', description: 'Vizsgálat, konzultáció, EKG, szív ultrahang' }
    ]
  }
];

// --- 2. KOMPONENS ---

export default function PricingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openCategories, setOpenCategories] = useState<string[]>(['belgyogyaszat', 'gasztro']);

  // Keresés logika
  const filteredData = pricingData.map(category => {
    // Ha van keresés, szűrjük az elemeket
    if (searchTerm) {
      const filteredItems = category.items.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      return { ...category, items: filteredItems };
    }
    return category;
  }).filter(category => category.items.length > 0); // Csak azokat a kategóriákat mutassuk, amiben maradt találat

  const toggleCategory = (id: string) => {
    setOpenCategories(prev => 
      prev.includes(id) ? prev.filter(catId => catId !== id) : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Fejléc */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Áraink</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Átlátható árazás, rejtett költségek nélkül. Fizetni készpénzzel és bankkártyával is lehetséges rendelőnkben. Egészségpénztári számla kiállítását kérjük előre jelezze.
          </p>

          {/* Keresőmező */}
          <div className="relative max-w-lg mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Keresés a vizsgálatok között (pl. ultrahang, labor, CRP)..."
              className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                if (e.target.value.length > 0) {
                    setOpenCategories(pricingData.map(c => c.id));
                }
              }}
            />
          </div>
        </div>

        {/* Árlista - Harmonika */}
        <div className="space-y-6">
          {filteredData.length === 0 ? (
             <div className="text-center py-10 text-gray-500">
                Nincs találat a keresési feltételekre.
             </div>
          ) : (
            filteredData.map((category) => (
              <motion.div 
                key={category.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                {/* Kategória Fejléc */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors"
                >
                  <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                    <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                    {category.title}
                  </h2>
                  <ChevronDown 
                    className={`text-gray-400 transition-transform duration-300 ${openCategories.includes(category.id) ? 'rotate-180' : ''}`} 
                  />
                </button>

                {/* Lista elemek */}
                <AnimatePresence>
                  {openCategories.includes(category.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-gray-100"
                    >
                      <div className="divide-y divide-gray-100">
                        {category.items.map((item, index) => (
                          
                          // Ha ez csak egy alfejezet cím (pl. "Natív vizsgálatok")
                          item.isHeader ? (
                            <div key={index} className="bg-gray-50 px-6 py-3 text-sm font-bold text-gray-500 uppercase tracking-wider">
                              {item.name}
                            </div>
                          ) : (
                            // Normál vizsgálati sor
                            <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-6 hover:bg-blue-50/30 transition-colors gap-4">
                              
                              <div className="flex-grow">
                                <h3 className="text-gray-900 font-semibold text-lg">{item.name}</h3>
                                {item.description && (
                                  <div className="flex items-start gap-2 mt-1 text-sm text-gray-500">
                                    <Info size={14} className="mt-0.5 flex-shrink-0 text-blue-400" />
                                    <span>{item.description}</span>
                                  </div>
                                )}
                              </div>

                              <div className="flex items-center justify-between md:justify-end gap-6 min-w-[250px]">
                                <span className="font-bold text-gray-900 text-lg whitespace-nowrap">
                                  {item.price}
                                </span>
                                
                                {item.bookingLink ? (
                                  <a 
                                    href={item.bookingLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-transform hover:scale-105 shadow-sm"
                                  >
                                    <CalendarCheck size={16} />
                                    <span>Foglalás</span>
                                  </a>
                                ) : (
                                  <span className="text-sm text-gray-400 italic px-4">
                                    Telefonon
                                  </span>
                                )}
                              </div>

                            </div>
                          )
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          )}
        </div>
        
        {/* Info Box az aljára */}
        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
            <h3 className="font-bold text-blue-900 mb-2">Nem találja amit keres?</h3>
            <p className="text-blue-800 mb-4">
                Egyedi vizsgálatokkal vagy kombinált csomagokkal kapcsolatban hívja asszisztenciánkat.
            </p>
            <a href="tel:+36205230352" className="inline-flex items-center text-blue-600 font-bold hover:underline">
                Hívás most <ArrowRight size={16} className="ml-2" />
            </a>
        </div>

      </div>
    </main>
  );
}