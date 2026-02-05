
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LiveGrid from './components/LiveGrid';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AgeVerification from './components/AgeVerification';

const App: React.FC = () => {
  const [isVerified, setIsVerified] = useState<boolean>(false);

  useEffect(() => {
    const verified = localStorage.getItem('velvet_age_verified');
    if (verified === 'true') {
      setIsVerified(true);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem('velvet_age_verified', 'true');
    setIsVerified(true);
  };

  if (!isVerified) {
    return <AgeVerification onVerify={handleVerify} />;
  }

  return (
    <div className="min-h-screen selection:bg-rose-500 selection:text-white">
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
