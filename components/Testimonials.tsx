
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      user: "Michael R.",
      role: "Club Member",
      content: "The level of sophistication on ardour-life is unmatched. I've met fascinating people who value privacy as much as I do.",
      avatar: "https://picsum.photos/id/64/100/100"
    },
    {
      user: "Sarah J.",
      role: "Verified Creator",
      content: "As a creator, the platform's focus on high-end aesthetics and an elite audience makes it my only home.",
      avatar: "https://picsum.photos/id/129/100/100"
    },
    {
      user: "David W.",
      role: "Gold Member",
      content: "The 4K streaming quality is surreal. No lag, just crystal clear interaction that feels incredibly personal.",
      avatar: "https://picsum.photos/id/91/100/100"
    }
  ];

  return (
    <section className="py-40 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="w-full lg:w-1/3">
            <h2 className="text-rose-600 font-bold tracking-[0.4em] uppercase mb-6 text-xs text-center lg:text-left">Club Voice</h2>
            <h3 className="text-5xl md:text-7xl font-serif text-zinc-900 mb-10 italic text-center lg:text-left tracking-tighter leading-none">The <br />Experience</h3>
            <p className="text-zinc-500 mb-10 leading-relaxed text-xl font-medium text-center lg:text-left">
              Join a distinguished circle of individuals who have discovered a new standard for adult connections.
            </p>
            <div className="flex items-center justify-center lg:justify-start space-x-3 text-rose-600">
              <span className="text-3xl font-black italic tracking-tighter">4.9</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-10">
            {reviews.map((r, i) => (
              <div key={i} className={`p-10 bg-[#fdfcfb] rounded-[40px] border border-zinc-100 shadow-xl ${i === 2 ? 'md:col-span-2' : ''}`}>
                <div className="flex items-center space-x-6 mb-8">
                  <img src={r.avatar} alt={r.user} className="w-16 h-16 rounded-2xl object-cover ring-4 ring-white shadow-lg" />
                  <div>
                    <p className="font-black text-xl text-zinc-900">{r.user}</p>
                    <p className="text-[10px] text-rose-600 uppercase tracking-[0.2em] font-black">{r.role}</p>
                  </div>
                </div>
                <p className="text-zinc-600 italic leading-relaxed text-xl font-serif">"{r.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
