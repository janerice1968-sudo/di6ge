import React from 'react';
import { GLOBAL_LINK } from '../App';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      user: "Michael R.",
      role: "Elite Member",
      content: "The level of sophistication here is unmatched. I finally found a platform that values my privacy as much as I do.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
    },
    {
      user: "Sarah J.",
      role: "Verified Model",
      content: "As a creator, Ardour provides the highest level of security and the most respectful audience globally.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
    },
    {
      user: "David W.",
      role: "Premium Guest",
      content: "The visual fidelity is stunning. It feels personal, profound, and incredibly real.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-40 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="w-full lg:w-1/3">
            <h2 className="text-rose-500 font-bold tracking-[0.4em] uppercase mb-6 text-xs text-center lg:text-left">Shared Secrets</h2>
            <h3 className="text-5xl md:text-7xl font-serif text-white mb-10 italic text-center lg:text-left tracking-tighter leading-none">Voices <br />Unmasked</h3>
            <p className="text-zinc-500 mb-10 leading-relaxed text-xl font-medium text-center lg:text-left">
              Join the thousands who have found a new standard of luxury connection.
            </p>
            <div className="flex items-center justify-center lg:justify-start space-x-3 text-rose-500">
              <span className="text-3xl font-black italic tracking-tighter">4.9</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <a href={GLOBAL_LINK} className="mt-12 block text-center lg:text-left text-zinc-400 hover:text-white underline underline-offset-8 transition-colors uppercase tracking-[0.2em] text-[10px] font-bold">Read more stories</a>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-10">
            {reviews.map((r, i) => (
              <a key={i} href={GLOBAL_LINK} className={`p-10 bg-zinc-900/50 rounded-[40px] border border-zinc-800 shadow-xl hover:border-rose-900/30 transition-colors block ${i === 2 ? 'md:col-span-2' : ''}`}>
                <div className="flex items-center space-x-6 mb-8">
                  <img src={r.avatar} alt={r.user} className="w-16 h-16 rounded-2xl object-cover ring-4 ring-zinc-800 shadow-lg" />
                  <div>
                    <p className="font-black text-xl text-white">{r.user}</p>
                    <p className="text-[10px] text-rose-500 uppercase tracking-[0.2em] font-black">{r.role}</p>
                  </div>
                </div>
                <p className="text-zinc-400 italic leading-relaxed text-xl font-serif">"{r.content}"</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;