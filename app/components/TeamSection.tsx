'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const doctors = [
  {
    id: 1,
    name: "Dr. Med. Habil. Madácsy László PhD",
    title: "Belgyógyász, gasztroenterológus",
    role: "Igazgató",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
    quote: "PhD. Príma díjas, Gasztroenterológus, Belgyógyász specialista, Címzetes egyetemi docens"
  },
  {
    id: 2,
    name: "Dr. Szalai Milán",
    title: "Gasztroenterológus szakorvos",
    role: "Szakorvos",
    image: "https://images.unsplash.com/photo-1537368910025-60001817997b?q=80&w=1965&auto=format&fit=crop",
    quote: "A fájdalommentesség minden páciensnek jár."
  },
    {
    id: 3,
    name: "Dr. Finta Ádám",
    title: "Gasztroenterológus szakorvos",
    role: "Orvos",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    quote: "Empátia és szakértelem minden pillanatban."
  },
    {
    id: 4,
    name: "Dr. Ükös Mária",
    title: "Radiológus orvos",
    role: "Szakorvos",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    quote: "Empátia és szakértelem minden pillanatban."
  },
  {
    id: 5,
    name: "Dr. Göbl Judit",
    title: "Gasztroenterológus szakorvos",
    role: "Szakorvos",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    quote: "Empátia és szakértelem minden pillanatban."
  },
  {
    id: 6,
    name: "Dr. Katona Márta",
    title: "Gasztroenterológus szakorvos",
    role: "Szakorvos",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
    quote: "Az egészségmegőrzés közös feladatunk."
  },
  {
    id: 7,
    name: "Csellár Annamária",
    title: "Dietetikus",
    role: "Szakasszisztens",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
    quote: "Az egészségmegőrzés közös feladatunk."
  }
];

// Megduplázzuk a listát a "végtelenített" hatáshoz
const duplicatedDoctors = [...doctors, ...doctors];

const TeamSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      
      {/* CSS Animáció definíciója a komponensen belül */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .pause-on-hover:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Szakértő csapatunk</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Magasan képzett szakorvosok és asszisztensek gondoskodnak gyógyulásáról.
          </p>
        </div>
      </div>

      {/* A Carousel Konténer */}
      <div className="relative w-full pause-on-hover">
        
        {/* Bal és Jobb oldali Fade effekt (hogy ne élesen vágja el a kártyákat) */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* A Mozgó sáv */}
        <div className="flex w-max animate-scroll">
          {duplicatedDoctors.map((doc, index) => (
            <div 
                key={`${doc.id}-${index}`} // Egyedi kulcs a duplikáció miatt
                className="px-4 w-[300px] md:w-[350px]" // Fix szélesség a kártyáknak
            >
              <div className="group h-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
                
                {/* Kép */}
                <div className="relative w-32 h-32 mb-4 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-blue-300">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white">
                    <img 
                      src={doc.image} 
                      alt={doc.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Adatok */}
                <h3 className="text-lg font-bold text-gray-900 mb-1">{doc.name}</h3>
                <p className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2">{doc.role}</p>
                <p className="text-gray-500 text-sm mb-4">{doc.title}</p>
                
                {/* Idézet */}
                <div className="mt-auto bg-slate-50 p-3 rounded-xl w-full relative">
                    <Quote size={12} className="text-blue-300 absolute top-2 left-2" />
                    <p className="text-xs text-gray-500 italic pt-1 pl-2">"{doc.quote}"</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default TeamSection;