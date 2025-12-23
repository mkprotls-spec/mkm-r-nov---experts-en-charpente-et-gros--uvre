
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC<{ preview?: boolean }> = ({ preview }) => {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const filters = ['Tous', 'Charpente', 'Gros Œuvre', 'Toiture', 'Patrimoine'];

  const filteredProjects = activeFilter === 'Tous' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  const displayProjects = preview ? PROJECTS.slice(0, 3) : filteredProjects;

  return (
    <section className="py-24 bg-slate-50" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4">Nos Réalisations</h2>
            <p className="text-4xl font-bold text-slate-900 mb-6 font-heading">
              Un savoir-faire <span className="text-blue-900">mis en lumière</span>
            </p>
            <p className="text-slate-600">
              Explorez nos derniers chantiers dans la région de Béziers et du littoral héraultais. Chaque projet est unique.
            </p>
          </div>
          
          {!preview && (
            <div className="flex flex-wrap gap-2">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeFilter === filter 
                      ? 'bg-amber-600 text-white shadow-lg' 
                      : 'bg-white text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-3xl bg-white shadow-xl aspect-[4/5]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                <span className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {preview && (
          <div className="mt-12 text-center">
            <a href="#/portfolio" className="text-amber-600 font-bold border-b-2 border-amber-600 pb-1 hover:text-amber-700 hover:border-amber-700 transition-all">
              Voir la galerie complète
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
