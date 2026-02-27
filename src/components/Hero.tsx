import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="sticky top-0 h-screen w-full">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
            alt="Freshly baked bread"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary-light font-sans font-bold tracking-[0.3em] text-sm mb-4">
            EST. 2024 • KAMPALA, UGANDA
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight">
            Elikan's Food <br />
            <span className="italic text-primary-light">& Snacks</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-100 mb-10 font-sans font-light leading-relaxed">
            Delivering fresh, tasty, and affordable products while ensuring a reliable and modern customer experience in the heart of Kampala.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, '#menu')}
              className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              ORDER ONLINE
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, '#menu')}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-full border border-white/30 transition-all cursor-pointer"
            >
              VIEW MENU
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
