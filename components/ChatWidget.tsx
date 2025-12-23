
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot, Loader2, Sparkles } from 'lucide-react';
import { getChatResponse } from '../services/gemini';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: 'Bienvenue chez MKM Rénov. Je suis l\'assistant de Mehmet Kaya. Comment puis-je vous guider dans votre projet de prestige ?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!message.trim() || isLoading) return;

    const userMsg = message;
    setMessage('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await getChatResponse(userMsg, history);
    setMessages(prev => [...prev, { role: 'model', text: response || 'Erreur technique. Veuillez nous contacter directement.' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white/95 backdrop-blur-2xl w-[380px] sm:w-[420px] h-[600px] rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.3)] flex flex-col border border-white overflow-hidden mb-6"
          >
            {/* Header */}
            <div className="bg-slate-950 text-white p-6 flex justify-between items-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-gold rounded-2xl flex items-center justify-center shadow-lg shadow-gold/20">
                  <Sparkles size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-black text-sm uppercase tracking-widest">Atelier MKM</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Conseiller expert</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="hover:bg-white/10 p-2 rounded-xl transition-colors active:scale-90"
              >
                <X size={24} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6 bg-slate-50/50">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-3xl text-sm font-medium leading-relaxed shadow-sm ${
                    m.role === 'user' 
                      ? 'bg-gold text-white rounded-br-none shadow-gold/10' 
                      : 'bg-white text-slate-800 rounded-bl-none border border-slate-100'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-100 p-4 rounded-3xl rounded-bl-none flex items-center gap-3">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-6 bg-white border-t border-slate-100 flex gap-3">
              <input 
                type="text" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Votre message..." 
                className="flex-grow bg-slate-100 border-none rounded-2xl px-5 py-4 text-sm font-medium focus:ring-2 focus:ring-gold outline-none"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="bg-slate-950 hover:bg-gold text-white p-4 rounded-2xl transition-all disabled:opacity-50 active:scale-90 shadow-xl"
              >
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-slate-950 hover:bg-gold text-white p-5 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all flex items-center gap-4 group border border-white/10"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-[150px] transition-all duration-500 whitespace-nowrap text-sm font-black uppercase tracking-widest pl-0 group-hover:pl-2">
          {isOpen ? 'Fermer' : 'Une Question ?'}
        </span>
        <div className="relative">
          <MessageSquare size={28} />
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full border-2 border-slate-950 animate-ping"></span>
          )}
        </div>
      </motion.button>
    </div>
  );
};

export default ChatWidget;
