import React from 'react';
import Hero from '../components/Hero';
import HostingPlans from '../components/HostingPlans';
import Features from '../components/Features';
import ServerStatus from '../components/ServerStatus';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <HostingPlans />
      <Features />
      <ServerStatus />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default HomePage;