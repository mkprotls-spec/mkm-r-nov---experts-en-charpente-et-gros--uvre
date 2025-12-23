
import React from 'react';
import { CheckCircle2, Award, Clock, Users, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC<{ preview?: boolean }> = ({ preview }) => {
  return (
    <section className="py-32 bg-white relative overflow-hidden" id="about">
      {/* Decorative text background */}
      <div className="absolute -left-10 top-20 text-[20vw] font-black text-slate-50 select-none pointer-events-none leading-none">
        KAYA
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-[12px] border-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1503387762-592eea58f4e8?auto=format&fit=crop&q=80&w=1000" 
                alt="Travail du bois" 
                className="w-full h-auto scale-110 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gold/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-700"></div>
            </motion.div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', delay: 0.5 }}
              className="absolute -bottom-10 -right-10 glass-dark p-10 rounded-full shadow-2xl z-20 flex flex-col items-center justify-center text-center w-56 h-56 border-gold/40"
            >
              <ShieldCheck size={48} className="text-gold mb-3" />
              <p className="text-3xl font-black text-white leading-none">Garantie</p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest mt-1">Décennale</p>
            </motion.div>
            
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-gold rounded-full blur-[100px] opacity-20 -z-0"></div>
          </div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-gold font-black tracking-[0.3em] uppercase text-xs mb-6">Manifeste MKM</h2>
              <p className="text-5xl md:text-6xl font-black text-slate-950 mb-8 font-heading tracking-tight leading-tight">
                L'excellence <br />
                <span className="text-gold italic underline decoration-blue-900/10">Mehmet Kaya</span>
              </p>
              <p className="text-slate-600 text-xl leading-relaxed font-medium">
                "Nous ne construisons pas seulement des toits, nous créons l'héritage de votre demeure. Chaque poutre est taillée avec le respect du bois et l'exigence du maître."
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {[
                { icon: <Award className="text-gold" />, title: 'Prestige', desc: 'Finition haute couture sur chaque projet.' },
                { icon: <Clock className="text-gold" />, title: 'Rigueur', desc: 'Gestion de projet millimétrée.' },
                { icon: <Users className="text-gold" />, title: 'Accompagnement', desc: 'Votre vision, notre main d\'œuvre.' },
                { icon: <CheckCircle2 className="text-gold" />, title: 'Savoir-Faire', desc: 'Expertise transmise et perfectionnée.' },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-gold/30">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 uppercase tracking-wider text-sm mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-snug">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-10 border-t border-slate-100 flex items-center gap-8"
            >
              <div className="relative">
                <img src="https://i.pravatar.cc/150?img=60" className="w-20 h-20 rounded-[2rem] border-4 border-slate-50 shadow-xl" alt="Mehmet Kaya" />
                <div className="absolute -bottom-2 -right-2 bg-gold text-white p-1.5 rounded-lg">
                  <Award size={16} />
                </div>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-950 leading-none mb-1">Mehmet Kaya</p>
                <p className="text-gold font-black text-[10px] uppercase tracking-[0.2em]">Fondateur & Maître d'Œuvre</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
