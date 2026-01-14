'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type NavLink = {
  name: string;
  href: string;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkText = scrolled || !isHomePage;

  const navLinks: NavLink[] = [
    { name: 'Főoldal', href: '/' },
    { name: 'Bemutatkozás', href: '/bemutatkozas' },
    { name: 'Vizsgálatok', href: '/vizsgalatok' },
    { name: 'Árak', href: '/arak' },
    { name: 'Dokumentumok', href: '/dokumentumok' },
    { name: 'Kapcsolat', href: '/kapcsolat' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isDarkText ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="flex flex-col">
              <span className={`text-2xl font-bold leading-none ${isDarkText ? 'text-blue-900' : 'text-white'}`}>
                ENDO-<span className="text-blue-500">KAPSZULA</span>
              </span>
              <span className={`text-xs tracking-widest uppercase ${isDarkText ? 'text-gray-600' : 'text-gray-200'}`}>
                Magánorvosi Centrum
              </span>
            </Link>
          </div>

          {/* Desktop Menü */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                  isDarkText ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <a href="tel:+36205230352" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition-transform transform hover:scale-105 shadow-md">
              <Phone size={16} />
              <span>+36 22 999 640</span>
            </a>
          </div>

          {/* Mobil Menü Gomb */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isDarkText ? 'text-gray-800' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menü */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-xl overflow-hidden border-t"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                >
                  {link.name}
                </Link>
              ))}
              <a href="tel:+36205230352" className="mt-4 w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-bold">
                <Phone size={18} /> Hívás: +36 22 999 640
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;