import React from 'react';
import { motion } from 'motion/react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Music } from 'lucide-react';

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dominant Center Logo */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <a href="/" className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-serif font-bold tracking-tighter text-primary mb-2">ELIKAN'S</span>
              <span className="text-sm tracking-[0.4em] font-sans font-bold text-slate-400">FOOD & SNACKS</span>
            </a>
          </motion.div>
          
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-10 font-light">
            Delivering fresh, tasty and affordable products while ensuring a reliable and modern customer experience in Uganda.
          </p>

          <div className="flex space-x-6">
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all hover:scale-110">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all hover:scale-110">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all hover:scale-110">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all hover:scale-110">
              <Music size={20} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 border-t border-white/5 pt-16">
          {/* Quick Links */}
          <div className="text-center md:text-right md:pr-12 md:border-r border-white/5">
            <h4 className="text-xl font-serif font-bold mb-8 text-white">Explore</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#menu" onClick={(e) => handleNavClick(e, '#menu')} className="hover:text-primary transition-colors cursor-pointer">Order Online</a></li>
              <li><a href="#menu" onClick={(e) => handleNavClick(e, '#menu')} className="hover:text-primary transition-colors cursor-pointer">Our Menu</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-primary transition-colors cursor-pointer">Services</a></li>
              <li><a href="#story" onClick={(e) => handleNavClick(e, '#story')} className="hover:text-primary transition-colors cursor-pointer">Our Story</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-primary transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left md:pl-12">
            <h4 className="text-xl font-serif font-bold mb-8 text-white">Get in Touch</h4>
            <ul className="space-y-6 text-sm text-slate-400">
              <li className="flex items-center justify-center md:justify-start gap-4">
                <MapPin size={20} className="text-primary shrink-0" />
                <span className="text-base">Kampala City, Uganda</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-4">
                <Phone size={20} className="text-primary shrink-0" />
                <span className="text-base font-bold text-white">0778684463</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-4">
                <Mail size={20} className="text-primary shrink-0" />
                <span className="text-base">hello@elikans.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase">
          <p>© 2026 ELIKAN'S FOOD & SNACKS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
