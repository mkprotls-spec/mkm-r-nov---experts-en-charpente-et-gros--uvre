
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex p-3 bg-amber-100 rounded-2xl text-amber-600 mb-6">
            <HelpCircle size={32} />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">Foire Aux Questions</h2>
          <p className="text-slate-600">Tout ce que vous devez savoir sur nos prestations de charpente.</p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-800 text-lg">{item.question}</span>
                <span className={`p-2 rounded-full ${openIndex === index ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 bg-slate-50/50 animate-in fade-in slide-in-from-top-4 duration-300">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-10 bg-slate-900 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold mb-2">Vous avez une autre question ?</h3>
            <p className="text-slate-400">Notre équipe technique vous répond sous 24h ouvrées.</p>
          </div>
          <a href="#/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl">Nous contacter</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
