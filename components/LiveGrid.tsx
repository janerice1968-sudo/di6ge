
import React from 'react';
import { Model } from '../types';

const MOCK_MODELS: Model[] = [
  { 
    id: '1', 
    name: 'Sophia', 
    age: 24, 
    location: 'Paris, FR', 
    imageUrl: 'https://i.ibb.co/LXrg7T3y/1c7ac342-34a5-4431-a742-41b45a83f459.png', 
    isLive: true, 
    category: 'Sensual', 
    viewers: 1240 
  },
  { 
    id: '2', 
    name: 'Isabella', 
    age: 22, 
    location: 'Milano, IT', 
    imageUrl: 'https://i.ibb.co/SwzR8T9b/469a2c58-a9ea-41b5-830b-3ca1878fc575.png', 
    isLive: true, 
    category: 'Elite', 
    viewers: 890 
  },
  { 
    id: '3', 
    name: 'Elena', 
    age: 25, 
    location: 'NYC, USA', 
    imageUrl: 'https://i.ibb.co/ST4fT1x/455bcd06-ac64-4dfb-b4e5-228a2dba4fd8.png', 
    isLive: true, 
    category: 'Curated', 
    viewers: 2150 
  },
];

const LiveGrid: React.FC = () => {
  return (
    <section id="live" className="relative py-40 bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-24 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-rose-600 font-bold tracking-[0.3em] uppercase mb-6 text-sm">Visual Ecstasy</h2>
            <h3 className="text-5xl md:text-7xl font-serif text-zinc-900 mb-8 italic tracking-tighter">Real-Time Intimacy</h3>
            <p className="text-zinc-500 text-xl font-medium leading-relaxed">
              Witness the art of seduction through crystal-clear lenses. 
              Our most sought-after creators, waiting for your presence.
            </p>
          </div>
          <button className="mt-12 md:mt-0 group flex items-center space-x-4 text-zinc-900 hover:text-rose-600 transition-colors uppercase tracking-[0.3em] text-[11px] font-black border-b-2 border-zinc-100 pb-2">
            <span>Satisfy Curiosity</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {MOCK_MODELS.map((model) => (
            <div key={model.id} className="group relative rounded-[60px] overflow-hidden aspect-[4/5] hover-scale shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-zinc-100 bg-zinc-50">
              <img 
                src={model.imageUrl} 
                alt={model.name} 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent opacity-90 transition-opacity"></div>
              
              {/* Badges */}
              <div className="absolute top-8 left-8 flex space-x-2">
                <span className="bg-rose-600 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg flex items-center">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 animate-pulse"></span>
                  Active Now
                </span>
              </div>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="text-4xl font-serif font-bold text-white mb-2 italic tracking-tight">{model.name}</h4>
                    <p className="text-white/70 text-[10px] flex items-center font-black tracking-[0.2em] uppercase">
                      {model.location} • {model.age} yrs
                    </p>
                  </div>
                  <button className="bg-white hover:bg-rose-600 text-zinc-900 hover:text-white p-5 rounded-2xl shadow-2xl transition-all duration-300 transform group-hover:rotate-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveGrid;
