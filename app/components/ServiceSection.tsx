'use client';

import { motion } from 'framer-motion';
import { Pill, Search, Activity, Wind, Waves, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: "Kapszula Endoszkópia",
    description: "Fájdalommentes vékonybél vizsgálat lenyelhető kamerával. A legmodernebb diagnosztika.",
    icon: <Pill size={32} />,
    link: "/vizsgalatok/kapszula"
  },
  {
    id: 2,
    title: "Vastagbéltükrözés",
    description: "Colonoscopia altatásban is. A vastagbélrák szűrés leghatékonyabb módszere.",
    icon: <Search size={32} />,
    link: "/vizsgalatok/vastagbel"
  },
  {
    id: 3,
    title: "Gyomortükrözés",
    description: "Gastroscopia a nyelőcső, gyomor és nyombél betegségeinek feltárására.",
    icon: <Activity size={32} />,
    link: "/vizsgalatok/gyomor"
  },
  {
    id: 4,
    title: "H2 Kilégzéses Tesztek",
    description: "Laktóz, fruktóz, laktulóz érzékenység és SIBO vizsgálata fájdalommentesen.",
    icon: <Wind size={32} />,
    link: "/vizsgalatok/kilegzestesztek"
  },
  {
    id: 5,
    title: "Hasi Ultrahang",
    description: "A hasi szervek (máj, epe, hasnyálmirigy, vesék) gyors és sugármentes vizsgálata.",
    icon: <Waves size={32} />,
    link: "/vizsgalatok/ultrahang"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const ServicesSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Szolgáltatásaink
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A székesfehérvári Endo-Kapszula Centrumban teljeskörű gasztroenterológiai kivizsgálást biztosítunk.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                {service.description}
              </p>

              <Link 
                href={service.link}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors mt-auto"
              >
                Részletek <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;