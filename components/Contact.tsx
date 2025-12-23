
import React from 'react';
import { Phone, Mail, MapPin, Clock, Send, ExternalLink } from 'lucide-react';

const Contact: React.FC<{ preview?: boolean }> = ({ preview }) => {
  return (
    <section className="py-24 bg-slate-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4">Contact</h2>
              <p className="text-4xl font-bold text-slate-900 mb-6 font-heading">Discutons de <span className="text-blue-900">votre projet</span></p>
              <p className="text-slate-600 text-lg">
                Que ce soit pour une simple réparation ou une construction complexe, nous sommes à votre disposition pour étudier votre projet.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-amber-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Téléphone</h4>
                  <p className="text-slate-600 text-sm">04 67 XX XX XX</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-amber-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email</h4>
                  <p className="text-slate-600 text-sm">contact@mkmrenov.fr</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-amber-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Adresse</h4>
                  <p className="text-slate-600 text-sm">34350 Valras-Plage, Hérault</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-amber-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Horaires</h4>
                  <p className="text-slate-600 text-sm">Lun - Ven: 08:00 - 18:00</p>
                </div>
              </div>
            </div>

            <div className="relative group rounded-3xl overflow-hidden shadow-xl border-4 border-white h-[350px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11599.932975931818!2d3.2847113!3d43.24581295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b1106e6761665f%3A0x407882116127810!2s34350%20Valras-Plage!5e0!3m2!1sfr!2sfr!4v1710000000000!5m2!1sfr!2sfr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
              <a 
                href="https://www.google.com/maps/dir//Valras-Plage" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white text-blue-900 px-4 py-2 rounded-xl text-xs font-bold shadow-lg flex items-center gap-2 hover:bg-blue-900 hover:text-white transition-all transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
              >
                Ouvrir dans Google Maps
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Envoyer un message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Nom Complet</label>
                  <input type="text" className="w-full bg-slate-50 border-slate-100 rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber-500 outline-none transition-all" placeholder="Jean Dupont" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Téléphone</label>
                  <input type="tel" className="w-full bg-slate-50 border-slate-100 rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber-500 outline-none transition-all" placeholder="06 XX XX XX XX" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Type de Projet</label>
                <select className="w-full bg-slate-50 border-slate-100 rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber-500 outline-none transition-all">
                  <option>Rénovation de Charpente</option>
                  <option>Toiture / Couverture</option>
                  <option>Gros Œuvre / Maçonnerie</option>
                  <option>Traitement du bois</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Votre Message</label>
                <textarea rows={5} className="w-full bg-slate-50 border-slate-100 rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber-500 outline-none transition-all" placeholder="Détaillez votre besoin..."></textarea>
              </div>
              <button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-5 rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3 group">
                Envoyer ma demande
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
