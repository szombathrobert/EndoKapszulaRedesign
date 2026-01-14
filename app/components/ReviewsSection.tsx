'use client';

import { Star } from 'lucide-react';

const reviews = [
  { name: "K. Andrea", text: "Hihetetlenül kedvesek voltak, a kapszula vizsgálat tényleg teljesen fájdalommentes volt. Csak ajánlani tudom!", rating: 5 },
  { name: "N. Péter", text: "Professzionális környezet, várakozás nélkül. Dr. Med. Habil. Madácsy László PhD mindent részletesen elmagyarázott.", rating: 5 },
  { name: "Sz. Éva", text: "Nagyon féltem a vizsgálattól, de a csapat megnyugtatott. Minden gyorsan és simán ment.", rating: 5 },
];

const ReviewsSection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Pácienseink mondták</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
              </div>
              <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
              <p className="font-bold text-gray-900">{review.name}</p>
              <p className="text-xs text-gray-400">Google Vélemény</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
            <a href="https://g.page/r/CeWrPKq2vOfsEBM/review" target="_blank" className="text-blue-600 font-medium hover:underline">
                Összes Google vélemény megtekintése &rarr;
            </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;