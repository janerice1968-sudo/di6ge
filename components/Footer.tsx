import React from 'react';
import { GLOBAL_LINK } from '../App';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#09090b] pt-32 pb-16 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
          <div className="md:col-span-2">
            <a href={GLOBAL_LINK} className="flex items-center space-x-3 mb-10 group">
              <div className="w-12 h-12 bg-rose-600 rounded-xl flex items-center justify-center shadow-xl shadow-rose-950">
                <span className="text-white font-serif font-bold italic text-2xl">a</span>
              </div>
              <span className="text-2xl font-serif font-bold tracking-tighter lowercase italic text-white">ardour</span>
            </a>
            <p className="text-zinc-500 max-w-sm mb-10 text-lg leading-relaxed font-medium">
              Elevating the landscape of digital intimacy through high-end design, uncompromising privacy, and elite creators. Your premier destination for verified adult connections.
            </p>
            <div className="flex space-x-8">
              <a href={GLOBAL_LINK} className="text-zinc-600 hover:text-rose-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href={GLOBAL_LINK} className="text-zinc-600 hover:text-rose-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-10 uppercase tracking-[0.2em] text-[11px]">Experience</h4>
            <ul className="space-y-6 text-zinc-600 text-xs font-bold tracking-widest uppercase">
              <li><a href={GLOBAL_LINK} className="hover:text-rose-500 transition-colors">Private Live</a></li>
              <li><a href={GLOBAL_LINK} className="hover:text-rose-500 transition-colors">Dating Search</a></li>
              <li><a href={GLOBAL_LINK} className="hover:text-rose-500 transition-colors">Premium Membership</a></li>
              <li><a href={GLOBAL_LINK} className="hover:text-rose-500 transition-colors">Compliance Hub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-10 uppercase tracking-[0.2em] text-[11px]">The House</h4>
            <ul className="space-y-6 text-zinc-600 text-xs font-bold tracking-widest uppercase">
              <li><a href={GLOBAL_LINK} className="hover:text-rose-500 transition-colors">About Us</a></li>
              <li><a href={GLOBAL_LINK} className="hover:text-rose-500 transition-colors">Apply as Creator</a></li>
              <li><a href={GLOBAL_LINK} className="hover:text-rose-500 transition-colors">Privacy Promise</a></li>
              <li><a href={GLOBAL_LINK} className="hover:text-rose-500 transition-colors">Concierge</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex items-center space-x-4">
            <span className="text-[10px] text-zinc-700 font-black uppercase tracking-[0.3em]">&copy; 2025 ARDOUR MEDIA GROUP. THE PREMIER USA ADULT DESTINATION.</span>
          </div>
          <div className="flex space-x-12 text-[10px] text-zinc-700 font-black uppercase tracking-[0.3em]">
            <a href={GLOBAL_LINK} className="hover:text-white transition-colors">Terms of Service</a>
            <a href={GLOBAL_LINK} className="hover:text-white transition-colors">Privacy Policy</a>
            <a href={GLOBAL_LINK} className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;