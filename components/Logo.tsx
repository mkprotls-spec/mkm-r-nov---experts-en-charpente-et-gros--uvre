
import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC<{ light?: boolean, className?: string }> = ({ light = false, className = "h-10" }) => {
  return (
    <motion.div 
      whileHover="hover"
      initial="initial"
      className={`flex flex-col leading-none tracking-tighter font-heading cursor-pointer ${className}`}
    >
      <motion.div 
        variants={{
          hover: { scale: 1.05 },
          initial: { scale: 1 }
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        className={`flex items-baseline ${light ? 'text-white' : 'text-slate-900'}`}
      >
        <span className="text-2xl font-black italic">MKM</span>
        <motion.div 
          variants={{
            hover: { 
              scale: [1, 1.4, 1],
              opacity: [1, 0.7, 1],
              transition: { repeat: Infinity, duration: 1.5 }
            }
          }}
          className="ml-1 w-2 h-2 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]"
        ></motion.div>
      </motion.div>
      <motion.div 
        variants={{
          hover: { color: light ? '#F5DEB3' : '#D4AF37' }
        }}
        className={`text-[11px] font-bold uppercase tracking-[0.3em] mt-1 transition-colors duration-300 ${light ? 'text-gold' : 'text-amber-600'}`}
      >
        rénov
        <motion.span 
          variants={{
            hover: { 
              textShadow: "0 0 8px rgba(212,175,55,0.4)",
              transition: { repeat: Infinity, repeatType: 'reverse', duration: 1 }
            }
          }}
          className="text-gold italic underline decoration-2 underline-offset-4"
        >
          ation
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Logo;
