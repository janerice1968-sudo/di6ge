
import React from 'react';
import { Model } from '../types';

const MOCK_MODELS: Model[] = [
  { 
    id: '1', 
    name: 'Sophia', 
    age: 24, 
    location: 'Paris, FR', 
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop', 
    isLive: true, 
    category: 'Sensual', 
    viewers: 1240 
  },
  { 
    id: '2', 
    name: 'Isabella', 
    age: 22, 
    location: 'Milano, IT', 
    imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop', 
    isLive: true, 
    category: 'Premium', 
    viewers: 890 
  },
];

const LiveGrid: React.FC = () => {
  return (
    <section id="live" className="relative py-40 bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-24 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-rose-600 font-bold tracking-[0.3em] uppercase mb-6 text-sm">Live Studio</h2>
            <h3 className="text-5xl md:text-7xl font-serif text-zinc-900 mb-8 italic">In Focus</h3>
            <p className="text-zinc-500 text-xl font-medium leading-relaxed">
              Curated high-definition experiences with our most sought-after creators. 
              Pure elegance, uncensored.
            </p>
          </div>
          <button className="mt-12 md:mt-0 group flex items-center space-x-4 text-zinc-900 hover:text-rose-600 transition-colors uppercase tracking-[0.3em] text-[11px] font-black border-b-2 border-zinc-100 pb-2">
            <span>Discover More</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto">
          {MOCK_MODELS.map((model) => (
            <div key={model.id} className="group relative rounded-[60px] overflow-hidden aspect-[4/5] hover-scale shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-zinc-100">
              <img 
                src={model.imageUrl} 
                alt={model.name} 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-80 transition-opacity"></div>
              
              {/* Badges */}
              <div className="absolute top-10 left-10 flex space-x-3">
                <span className="bg-rose-600 text-white text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-rose-200 flex items-center">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 animate-pulse"></span>
                  Live Now
                </span>
                <span className="bg-white/90 backdrop-blur-md text-zinc-900 text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-[0.2em] border border-white">
                  {model.category}
                </span>
              </div>

              <div className="absolute top-10 right-10">
                <div className="flex items-center space-x-2 bg-zinc-900/40 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                  <span className="text-[10px] font-black tracking-widest">{model.viewers} ONLINE</span>
                </div>
              </div>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-12 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-2 italic">{model.name}</h4>
                    <p className="text-white/70 text-sm flex items-center font-bold tracking-[0.1em] uppercase">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {model.location} • {model.age} yrs
                    </p>
                  </div>
                  <button className="bg-white hover:bg-rose-600 text-zinc-900 hover:text-white p-6 rounded-2xl shadow-2xl transition-all duration-300 transform group-hover:rotate-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
