import React from 'react';
import { GLOBAL_LINK } from '../App';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#09090b]">
      {/* Dynamic Background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-900/40 to-transparent"></div>
        <div className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-rose-900/30 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-zinc-800/50 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 max-w-3xl">
            <div className="inline-flex items-center space-x-4 mb-8">
              <span className="w-12 h-[2px] bg-rose-600"></span>
              <h2 className="text-rose-500 font-bold tracking-[0.4em] uppercase text-xs">USA Premium Network</h2>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium leading-[0.95] mb-10 text-white tracking-tighter">
              Indulge <br />
              <span className="italic gradient-text">Unfiltered.</span>
            </h1>
            
            <p className="text-xl text-zinc-400 mb-12 leading-relaxed max-w-xl font-medium">
              Welcome to <span className="text-white font-bold">Ardour</span>. The most sophisticated destination for verified elite connections and high-definition intimacy. 
              <span className="block mt-2 text-rose-400/80">Experience the unseen, tonight.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-20">
              <a 
                href={GLOBAL_LINK}
                className="inline-block text-center bg-rose-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-rose-500 transition-all transform hover:translate-y-[-4px] glow-rose uppercase tracking-widest"
              >
                Unlock Access
              </a>
              <a 
                href={GLOBAL_LINK}
                className="inline-block text-center bg-zinc-900 text-zinc-100 border border-zinc-800 px-12 py-5 rounded-full font-bold text-lg hover:bg-zinc-800 transition-all transform hover:translate-y-[-4px] uppercase tracking-widest"
              >
                Watch Live
              </a>
            </div>

            <div className="flex items-center space-x-12 text-zinc-500">
              <div className="flex flex-col">
                <span className="text-white font-bold text-3xl tabular-nums">4.8M</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Connections</span>
              </div>
              <div className="w-[1px] h-12 bg-zinc-800"></div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-3xl">100%</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Discrete</span>
              </div>
              <div className="w-[1px] h-12 bg-zinc-800"></div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-3xl">HD</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Quality</span>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative z-20">
              <div className="absolute -inset-10 bg-rose-600/10 blur-[120px] rounded-full"></div>
              <div className="relative rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(225,29,72,0.2)] bg-zinc-900 p-2 border border-zinc-800">
                <div className="rounded-[50px] overflow-hidden aspect-[4/5]">
                  <img 
                    src="https://i.ibb.co/nN6bfYrH/0596d0c9-1a71-4959-87fc-c89e1e40259c.png" 
                    alt="Ardour Elite" 
                    className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
                  />
                </div>
              </div>

              {/* Status Floating Card */}
              <div className="absolute -bottom-10 -left-16 group">
                <a href={GLOBAL_LINK} className="bg-zinc-900/90 backdrop-blur-md p-5 rounded-3xl shadow-2xl flex items-center space-x-5 border border-zinc-800 transform hover:scale-105 transition-transform cursor-pointer">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden ring-4 ring-rose-900/30">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" className="w-full h-full object-cover" alt="Elite Profile" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-4 border-zinc-900 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-sm font-black text-white">Elena V. <span className="text-rose-500 ml-1 animate-pulse">Live</span></p>
                    <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">2.4k watching</p>
                  </div>
                </a>
              </div>

              <div className="absolute top-12 -right-8 w-24 h-24 bg-rose-600 rounded-full flex items-center justify-center -rotate-12 shadow-2xl shadow-rose-900/50">
                <span className="text-white font-serif italic text-3xl">a-l</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;