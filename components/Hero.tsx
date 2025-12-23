
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Play, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Background with parallax effect */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1920" 
          alt="Charpente artisanale" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
      </motion.div>

      {/* Decorative floating shapes */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center glass-dark px-5 py-2 rounded-full text-gold text-xs font-black uppercase tracking-[0.2em] mb-8 border-gold/30 shadow-2xl"
          >
            <span className="w-2 h-2 bg-gold rounded-full mr-3 animate-ping"></span>
            Maître Artisan • Valras-Plage
          </motion.div>

          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 font-heading"
          >
            L'Art de la <br />
            <span className="text-gold italic">Charpente</span>
          </motion.h1>

          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-medium max-w-xl border-l-4 border-gold pl-6"
          >
            MKM Rénov façonne vos projets de construction avec une exigence de prestige et une maitrise séculaire du bois.
          </motion.p>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link 
              to="/quote" 
              className="group bg-gold hover:bg-white text-slate-950 px-10 py-5 rounded-2xl text-lg font-black transition-all shadow-2xl hover:shadow-gold/30 flex items-center justify-center gap-3 active:scale-95"
            >
              Projet & Devis
              <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/portfolio" 
              className="group glass-dark hover:bg-white/20 text-white px-10 py-5 rounded-2xl text-lg font-black transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              Nos Œuvres
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold transition-colors">
                <Play size={14} fill="currentColor" />
              </div>
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-20 flex items-center gap-8 border-t border-white/10 pt-10"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-14 h-14 rounded-2xl border-4 border-slate-950 overflow-hidden shadow-xl">
                  <img src={`https://i.pravatar.cc/150?img=${i + 10}`} className="w-full h-full object-cover" alt="Client" />
                </div>
              ))}
              <div className="w-14 h-14 rounded-2xl border-4 border-slate-950 bg-gold flex items-center justify-center text-slate-950 font-black text-xs">
                +150
              </div>
            </div>
            <div>
              <div className="flex text-gold mb-1">
                {/* Fixed missing Star component by importing it from lucide-react */}
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                Excellence reconnue dans l'Hérault
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Découvrir</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
