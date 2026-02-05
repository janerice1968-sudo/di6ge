
import React from 'react';

interface AgeVerificationProps {
  onVerify: () => void;
}

const AgeVerification: React.FC<AgeVerificationProps> = ({ onVerify }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#fdfcfb] p-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-50 blur-[150px] rounded-full opacity-50"></div>
      </div>

      <div className="max-w-xl w-full bg-white p-12 lg:p-16 rounded-[60px] border border-zinc-100 text-center relative z-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]">
        <div className="w-20 h-20 bg-rose-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-rose-200 mx-auto mb-10">
          <span className="text-white font-serif font-bold text-4xl italic">a</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-6 italic tracking-tight">Elegance awaits.</h2>
        <p className="text-zinc-500 mb-12 text-lg font-medium leading-relaxed">
          <span className="text-zinc-900 font-bold tracking-tight">ardour-life</span> is a sanctuary of intimacy. You must be at least 18 years old to enter this realm of shared secrets.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <button 
            onClick={onVerify}
            className="flex-1 bg-zinc-900 text-white font-bold py-5 rounded-full hover:bg-rose-600 transition-all transform active:scale-95 shadow-2xl shadow-zinc-200 uppercase tracking-[0.2em] text-xs"
          >
            Enter Sanctuary
          </button>
          <button 
            onClick={() => window.location.href = "https://google.com"}
            className="flex-1 bg-white text-zinc-400 font-bold py-5 rounded-full border border-zinc-100 hover:bg-zinc-50 transition-all transform active:scale-95 uppercase tracking-[0.2em] text-xs"
          >
            Leave Quietly
          </button>
        </div>

        <p className="mt-12 text-[10px] text-zinc-300 uppercase tracking-[0.3em] font-black">
          Compliance • Privacy • Luxury
        </p>
      </div>
    </div>
  );
};

export default AgeVerification;
