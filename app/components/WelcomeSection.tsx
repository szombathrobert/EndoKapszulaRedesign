'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Szöveges tartalom */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-blue-600 font-bold uppercase tracking-wide text-sm mb-2">
                Üdvözöljük honlapunkon
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Endo-Kapszula <br />
                <span className="text-blue-600">Magánorvosi Centrum</span>
              </h2>
              
              <p className="text-gray-600 text-lg mb-6 leading-relaxed text-justify">
                Rendelőnk Székesfehérváron, a Budai út 316. szám alatt található. Célunk, hogy pácienseink számára a lehető legkisebb kellemetlenséggel járó vizsgálati módszereket biztosítsuk.
              </p>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed text-justify">
                Fő profilunk a gyomor- és bélrendszeri betegségek diagnosztikája és kezelése. Kiemelt figyelmet fordítunk a vastagbélrák szűrésére, melyet altatásban, teljesen fájdalommentesen is végzünk.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Rövid várakozási idő', 'Tapasztalt szakorvosok', 'Altatásos vizsgálatok', 'Modern környezet'].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a href="tel:+36205230352" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg inline-block">
                  Időpontfoglalás
                </a>
              </div>
            </motion.div>
          </div>

          {/* Kép */}
          <div className="w-full lg:w-1/2 relative">
             <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]"
            >
              {/* Itt ideális esetben a rendelő saját fotója szerepelne */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop")' }}
              ></div>
              <div className="absolute inset-0 bg-blue-900/10"></div>
            </motion.div>
            
            {/* Info kártya */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-t-4 border-blue-600 hidden md:block max-w-xs">
              <p className="font-bold text-gray-900 text-lg">Dr. Med. Habil. Madácsy László PhD</p>
              <p className="text-gray-500 text-sm">belgyógyász, gasztroenterológus főorvos</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;