'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: "15+", label: "Év Tapasztalat" },
  { value: "10.000+", label: "Elvégzett Vizsgálat" },
  { value: "100%", label: "Fájdalommentesség" },
  { value: "0p", label: "Várakozási idő" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
      {/* Háttér díszítés */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
         <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
         <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-800/50">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-4"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-blue-200 text-sm md:text-base uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;