
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC<{ preview?: boolean }> = ({ preview }) => {
  return (
    <section className="py-24 bg-blue-950 text-white relative overflow-hidden" id="testimonials">
      <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
        <Quote size={300} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">Avis Clients</h2>
          <p className="text-4xl font-bold mb-6 font-heading italic">Ils nous ont fait <span className="text-amber-500">confiance</span></p>
          <div className="flex justify-center mb-4">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="#f59e0b" className="text-amber-500" size={24} />)}
          </div>
          <p className="text-slate-400">Note moyenne de 4.9/5 basée sur plus de 100 avis certifiés.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div key={test.id} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-amber-500/50 transition-colors">
              <div className="flex gap-1 mb-6 text-amber-500">
                {Array.from({ length: test.rating }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-300 leading-relaxed mb-8 italic">"{test.comment}"</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-white">{test.name}</p>
                  <p className="text-slate-500 text-xs">{test.date}</p>
                </div>
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-xs font-bold">
                  {test.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {!preview && (
          <div className="mt-20 max-w-2xl mx-auto bg-white rounded-3xl p-10 text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Laissez votre avis</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Nom complet" className="w-full bg-slate-100 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500" />
                <input type="date" className="w-full bg-slate-100 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500" />
              </div>
              <select className="w-full bg-slate-100 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500">
                <option>Choisir une note</option>
                <option>5 étoiles - Excellent</option>
                <option>4 étoiles - Très bien</option>
                <option>3 étoiles - Moyen</option>
              </select>
              <textarea rows={4} placeholder="Votre témoignage..." className="w-full bg-slate-100 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500"></textarea>
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg">Publier mon avis</button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
