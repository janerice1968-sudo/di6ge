import React, { useState, useEffect } from 'react';
import { GLOBAL_LINK } from '../App';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass-morphism shadow-2xl' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href={GLOBAL_LINK} className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-rose-600 rounded-lg flex items-center justify-center shadow-lg shadow-rose-900/50 group-hover:bg-rose-500 transition-colors">
            <span className="text-white font-serif font-bold text-2xl italic">a</span>
          </div>
          <span className="text-xl font-serif font-bold tracking-tight text-white lowercase italic">ardour</span>
        </a>

        <nav className="hidden lg:flex items-center space-x-10 text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-400">
          <a href={GLOBAL_LINK} className="hover:text-rose-500 transition-colors">Private Live</a>
          <a href={GLOBAL_LINK} className="hover:text-rose-500 transition-colors">Encounters</a>
          <a href={GLOBAL_LINK} className="hover:text-rose-500 transition-colors">Premium</a>
          <a href={GLOBAL_LINK} className="hover:text-rose-500 transition-colors">Discretion</a>
        </nav>

        <div className="flex items-center space-x-6">
          <a href={GLOBAL_LINK} className="hidden sm:block text-[11px] font-bold tracking-widest text-zinc-300 hover:text-white transition-colors uppercase">Login</a>
          <a 
            href={GLOBAL_LINK}
            className="bg-white hover:bg-rose-600 text-zinc-900 hover:text-white px-8 py-3 rounded-full text-[11px] font-bold tracking-widest shadow-xl transition-all transform hover:scale-105 uppercase"
          >
            Join Exclusive
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;