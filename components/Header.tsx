
import React, { useState, useEffect } from 'react';

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
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass-morphism border-b shadow-sm' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-rose-600 rounded-lg flex items-center justify-center shadow-lg shadow-rose-200">
            <span className="text-white font-serif font-bold text-2xl italic">a</span>
          </div>
          <span className="text-xl font-serif font-bold tracking-tight text-zinc-900 lowercase italic">ardour-life</span>
        </div>

        <nav className="hidden lg:flex items-center space-x-10 text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-600">
          <a href="#live" className="hover:text-rose-600 transition-colors">Live Cams</a>
          <a href="#dating" className="hover:text-rose-600 transition-colors">Dating</a>
          <a href="#premium" className="hover:text-rose-600 transition-colors">Membership</a>
          <a href="#privacy" className="hover:text-rose-600 transition-colors">Discretion</a>
        </nav>

        <div className="flex items-center space-x-6">
          <button className="hidden sm:block text-[11px] font-bold tracking-widest text-zinc-900 hover:text-rose-600 transition-colors">LOG IN</button>
          <button className="bg-zinc-900 hover:bg-rose-600 text-white px-8 py-3 rounded-full text-[11px] font-bold tracking-widest shadow-xl transition-all transform hover:scale-105 uppercase">
            Join Club
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
