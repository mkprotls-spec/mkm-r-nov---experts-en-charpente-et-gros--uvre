
import React from 'react';
import { FileText, CheckCircle } from 'lucide-react';

const QuoteForm: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white text-slate-900 rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full"></div>
          
          <div className="text-center mb-12">
            <div className="inline-flex p-4 bg-amber-100 text-amber-600 rounded-3xl mb-6">
              <FileText size={40} />
            </div>
            <h2 className="text-4xl font-bold mb-4 font-heading">Votre Devis Personnalisé</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Étude gratuite et complète de votre projet sous 48h. Précision garantie par nos experts.</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-lg font-bold border-l-4 border-amber-600 pl-3">Coordonnées</h4>
              <input type="text" placeholder="Nom et Prénom" className="w-full bg-slate-50 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-amber-500" required />
              <input type="email" placeholder="Email" className="w-full bg-slate-50 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-amber-500" required />
              <input type="tel" placeholder="Téléphone" className="w-full bg-slate-50 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-amber-500" required />
              <input type="text" placeholder="Adresse du projet (Ville)" className="w-full bg-slate-50 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-amber-500" />
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold border-l-4 border-amber-600 pl-3">Détails du projet</h4>
              <select className="w-full bg-slate-50 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-amber-500">
                <option>Budget estimé (Optionnel)</option>
                <option>&lt; 5 000€</option>
                <option>5 000€ - 15 000€</option>
                <option>15 000€ - 30 000€</option>
                <option>30 000€ +</option>
              </select>
              <select className="w-full bg-slate-50 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-amber-500">
                <option>Délai souhaité</option>
                <option>Urgent (&lt; 1 mois)</option>
                <option>D'ici 3 mois</option>
                <option>D'ici 6 mois</option>
                <option>Simple renseignement</option>
              </select>
              <textarea placeholder="Description rapide de votre besoin (ex: rénovation charpente villa 100m2)" className="w-full bg-slate-50 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-amber-500 h-[132px]"></textarea>
            </div>

            <div className="md:col-span-2 mt-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-6 h-6 rounded-md border-slate-300 text-amber-600 focus:ring-amber-500" required />
                <span className="text-xs text-slate-500 group-hover:text-slate-800 transition-colors">J'accepte que mes données soient traitées pour l'élaboration de ce devis.</span>
              </label>
              <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-5 rounded-2xl transition-all shadow-xl mt-8 flex items-center justify-center gap-3">
                Envoyer ma demande de devis
                <CheckCircle size={22} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
