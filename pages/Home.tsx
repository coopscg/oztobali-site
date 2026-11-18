import React from 'react';
import Hero from '../components/Hero';
import StatBar from '../components/StatBar';
import ScrollStory from '../components/ScrollStory';
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
      <ScrollStory />
      <HubGrid />
      <FAQAccordion />
      <CTASection
        title="Heading to Bali soon?"
        subtitle="Start with our free checklist: visa, tourist levy, arrival card, duty free and the scams to avoid, in the order you need them."
        ctaLabel="Open the Bali checklist"
        ctaTo="/travel-checklist"
      />
    </>
  );
};

export default Home;
