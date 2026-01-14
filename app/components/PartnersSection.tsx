'use client';

// Egészségpénztárak listája
const healthFunds = [
  "OTP Egészségpénztár",
  "MBH Gondoskodás",
  "Prémium",
  "Generali",
  "Allianz",
  "Patika",
  "Új Pillér",
  "Vitamin",
  "Vasutas",
  "Tempo",
  "Medicina"
];

// Duplázzuk a listát a végtelen hatáshoz
const duplicatedFunds = [...healthFunds, ...healthFunds];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100 overflow-hidden">
      
      {/* CSS Animáció (ugyanaz, mint a csapatnál) */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .pause-on-hover:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        
        {/* 1. EU-s Pályázatok (Statikus, mert ez kötelező elem szokott lenni) */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="h-14 w-40 bg-gray-100 border border-gray-200 rounded flex items-center justify-center text-xs text-gray-500 font-bold px-4 text-center">
                SZÉCHENYI 2020
            </div>
            <div className="h-14 w-40 bg-gray-100 border border-gray-200 rounded flex items-center justify-center text-xs text-gray-500 font-bold px-4 text-center">
                 GINOP PLUSZ
            </div>
        </div>

        {/* Cím az EP partnerekhez */}
        <p className="text-center text-sm text-gray-400 mb-8 uppercase tracking-widest font-semibold">
            Szerződött Egészségpénztári Partnereink
        </p>
      </div>

      {/* 2. Végtelenített EP Partner Szalag */}
      <div className="relative w-full pause-on-hover mb-16">
        
        {/* Fade szélek */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-scroll">
          {duplicatedFunds.map((fund, index) => (
            <div key={`${fund}-${index}`} className="px-4">
              <div className="w-48 h-20 bg-white border border-gray-200 rounded-lg shadow-sm flex items-center justify-center px-4 text-center hover:border-blue-300 hover:shadow-md transition-all duration-300 group cursor-default">
                {/* Ha van logó kép, ide tedd be az <img> taget a szöveg helyett */}
                <span className="text-gray-600 font-bold text-sm group-hover:text-blue-600 transition-colors">
                    {fund}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
        
      {/* 3. Foglalási díj infó sáv */}
      <div className="max-w-3xl mx-auto px-4">
        <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-lg text-center">
            <p className="text-yellow-800 text-sm">
                <strong>Fontos tájékoztatás:</strong> Az időpontfoglalás véglegesítéséhez foglalási díj befizetése szükséges. A részletekről a foglalási rendszerünk tájékoztatja.
            </p>
        </div>
      </div>

    </section>
  );
};

export default PartnersSection;