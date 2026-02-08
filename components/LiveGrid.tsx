import React from 'react';
import { Model } from '../types';
import { GLOBAL_LINK } from '../App';

const MOCK_MODELS: Model[] = [
  { 
    id: '1', 
    name: 'Sophia', 
    age: 23, 
    location: 'Miami, FL', 
    imageUrl: 'https://i.ibb.co/LXrg7T3y/1c7ac342-34a5-4431-a742-41b45a83f459.png', 
    isLive: true, 
    category: 'Sensual', 
    viewers: 3105 
  },
  { 
    id: '2', 
    name: 'Isabella', 
    age: 22, 
    location: 'Austin, TX', 
    imageUrl: 'https://i.ibb.co/SwzR8T9b/469a2c58-a9ea-41b5-830b-3ca1878fc575.png', 
    isLive: true, 
    category: 'Elite', 
    viewers: 1280 
  },
  { 
    id: '3', 
    name: 'Elena', 
    age: 25, 
    location: 'Los Angeles, CA', 
    imageUrl: 'https://i.ibb.co/ST4fT1x/455bcd06-ac64-4dfb-b4e5-228a2dba4fd8.png', 
    isLive: true, 
    category: 'Premium', 
    viewers: 4520 
  },
];

const LiveGrid: React.FC = () => {
  return (
    <section id="live" className="relative py-40 bg-zinc-950">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-24 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-rose-500 font-bold tracking-[0.3em] uppercase mb-6 text-sm">Now Broadcasting</h2>
            <h3 className="text-5xl md:text-7xl font-serif text-white mb-8 italic tracking-tighter">Real-Time Connection</h3>
            <p className="text-zinc-400 text-xl font-medium leading-relaxed">
              Experience unfiltered desire in 4K resolution. Our most exclusive creators are online and waiting for your intimate presence.
            </p>
          </div>
          <a 
            href={GLOBAL_LINK}
            className="mt-12 md:mt-0 group flex items-center space-x-4 text-white hover:text-rose-500 transition-colors uppercase tracking-[0.3em] text-[11px] font-black border-b-2 border-zinc-800 pb-2"
          >
            <span>Explore All Creators</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {MOCK_MODELS.map((model) => (
            <a 
              key={model.id} 
              href={GLOBAL_LINK}
              className="group relative rounded-[60px] overflow-hidden aspect-[4/5] hover-scale shadow-2xl border border-zinc-900 bg-zinc-900 block cursor-pointer"
            >
              <img 
                src={model.imageUrl} 
                alt={model.name} 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale-[0.1] group-hover:grayscale-0"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 transition-opacity"></div>
              
              {/* Badges */}
              <div className="absolute top-8 left-8 flex flex-col space-y-2">
                <span className="bg-rose-600 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg flex items-center w-fit">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 animate-pulse"></span>
                  Live
                </span>
                <span className="bg-zinc-900/60 backdrop-blur-md text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-[0.1em] w-fit">
                  {model.viewers?.toLocaleString()} Watching
                </span>
              </div>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="text-4xl font-serif font-bold text-white mb-2 italic tracking-tight">{model.name}</h4>
                    <p className="text-white/60 text-[10px] flex items-center font-black tracking-[0.2em] uppercase">
                      {model.location} • {model.age} yrs
                    </p>
                  </div>
                  <div className="bg-white hover:bg-rose-600 text-zinc-950 hover:text-white p-5 rounded-2xl shadow-2xl transition-all duration-300 transform group-hover:rotate-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveGrid;