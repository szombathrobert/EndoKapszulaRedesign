'use client';

import { motion } from 'framer-motion';
import { Award, CheckCircle2, MapPin, Clock, Phone, Stethoscope, CalendarCheck } from 'lucide-react';
import Image from 'next/image';

// --- ADATOK (Itt szerkeszd a tartalmat) ---

const doctors = [
  {
    name: "Dr. Sike Róbert",
    role: "Belgyógyász, gasztroenterológus főorvos",
    bio: "Több mint 25 éves tapasztalattal rendelkezik a gasztroenterológia területén. Kiemelt szakterülete a fájdalommentes endoszkópia és a kapszula endoszkópia.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Prof. Dr. Madácsy László",
    role: "Gasztroenterológus, egyetemi tanár",
    bio: "Nemzetközileg elismert szaktekintély, a kapszula endoszkópia egyik hazai úttörője. Számos tudományos publikáció szerzője.",
    image: "https://images.unsplash.com/photo-1537368910025-60001817997b?q=80&w=1965&auto=format&fit=crop"
  },
  {
    name: "Dr. Kovács István", // Helyettesítsd a valódi névvel
    role: "Aneszteziológus szakorvos",
    bio: "Gondoskodik arról, hogy pácienseink a beavatkozások alatt semmilyen kellemetlenséget ne érezzenek. A biztonságos altatás szakértője.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
  },
  {
    name: "Asszisztencia Csapat",
    role: "Szakápolók és Asszisztensek",
    bio: "Magasan képzett, empatikus csapatunk, akik az első perctől kezdve segítik és támogatják pácienseinket a vizsgálatok során.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
  }
];

const awards = [
  {
    title: "Családbarát Szolgáltató Hely",
    year: "2023",
    description: "Elismerés a családok és gyermekek iránti elkötelezettségünkért."
  },
  {
    title: "Megbízható Cég",
    year: "2024",
    description: "Pénzügyileg stabil, megbízható vállalkozás minősítés."
  },
  {
    title: "ISO 9001:2015",
    year: "Tanúsított",
    description: "Minőségirányítási rendszerünk megfelel a legszigorúbb nemzetközi szabványoknak."
  }
];

export default function BemutatkozasPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      
     {/* 1. HERO SZEKCIÓ - Klinikánk */}
      <section className="relative py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Szöveg */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 z-10"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Székesfehérvári klinikánk
              </h3>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-blue-600">A legkiválóbb diagnosztikai szakemberek</span>
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
                30 éves szakmai tapasztalatunk és nemzetközi elismertségünk garancia az Ön maximális elégedettségére.
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-blue-600">Csúcstechnológia és kényelem</span>
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed text-justify">
                Nálunk az endoszkópos vizsgálatokat olyan nagytudású, nagy felbontású képet adó és a legkorszerűbb endoszkópos rendszerekkel végezzük, melyek a nemzetközi standardok felett állnak.
              </p>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-blue-600">Mi valóban rövid előjegyzéssel dolgozunk</span>
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed text-justify">
                Három főállású szakorvossal dolgozunk, akik nem másodállásban, fáradtan végzik a feladatukat. Így biztosítjuk pácienseink számára a folyamatos és színvonalas szolgáltatást
              </p>
              
              
              {/* Infó sáv (Cím és Nyitvatartás) */}
              <div className="flex flex-col sm:flex-row gap-6 mb-8 border-l-4 border-blue-200 pl-4">
                <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="text-blue-600" /> 
                    <span className="font-medium">8000 Székesfehérvár, Budai út 304.</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                    <Clock className="text-blue-600" /> 
                    <span className="font-medium">H-P: 08:00 - 18:00</span>
                </div>
              </div>

              {/* ÚJ: GOMBOK */}
              <div className="flex flex-col sm:flex-row gap-4">
                 <a 
                    href="https://medicall.cc/idopontfoglalas/endo-kapszula/index" 
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold transition-transform hover:scale-105 shadow-md"
                 >
                     <CalendarCheck size={20} />
                     Online Időpontfoglalás
                 </a>
                 <a 
                    href="tel:+36205230352" 
                    className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-bold transition-transform hover:scale-105 shadow-md"
                 >
                     <Phone size={20} />
                     Hívjon minket most
                 </a>
              </div>

            </motion.div>

            {/* Kép kollázs (Változatlan) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative h-[700px] w-full rounded-2xl overflow-hidden shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
                    alt="Rendelő enteriőr" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-blue-900/10"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-blue-600 hidden md:block max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                      <CheckCircle2 className="text-green-500" />
                      <span className="font-bold text-gray-900">Modern megjelenés</span>
                  </div>
                  <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-green-500" />
                      <span className="font-bold text-gray-900">Klímatizált váró</span>
                  </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    {/* 2. HERO SZEKCIÓ - Klinikánk */}
      <section className="relative py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Kép kollázs (Változatlan) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative h-[700px] w-full rounded-2xl overflow-hidden shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
                    alt="Rendelő enteriőr" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-blue-900/10"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-blue-600 hidden md:block max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                      <CheckCircle2 className="text-green-500" />
                      <span className="font-bold text-gray-900">Modern megjelenés</span>
                  </div>
                  <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-green-500" />
                      <span className="font-bold text-gray-900">Klímatizált váró</span>
                  </div>
              </div>
            </motion.div>
            {/* Szöveg */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 z-10"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Budaörsi klinikánka <br />
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
                2025 Szeptemberében megnyitottuk budaörsi klinikánkat is! Az eddig megszokott magas szakmai színvonalú belgyógyászati konzultációkkal és vizsgálatokkal várjuk minden kedves páciensünk <b>2040 Budaörs, Károly Király utca 39.</b> szám alatti Endo-Kapszula szűrőcentrumunkban, mely csak 10 perc távolságra található budapesttől, továbbá rendkívül könnyen megközelíthető a pest vármegyében található agglomerációs településekről!
              </p>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-blue-600">Miért érdemes budaörsi centrumunkat választani?</span>
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed text-justify">
                ✅Budapestről 10 perc autóutra található, de tömegközlekedéssel és nagyon könnyen megközelíthető (140 / 140A autóbusszal) ✅Rendkívül könnyen megközelíthető a pest vármegyei agglomerációs településekről ✅A Székesfehérvári centrumunkban már megszokott dedikált orvoscsapat és egyedülállóan magas szakmai és technikai színvonal várja ✅Nincs szükség sorbanállásra, sem beutalóra, ha konzultáción vagy vizsgálaton szeretne részt venni.
              </p>
              
              {/* Infó sáv (Cím és Nyitvatartás) */}
              <div className="flex flex-col sm:flex-row gap-6 mb-8 border-l-4 border-blue-200 pl-4">
                <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="text-blue-600" /> 
                    <span className="font-medium">2040 Budaörs, Károly Király utca 39.</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                    <Clock className="text-blue-600" /> 
                    <span className="font-medium">H-P: 08:00 - 16:30</span>
                </div>
              </div>

              {/* ÚJ: GOMBOK */}
              <div className="flex flex-col sm:flex-row gap-4">
                 <a 
                    href="https://medicall.cc/idopontfoglalas/Endorobotics/index" 
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold transition-transform hover:scale-105 shadow-md"
                 >
                     <CalendarCheck size={20} />
                     Online Időpontfoglalás
                 </a>
                 <a 
                    href="tel:+3619990606" 
                    className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-bold transition-transform hover:scale-105 shadow-md"
                 >
                     <Phone size={20} />
                     Hívjon minket most
                 </a>
              </div>

            </motion.div>

            
          </div>
        </div>
      </section>

      {/* 2. ELISMERÉSEINK SZEKCIÓ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Elismeréseink és Minősítéseink</h2>
                <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {awards.map((award, index) => (
                    <motion.div 
                        key={index}
                        whileHover={{ y: -5 }}
                        className="bg-slate-50 rounded-xl p-8 border border-slate-100 text-center shadow-sm hover:shadow-md transition-all"
                    >
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                            <Award size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
                        <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                            {award.year}
                        </span>
                        <p className="text-gray-600 text-sm">
                            {award.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* 3. ORVOSAINK SZEKCIÓ - Rács nézet */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900">Ismerje meg orvosainkat</h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    A legmagasabb szakmai színvonalat képviselő orvoscsapatunk garantálja a biztonságos és eredményes gyógyítást.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {doctors.map((doc, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                    >
                        {/* Kép */}
                        <div className="h-64 overflow-hidden relative">
                            <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors z-10 transition-duration-300" />
                            <img 
                                src={doc.image} 
                                alt={doc.name} 
                                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        
                        {/* Tartalom */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{doc.name}</h3>
                            <p className="text-blue-600 text-sm font-bold uppercase tracking-wide mb-4 min-h-[40px]">
                                {doc.role}
                            </p>
                            <div className="w-full h-px bg-gray-100 mb-4" />
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {doc.bio}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* 4. GALÉRIA / CTA SZEKCIÓ */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
         {/* Háttérkép elmosva */}
         <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center"></div>
         
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
             <Stethoscope size={48} className="mx-auto mb-6 text-blue-300" />
             <h2 className="text-3xl md:text-4xl font-bold mb-6">
                 Forduljon hozzánk bizalommal!
             </h2>
             <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                 Legyen szó szűrővizsgálatról vagy konkrét panasz kivizsgálásáról, 
                 csapatunk készen áll, hogy segítsen Önnek.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <a 
                    href="tel:+3620999640" 
                    className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-full font-bold transition-transform hover:scale-105 flex items-center justify-center gap-2"
                 >
                     <Phone size={20} />
                     +36 22 999 640
                 </a>
                 <a 
                    href="https://medicall.cc/idopontfoglalas/endo-kapszula/index" 
                    target="_blank"
                    className="bg-blue-600 text-white hover:bg-blue-500 px-8 py-4 rounded-full font-bold transition-transform hover:scale-105"
                 >
                     Online Időpontfoglalás
                 </a>
             </div>
         </div>
      </section>

    </main>
  );
}