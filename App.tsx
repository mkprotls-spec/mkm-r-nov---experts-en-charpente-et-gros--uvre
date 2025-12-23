
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Phone, Mail, Instagram, Facebook, MapPin, 
  ChevronRight, Star, Send, MessageSquare, Info, 
  Hammer, Shield, TreeDeciduous, Home, Construction, ArrowRight, ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Blog from './components/Blog';
import ChatWidget from './components/ChatWidget';
import QuoteForm from './components/QuoteForm';
import Logo from './components/Logo';

// Global Header Component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Présentation', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Réalisations', path: '/portfolio' },
    { name: 'Avis', path: '/testimonials' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-2xl py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="group transition-transform active:scale-95">
            <Logo light={!isScrolled} />
          </Link>
          
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-sm font-semibold tracking-wide transition-all hover:text-gold relative group/link ${isScrolled ? 'text-slate-700' : 'text-white'}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover/link:w-full"></span>
              </Link>
            ))}
            <Link 
              to="/quote" 
              className="bg-gold hover:bg-white hover:text-slate-900 text-white px-7 py-3 rounded-full text-sm font-black transition-all shadow-xl hover:shadow-gold/20 flex items-center gap-2 group"
            >
              Devis Gratuit
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 rounded-xl transition-colors ${isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-2xl absolute top-full left-0 w-full shadow-2xl overflow-hidden border-t border-slate-100"
          >
            <div className="px-6 py-10 space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className="block text-2xl font-black text-slate-900 hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/quote"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-slate-900 text-white text-center py-5 rounded-2xl font-black text-xl mt-8 shadow-xl"
              >
                Demander un Devis
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Global Footer Component
const Footer = () => (
  <footer className="bg-slate-950 text-white pt-24 pb-12 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-white/20 to-gold opacity-50"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="space-y-8">
          <Logo light className="h-12" />
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            L'excellence de l'artisanat héraultais au service de vos structures. Charpente, maçonnerie et rénovation de prestige.
          </p>
          <div className="flex space-x-5">
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-gold transition-all hover:scale-110 active:scale-90"><Facebook size={22} /></a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-gold transition-all hover:scale-110 active:scale-90"><Instagram size={22} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-black mb-8 text-gold uppercase tracking-widest">Prestations</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><Link to="/services" className="hover:text-white transition-all flex items-center gap-2 group"><ChevronRight size={14} className="text-gold" /> Rénovation de Charpente</Link></li>
            <li><Link to="/services" className="hover:text-white transition-all flex items-center gap-2 group"><ChevronRight size={14} className="text-gold" /> Couverture de Prestige</Link></li>
            <li><Link to="/services" className="hover:text-white transition-all flex items-center gap-2 group"><ChevronRight size={14} className="text-gold" /> Traitement Curatif</Link></li>
            <li><Link to="/services" className="hover:text-white transition-all flex items-center gap-2 group"><ChevronRight size={14} className="text-gold" /> Maçonnerie Générale</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-black mb-8 text-gold uppercase tracking-widest">Contact</h4>
          <ul className="space-y-6 text-slate-400 text-sm">
            <li className="flex items-start space-x-4 group">
              <div className="p-2 bg-white/5 rounded-lg group-hover:bg-gold/20 transition-colors">
                <MapPin size={20} className="text-gold" />
              </div>
              <span className="group-hover:text-white transition-colors">Valras-Plage, 34350<br />Hérault, France</span>
            </li>
            <li className="flex items-center space-x-4 group">
              <div className="p-2 bg-white/5 rounded-lg group-hover:bg-gold/20 transition-colors">
                <Phone size={20} className="text-gold" />
              </div>
              <span className="group-hover:text-white transition-colors">+33 4 67 XX XX XX</span>
            </li>
            <li className="flex items-center space-x-4 group">
              <div className="p-2 bg-white/5 rounded-lg group-hover:bg-gold/20 transition-colors">
                <Mail size={20} className="text-gold" />
              </div>
              <span className="group-hover:text-white transition-colors">contact@mkmrenov.fr</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-black mb-8 text-gold uppercase tracking-widest">Exclusivités</h4>
          <p className="text-slate-400 text-sm mb-6">Inscrivez-vous pour recevoir nos études de cas et conseils techniques.</p>
          <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 focus-within:border-gold/50 transition-all">
            <input 
              type="email" 
              placeholder="Votre email" 
              className="bg-transparent border-none px-4 py-3 w-full focus:ring-0 text-sm outline-none"
            />
            <button className="bg-gold text-white p-3 rounded-xl hover:bg-white hover:text-slate-900 transition-all shadow-lg active:scale-95">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] uppercase tracking-widest gap-4">
        <p>© 2024 MKM Rénov. L'Art de la Charpente. Excellence Digitale par MKM.</p>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-gold transition-colors">Mentions Légales</a>
          <a href="#" className="hover:text-gold transition-colors">Confidentialité</a>
        </div>
      </div>
    </div>
  </footer>
);

// ScrollToTop utility
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About preview />
                <Services preview />
                <Portfolio preview />
                <Testimonials preview />
                <Contact preview />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/quote" element={<QuoteForm />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
};

export default App;
