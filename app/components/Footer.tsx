'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, ArrowUp, FileText, ChevronRight } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const documents = [
    { name: 'Vizsgálatok', href: '/vizsgalatok' },
    { name: 'Adatkezelési tájékoztató', href: '/dokumentumok/adatkezeles' },
    { name: 'Betegjogi tájékoztató', href: '/dokumentumok/betegjog' },
    { name: 'Általános Szerződési Feltételek', href: '/dokumentumok/aszf' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Itt váltottunk 4 oszlopra (lg:grid-cols-4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* 1. OSZLOP: Elérhetőségek */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Elérhetőségek</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-2 rounded-lg text-blue-500 shrink-0">
                    <MapPin size={20} />
                </div>
                <div>
                    <span className="block text-white font-medium">Címünk:</span>
                    <span className="text-sm text-gray-400">8000 Székesfehérvár,<br />Budai út 304.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-2 rounded-lg text-blue-500 shrink-0">
                    <Phone size={20} />
                </div>
                <div>
                    <span className="block text-white font-medium">Telefon:</span>
                    <a href="tel:+36205230352" className="text-sm text-gray-400 hover:text-white transition-colors">+36 20 523 0352</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-2 rounded-lg text-blue-500 shrink-0">
                    <Mail size={20} />
                </div>
                <div>
                    <span className="block text-white font-medium">Email:</span>
                    <a href="mailto:info@endo-kapszula.com" className="text-sm text-gray-400 hover:text-white transition-colors">info@endo-kapszula.com</a>
                </div>
              </li>
            </ul>
          </div>

          {/* 2. OSZLOP: Rendelési idő */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Rendelési idő</h3>
            <ul className="space-y-3 text-sm text-gray-400">
               <li className="flex justify-between border-b border-gray-800 pb-2">
                 <span>Hétfő - Péntek:</span>
                 <span className="text-white">Bejelentkezés alapján</span>
               </li>
               <li className="flex justify-between border-b border-gray-800 pb-2">
                 <span>Szombat - Vasárnap:</span>
                 <span className="text-white">Zárva</span>
               </li>
               <li className="flex justify-between border-b border-gray-800 pb-2">
                 <span>Telefonon hívható:</span>
                 <span className="text-white">08:00 - 18:00</span>
               </li>
            </ul>
            <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
                <p className="text-xs text-gray-400 leading-relaxed">
                    A vizsgálatokra minden esetben előzetes telefonos vagy online időpontegyeztetés szükséges!
                </p>
            </div>
          </div>

          {/* 3. OSZLOP: Dokumentumok (ÚJ) */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Információk</h3>
            <ul className="space-y-3">
              {documents.map((doc) => (
                <li key={doc.name}>
                  <Link 
                    href={doc.href} 
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <ChevronRight size={14} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                    <span className="border-b border-transparent group-hover:border-blue-400 pb-0.5">
                        {doc.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. OSZLOP: Térkép */}
          <div className="h-64 lg:h-full min-h-[250px] rounded-xl overflow-hidden border border-gray-700 shadow-lg relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2716.438579549324!2d18.4357739!3d47.1891632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4769f7a3b3b3b3b3%3A0x3b3b3b3b3b3b3b3b!2sEndo-Kapszula%20Mag%C3%A1norvosi%20Centrum!5e0!3m2!1shu!2shu!4v1620000000000!5m2!1shu!2shu" // Ideiglenes embed link, cseréld a pontos sajátodra
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              title="Endo-Kapszula Térkép"
              className="absolute inset-0"
            ></iframe>
          </div>

        </div>

        {/* Alsó sáv */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Endo-Kapszula Magánorvosi Centrum. Minden jog fenntartva.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-gray-800 border border-transparent hover:border-gray-700"
          >
            Ugrás a tetejére <ArrowUp size={16} />
          </button>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;