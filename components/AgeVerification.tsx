import React from 'react';
import { GLOBAL_LINK } from '../App';

interface AgeVerificationProps {
  onVerify: () => void;
}

const AgeVerification: React.FC<AgeVerificationProps> = ({ onVerify }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#09090b] p-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-900/20 blur-[150px] rounded-full opacity-50"></div>
      </div>

      <div className="max-w-xl w-full bg-zinc-900/80 backdrop-blur-2xl p-12 lg:p-16 rounded-[60px] border border-zinc-800 text-center relative z-10 shadow-2xl">
        <div className="w-20 h-20 bg-rose-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-rose-900/50 mx-auto mb-10">
          <span className="text-white font-serif font-bold text-4xl italic">a</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 italic tracking-tight">Elegance awaits.</h2>
        <p className="text-zinc-400 mb-12 text-lg font-medium leading-relaxed">
          <span className="text-white font-bold tracking-tight">Ardour</span> is a sanctuary of intimacy. You must be at least 18 years old to enter this realm of premium connections.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <a 
            href={GLOBAL_LINK}
            onClick={onVerify}
            className="flex-1 bg-white text-zinc-950 font-extrabold py-5 rounded-full hover:bg-rose-600 hover:text-white transition-all transform active:scale-95 shadow-xl uppercase tracking-[0.2em] text-xs flex items-center justify-center"
          >
            I am 18+ Enter
          </a>
          <button 
            onClick={() => window.location.href = "https://google.com"}
            className="flex-1 bg-transparent text-zinc-500 font-bold py-5 rounded-full border border-zinc-800 hover:bg-zinc-800 transition-all transform active:scale-95 uppercase tracking-[0.2em] text-xs"
          >
            Leave
          </button>
        </div>

        <p className="mt-12 text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-black">
          Strict Compliance • End-to-End Privacy • 18+ Only
        </p>
      </div>
    </div>
  );
};

export default AgeVerification;