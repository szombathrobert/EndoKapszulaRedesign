'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* 1. Kapcsolat */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Elérhetőségek</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-2 rounded-lg text-blue-500">
                    <MapPin size={20} />
                </div>
                <div>
                    <span className="block text-white font-medium">Címünk:</span>
                    <span className="text-sm text-gray-400">8000 Székesfehérvár,<br />Budai út 304.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-2 rounded-lg text-blue-500">
                    <Phone size={20} />
                </div>
                <div>
                    <span className="block text-white font-medium">Telefon:</span>
                    <a href="tel:+36205230352" className="text-sm text-gray-400 hover:text-white transition-colors">+36 20 523 0352</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-2 rounded-lg text-blue-500">
                    <Mail size={20} />
                </div>
                <div>
                    <span className="block text-white font-medium">Email:</span>
                    <a href="mailto:info@endo-kapszula.com" className="text-sm text-gray-400 hover:text-white transition-colors">info@endo-kapszula.com</a>
                </div>
              </li>
            </ul>
          </div>

          {/* 2. Rendelési idő */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Rendelési idő</h3>
            <ul className="space-y-3 text-sm text-gray-400">
               <li className="flex justify-between border-b border-gray-800 pb-2">
                 <span>Hétfő - Péntek:</span>
                 <span className="text-white">Bejelentkezés alapján</span>
               </li>
               <li className="flex justify-between border-b border-gray-800 pb-2">
                 <span>Telefonon hívható:</span>
                 <span className="text-white">Munkanapokon 08:00 - 18:00</span>
               </li>
            </ul>
            <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
                <p className="text-xs text-gray-400 leading-relaxed">
                    A vizsgálatokra minden esetben előzetes telefonos időpontegyeztetés szükséges!
                </p>
            </div>
          </div>

          {/* 3. Térkép */}
          <div className="rounded-xl overflow-hidden h-64 border border-gray-700 shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.364372936746!2d18.4447!3d47.1905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4769f7c000000001%3A0x0!2zNDfCsDExJzI1LjgiTiAxOMKwMjYnNDAuOSJF!5e0!3m2!1shu!2shu!4v1600000000000!5m2!1shu!2shu" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              title="Endo-Kapszula Térkép"
            ></iframe>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Endo-Kapszula Magánorvosi Centrum.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-gray-800"
          >
            Ugrás a tetejére <ArrowUp size={16} />
          </button>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;