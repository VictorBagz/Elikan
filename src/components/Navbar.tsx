import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, MapPin, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Services', href: '#services' },
    { name: 'Our Story', href: '#story' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex flex-col items-center">
              <span className={`text-2xl font-serif font-bold tracking-tighter ${scrolled ? 'text-primary' : 'text-primary-dark md:text-white'}`}>
                ELIKAN'S
              </span>
              <span className={`text-[10px] tracking-[0.2em] font-sans font-bold ${scrolled ? 'text-slate-500' : 'text-slate-200 md:text-white/80'}`}>
                FOOD & SNACKS
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-primary cursor-pointer ${scrolled ? 'text-slate-700' : 'text-white'}`}
              >
                {link.name.toUpperCase()}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className={`p-2 transition-colors hover:text-primary ${scrolled ? 'text-slate-700' : 'text-white'}`}>
              <Search size={20} />
            </button>
            <button className={`p-2 relative transition-colors hover:text-primary ${scrolled ? 'text-slate-700' : 'text-white'}`}>
              <ShoppingBag size={20} />
              <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-4 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 transition-all cursor-pointer"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex justify-around border-t border-slate-100">
                <button className="flex flex-col items-center text-slate-500 hover:text-primary">
                  <Search size={20} />
                  <span className="text-[10px] mt-1">Search</span>
                </button>
                <button className="flex flex-col items-center text-slate-500 hover:text-primary">
                  <ShoppingBag size={20} />
                  <span className="text-[10px] mt-1">Cart</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
