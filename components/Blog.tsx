
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4">Actualités & Conseils</h2>
          <p className="text-4xl font-bold text-slate-900 mb-6 font-heading italic">Le Blog de <span className="text-blue-900">l'Artisan</span></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {BLOG_POSTS.map(post => (
            <div key={post.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl aspect-[16/9] mb-6 shadow-xl">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-amber-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">CONSEIL D'ARTISAN</div>
              </div>
              <div className="flex items-center gap-6 text-slate-400 text-xs mb-4">
                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                <span className="flex items-center gap-1"><User size={14} /> Par MKM Rénov</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors leading-tight">{post.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{post.excerpt}</p>
              <button className="flex items-center gap-2 text-blue-900 font-bold border-b-2 border-blue-900/10 hover:border-amber-600 pb-1 group-hover:text-amber-600 transition-all">
                Lire la suite <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
