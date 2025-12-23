
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC<{ preview?: boolean }> = ({ preview }) => {
  const displayServices = preview ? SERVICES.slice(0, 4) : SERVICES;

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden" id="services">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/5 -skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-black tracking-[0.4em] uppercase text-xs mb-6"
          >
            Le Catalogue de l'Artiste
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-black text-white mb-8 font-heading"
          >
            Services de <span className="text-gold italic underline decoration-white/10">Haute Facture</span>
          </motion.p>
          <div className="w-32 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {displayServices.map((service, i) => {
            const IconComponent = (Icons as any)[service.icon];
            return (
              <motion.div 
                key={service.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-gold/10"
              >
                {/* Background Image */}
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" 
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent group-hover:via-slate-950/20 transition-all duration-700"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-14 h-14 glass-dark rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-all duration-500 shadow-xl border-white/5 group-hover:border-gold">
                    {IconComponent && <IconComponent size={28} />}
                  </div>
                  
                  <h3 className="text-2xl font-black text-white mb-3 tracking-tight group-hover:text-gold transition-colors">{service.title}</h3>
                  
                  <div className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-700 opacity-0 group-hover:opacity-100">
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-2">
                    <span className="text-[10px] font-black text-gold uppercase tracking-widest">{service.priceHint}</span>
                    <Link to="/contact" className="text-white font-black text-xs uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                      Savoir-faire <Icons.ArrowRight size={14} className="text-gold" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {preview && (
          <div className="mt-20 text-center">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-4 bg-white text-slate-950 px-12 py-5 rounded-[2rem] font-black uppercase text-sm hover:bg-gold hover:text-white transition-all shadow-2xl active:scale-95 group"
            >
              Voir toute l'expertise
              <Icons.Plus size={18} className="group-hover:rotate-90 transition-transform duration-500 text-gold" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
