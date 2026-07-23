import React from 'react';
import Hero from '../components/Hero';
import StatBar from '../components/StatBar';
import HubGrid from '../components/HubGrid';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';
import { useSEO } from '../hooks/useSEO';
import { homeSEO } from '../seo/pages';

const Home: React.FC = () => {
  useSEO(homeSEO());

  return (
    <>
      <Hero />
      <StatBar />
      <HubGrid />
      <FAQAccordion />
      <CTASection
        title="Ready to start planning your move?"
        subtitle="Tell us where you're at — just researching, mid-move, or already there — and we'll point you to what matters most right now."
      />
    </>
  );
};

export default Home;
