'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  cta: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop", 
    title: "Fájdalommentes Kapszula Endoszkópia",
    subtitle: "A jövő vizsgálati módszere Székesfehérváron, altatás nélkül.",
    cta: "Időpontfoglalás"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    title: "Professzionális Gasztroenterológia",
    subtitle: "Rövid várakozási idő, szakértő szakorvosok, modern környezet.",
    cta: "Szolgáltatásaink"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2189&auto=format&fit=crop",
    title: "Teljeskörű Szűrés",
    subtitle: "Megbízható diagnózis a legkorszerűbb eszközökkel.",
    cta: "Kapcsolat"
  }
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[720px] md:h-[800px] overflow-hidden bg-gray-900">
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <motion.div
          key={`text-${currentIndex}`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
            {slides[currentIndex].title}
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-gray-200 font-light">
            {slides[currentIndex].subtitle}
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg text-lg">
              {slides[currentIndex].cta}
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold transition-all text-lg hidden md:block">
              Tudjon meg többet
            </button>
          </div>
        </motion.div>
      </div>

      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors z-20 group"
      >
        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors z-20 group"
      >
        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Pöttyök alul */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-blue-500 w-12" : "bg-white/50 w-3 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;