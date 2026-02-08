import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LiveGrid from './components/LiveGrid';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AgeVerification from './components/AgeVerification';

export const GLOBAL_LINK = "https://t.acrsmartcam.com/404142/7335?bo=2779,2778,2777,2776,2775&aff_sub5=SF_006OG000004lmDN";

const App: React.FC = () => {
  const [isVerified, setIsVerified] = useState<boolean>(false);

  useEffect(() => {
    const verified = localStorage.getItem('ardour_age_verified');
    if (verified === 'true') {
      setIsVerified(true);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem('ardour_age_verified', 'true');
    setIsVerified(true);
  };

  if (!isVerified) {
    return <AgeVerification onVerify={handleVerify} />;
  }

  return (
    <div className="min-h-screen bg-[#09090b] selection:bg-rose-500 selection:text-white text-zinc-100">
      <Header />
      <main>
        <Hero />
        <LiveGrid />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;