import React from 'react';
import { Truck, Clock, Shield, Users } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: <Truck className="w-8 h-8" />,
    title: 'Fast Delivery',
    description: 'Quick and reliable delivery right to your doorstep within 24-48 hours.',
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Extended Hours',
    description: 'Open early mornings to late evenings to serve your convenience.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Quality Assured',
    description: 'All products are carefully selected and packaged for maximum freshness.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Customer Support',
    description: 'Dedicated team ready to assist with any questions or special requests.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Experience excellence with our comprehensive range of services designed to enhance your shopping experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="text-primary">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-slate-600 text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
