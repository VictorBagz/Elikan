import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const locations = [
  {
    name: "Elikan's Kampala Central",
    address: "Kampala City, Uganda",
    hours: "Mon - Sat: 8:00am - 9:00pm",
    phone: "0778684463",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
  }
];

export default function Locations() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-sans font-bold tracking-[0.2em] text-xs mb-2 uppercase">Visit Us</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Contact Us</h3>
        </div>

        <div className="flex justify-center">
          {locations.map((loc) => (
            <div key={loc.name} className="max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <div className="h-80 overflow-hidden relative">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all flex items-center justify-center">
                  <a
                    href={`https://wa.me/256${loc.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all shadow-lg"
                  >
                    We are also on WhatsApp
                  </a>
                </div>
              </div>
              <div className="p-10">
                <h4 className="text-3xl font-serif font-bold text-slate-900 mb-8">{loc.name}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 text-slate-600">
                      <MapPin size={24} className="text-primary shrink-0" />
                      <span className="text-lg">{loc.address}</span>
                    </div>
                    <div className="flex items-center gap-4 text-slate-600">
                      <Clock size={24} className="text-primary shrink-0" />
                      <span className="text-lg">{loc.hours}</span>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-slate-600">
                      <Phone size={24} className="text-primary shrink-0" />
                      <span className="text-lg font-bold text-slate-900">{loc.phone}</span>
                    </div>
                    <a
                      href={`tel:+256${loc.phone.slice(1)}`}
                      className="block w-full py-4 bg-primary text-white hover:bg-primary-dark font-bold rounded-full transition-all shadow-lg shadow-primary/20 text-center"
                    >
                      CALL NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
