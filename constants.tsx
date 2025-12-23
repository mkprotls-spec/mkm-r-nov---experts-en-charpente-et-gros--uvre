
import React from 'react';
import { Hammer, Home, Shield, TreeDeciduous, Construction, HardHat } from 'lucide-react';
import { Project, Service, Testimonial, FAQItem, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: 'renovation',
    title: 'Rénovation de Charpente',
    description: 'Restauration complète de structures anciennes pour assurer la pérennité de votre habitation.',
    icon: 'Hammer',
    image: 'https://cdn.discordapp.com/attachments/1448970855332839479/1453005803668771008/IMG_2550.png?ex=694be09b&is=694a8f1b&hm=9391c6dd0ee105b8d14734900dfa48aaf5a655ebc64b1c83bf74da9af7ef4a2d&',
    priceHint: 'Sur devis gratuit'
  },
  {
    id: 'couverture',
    title: 'Charpentier Couvreur',
    description: 'Pose de toiture et zinguerie avec une expertise artisanale reconnue dans l\'Hérault.',
    icon: 'Home',
    image: 'https://cdn.discordapp.com/attachments/1448970855332839479/1453005804213895230/IMG_2549.png?ex=694be09b&is=694a8f1b&hm=8a6bc80af6fd4ebb3b994482413acfdc2e41dc26eebda1ff7e1b8f67c99c1c02&',
    priceHint: 'Devis personnalisé'
  },
  {
    id: 'vente',
    title: 'Vente de Bois de Charpente',
    description: 'Sélection rigoureuse de bois de qualité supérieure pour vos projets de construction.',
    icon: 'TreeDeciduous',
    image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800',
    priceHint: 'Tarifs compétitifs'
  },
  {
    id: 'traitement',
    title: 'Traitement de Charpente',
    description: 'Protection contre les termites et les champignons pour une structure saine et durable.',
    icon: 'Shield',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    priceHint: 'Forfait préventif/curatif'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Villa Moderne Valras',
    category: 'Gros Œuvre',
    image: 'https://cdn.discordapp.com/attachments/1448970855332839479/1453005804213895230/IMG_2549.png?ex=694be09b&is=694a8f1b&hm=8a6bc80af6fd4ebb3b994482413acfdc2e41dc26eebda1ff7e1b8f67c99c1c02&',
    description: 'Construction intégrale de la structure porteuse.'
  },
  {
    id: 2,
    title: 'Domaine Viticole',
    category: 'Charpente',
    image: 'https://cdn.discordapp.com/attachments/1448970855332839479/1453005804213895230/IMG_2549.png?ex=694be09b&is=694a8f1b&hm=8a6bc80af6fd4ebb3b994482413acfdc2e41dc26eebda1ff7e1b8f67c99c1c02&',
    description: 'Rénovation de charpente traditionnelle apparente.'
  },
  {
    id: 3,
    title: 'Extension Résidentielle',
    category: 'Toiture',
    image: 'https://images.unsplash.com/photo-1449156001437-3a144273908b?auto=format&fit=crop&q=80&w=800',
    description: 'Création d\'un nouvel espace avec charpente bois.'
  },
  {
    id: 4,
    title: 'Restauration Château',
    category: 'Patrimoine',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800',
    description: 'Traitement et consolidation de poutres séculaires.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: 'Jean-Pierre M.', rating: 5, comment: 'Un travail d\'orfèvre sur notre charpente. Ponctuel et professionnel.', date: 'Octobre 2023' },
  { id: 2, name: 'Sophie L.', rating: 5, comment: 'Équipe très sérieuse pour notre agrandissement. Je recommande vivement MKM Rénov.', date: 'Janvier 2024' },
  { id: 3, name: 'Marc B.', rating: 4, comment: 'Très réactifs pour un traitement anti-termites en urgence. Top !', date: 'Mars 2024' }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Quels sont les moyens de paiement acceptés ?',
    answer: 'Nous acceptons les virements bancaires, les chèques et proposons des facilités de paiement en plusieurs fois selon l\'envergure du projet.'
  },
  {
    question: 'Quels types de bois utilisez-vous pour les charpentes ?',
    answer: 'Nous privilégions le Chêne, le Châtaignier pour le traditionnel, et le Sapin ou l\'Épicéa traité pour les charpentes plus modernes, en fonction de vos besoins.'
  },
  {
    question: 'Proposez-vous des traitements anti-termite ?',
    answer: 'Oui, nous réalisons des traitements préventifs et curatifs certifiés pour protéger durablement vos structures bois.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  { id: 1, title: 'Comment entretenir sa charpente ?', excerpt: 'Découvrez nos conseils d\'experts pour faire durer vos structures bois.', date: '15 Fév 2024', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400' },
  { id: 2, title: 'Tendances Rénovation 2024', excerpt: 'Les matériaux et styles qui dominent le marché de la rénovation cette année.', date: '02 Mars 2024', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400' }
];
