'use client';

import { Phone, Stethoscope, CalendarCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const QuickInfo = () => {
  const cards = [
    {
      icon: <Phone size={28} className="text-white" />,
      title: "Telefonos egyeztetés",
      description: "Kérdése van? Asszisztenceink munkanapokon segítenek.",
      action: "Hívás most",
      href: "tel:+3622999640",
      bg: "bg-blue-600",
      textColor: "text-white",
      descColor: "text-blue-100"
    },
    {
      icon: <Stethoscope size={28} className="text-white" />,
      title: "Milyen panaszokkal?",
      description: "Mikor érdemes gasztroenterológushoz fordulni?",
      action: "Tünetek ellenőrzése",
      href: "/vizsgalatok",
      bg: "bg-gray-900",
      textColor: "text-white",
      descColor: "text-gray-400"
    },
    {
      icon: <CalendarCheck size={28} className="text-blue-600" />,
      title: "Online Időpontfoglalás",
      description: "Foglaljon időpontot kényelmesen, a nap 24 órájában.",
      action: "Foglalás indítása",
      href: "https://medicall.cc/idopontfoglalas/endo-kapszula/index",
      bg: "bg-white",
      target: "_blank",
      textColor: "text-gray-900",
      descColor: "text-gray-600",
      isLight: true
    }
  ];

  return (
    <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-22 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className={`${card.bg} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/10`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${card.isLight ? 'bg-blue-50' : 'bg-white/10'}`}>
              {card.icon}
            </div>
            
            <h3 className={`text-xl font-bold mb-3 ${card.textColor}`}>
              {card.title}
            </h3>
            
            <p className={`text-sm mb-8 leading-relaxed ${card.descColor}`}>
              {card.description}
            </p>
            
            <Link 
              href={card.href}
              className={`flex items-center gap-2 font-bold text-sm uppercase tracking-wide group ${card.textColor}`}
            >
              {card.action} 
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default QuickInfo;