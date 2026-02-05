
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Silent Discretion",
      description: "Complete anonymity for your most private desires. Your path into the club remains strictly between us.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Verified Authenticity",
      description: "We verify every profile to ensure your encounters are genuine. Only the elite grace our private chambers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Sensory Mastery",
      description: "Experience interactions in stunning clarity. Every breath, every motion, captured for your absolute pleasure.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-40 bg-[#fdfcfb] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-100 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-32">
          <h2 className="text-rose-600 font-bold tracking-[0.4em] uppercase mb-6 text-xs">Standard of Intimacy</h2>
          <h3 className="text-6xl md:text-8xl font-serif text-zinc-900 italic mb-10 tracking-tighter">The Secret Ethos</h3>
          <p className="text-zinc-500 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
            Redefining the landscape of personal connection. A sanctuary where your deepest fantasies are nurtured in luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {features.map((f, i) => (
            <div key={i} className="group p-12 bg-white rounded-[60px] border border-zinc-100 shadow-xl hover:shadow-2xl hover:border-rose-100 transition-all duration-500 hover:-translate-y-2">
              <div className="mb-10 w-20 h-20 bg-rose-50 rounded-3xl flex items-center justify-center group-hover:bg-rose-600 transition-all duration-500">
                <div className="group-hover:text-white transition-colors duration-500">
                  {f.icon}
                </div>
              </div>
              <h4 className="text-3xl font-serif font-bold mb-6 text-zinc-900 tracking-tight">{f.title}</h4>
              <p className="text-zinc-500 leading-relaxed font-medium text-lg">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
