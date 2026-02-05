
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#fdfcfb]">
      {/* Subtle Background elements */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-50 to-transparent"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-rose-100/50 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 max-w-3xl">
            <div className="inline-flex items-center space-x-4 mb-8">
              <span className="w-12 h-[2px] bg-rose-600"></span>
              <h2 className="text-rose-600 font-bold tracking-[0.4em] uppercase text-xs">Unfiltered Desire</h2>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium leading-[0.95] mb-10 text-zinc-900 tracking-tighter">
              Indulge <br />
              <span className="italic gradient-text">Unseen.</span>
            </h1>
            
            <p className="text-xl text-zinc-500 mb-12 leading-relaxed max-w-xl font-medium">
              Step into a realm where curiosity meets curated intimacy. Experience <span className="text-zinc-900 font-bold">ardour-life</span>, the premier sanctuary for verified elite connections and breathtaking real-time interactions.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-20">
              <button className="bg-zinc-900 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-rose-600 transition-all transform hover:translate-y-[-4px] shadow-2xl shadow-zinc-200 uppercase tracking-widest">
                Unlock Desire
              </button>
              <button className="bg-white text-zinc-900 border border-zinc-200 px-12 py-5 rounded-full font-bold text-lg hover:bg-zinc-50 transition-all transform hover:translate-y-[-4px] uppercase tracking-widest">
                Watch Live
              </button>
            </div>

            <div className="flex items-center space-x-12 text-zinc-400">
              <div className="flex flex-col">
                <span className="text-zinc-900 font-bold text-3xl tabular-nums">2.4M</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Encounters</span>
              </div>
              <div className="w-[1px] h-12 bg-zinc-200"></div>
              <div className="flex flex-col">
                <span className="text-zinc-900 font-bold text-3xl">100%</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Verified</span>
              </div>
              <div className="w-[1px] h-12 bg-zinc-200"></div>
              <div className="flex flex-col">
                <span className="text-zinc-900 font-bold text-3xl">Elite</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Circle</span>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative z-20">
              <div className="absolute -inset-10 bg-rose-200/30 blur-[120px] rounded-full"></div>
              <div className="relative rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-white p-2 border border-zinc-100">
                <div className="rounded-[50px] overflow-hidden aspect-[4/5]">
                  <img 
                    src="https://i.ibb.co/nN6bfYrH/0596d0c9-1a71-4959-87fc-c89e1e40259c.png" 
                    alt="ardour-life Elite" 
                    className="w-full h-full object-cover transition-all duration-1000"
                  />
                </div>
              </div>

              {/* Status Floating Card */}
              <div className="absolute -bottom-10 -left-16 group">
                <div className="bg-white p-5 rounded-3xl shadow-2xl flex items-center space-x-5 border border-zinc-50 transform hover:scale-105 transition-transform">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden ring-4 ring-rose-50">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" className="w-full h-full object-cover" alt="Elite Profile" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-4 border-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-sm font-black text-zinc-900">Elena V. <span className="text-rose-600 ml-1">Live</span></p>
                    <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">Waiting for you...</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-12 -right-8 w-24 h-24 bg-rose-600 rounded-full flex items-center justify-center -rotate-12 shadow-xl shadow-rose-200">
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
