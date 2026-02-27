import React from 'react';
import { motion } from 'motion/react';

export default function StorySection() {
  return (
    <section id="story" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?q=80&w=2020&auto=format&fit=crop"
                alt="Bakery interior"
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-sans font-bold tracking-[0.2em] text-xs mb-4 uppercase">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
              Quality Fast, <br />
              <span className="italic text-primary">Casual Dining</span>
            </h3>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Our Vision</h4>
                <p>
                  To become a metropolitan restaurant and quality fast, casual dining in Uganda.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Our Mission</h4>
                <p>
                  To deliver fresh, tasty and affordable products while ensuring a reliable and modern customer experience.
                </p>
              </div>
              <p>
                At Elikan's Food and Snacks, we believe that every meal should be an experience. From our freshly baked cookies to our signature waffles, we bring the best of Kampala's culinary delights to your table.
              </p>
            </div>
            <div className="mt-10">
              <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full transition-all">
                LEARN MORE ABOUT US
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
