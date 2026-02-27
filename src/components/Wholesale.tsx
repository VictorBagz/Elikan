import React from 'react';
import { motion } from 'motion/react';
import { Coffee, Users, Building2, CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    title: "Breakfast & Brunch",
    description: "Start your day with our signature waffles, muffins, and freshly brewed coffee.",
    icon: <Coffee className="text-primary" />
  },
  {
    title: "Parties & Birthdays",
    description: "Custom cakes and snack platters for your special celebrations and milestones.",
    icon: <Users className="text-primary" />
  },
  {
    title: "Lunch & Dinner",
    description: "Quality fast, casual dining options for a satisfying meal any time of day.",
    icon: <CheckCircle2 className="text-primary" />
  },
  {
    title: "Home Gatherings",
    description: "Delicious snacks and food delivered for your intimate home events and meetings.",
    icon: <Building2 className="text-primary" />
  }
];

export default function Wholesale() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-sans font-bold tracking-[0.2em] text-xs mb-4 uppercase">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
              More Than Just <br />
              <span className="italic text-primary">Snacks & Food</span>
            </h3>
            <p className="text-slate-600 leading-relaxed mb-10">
              At Elikan's, we provide a wide range of services to cater to your every need. Whether it's a quick breakfast, a corporate lunch, or a grand birthday party, we deliver excellence in every bite.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{benefit.title}</h4>
                    <p className="text-sm text-slate-500">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <button className="px-10 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-full transition-all shadow-lg shadow-primary/20">
                BECOME A PARTNER
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img
                src="/images/elikan5.jpg"
                alt="Bakery wholesale 1"
                className="w-full h-64 object-cover rounded-3xl shadow-lg"
                referrerPolicy="no-referrer"
              />
              <img
                src="/images/elikan6.jpg"
                alt="Bakery wholesale 2"
                className="w-full h-80 object-cover rounded-3xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="/images/elikan7.webp"
                alt="Bakery wholesale 3"
                className="w-full h-80 object-cover rounded-3xl shadow-lg"
                referrerPolicy="no-referrer"
              />
              <img
                src="/images/elikan9.jpeg"
                alt="Bakery wholesale 4"
                className="w-full h-64 object-cover rounded-3xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
