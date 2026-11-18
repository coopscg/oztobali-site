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
        title="Never been to Bali? Start here."
        subtitle="Our free step-by-step guide takes you from picking dates to landing in Bali, in the order you need to do things. Moving for longer? There's a step-by-step guide for that too."
        ctaLabel="Start the step-by-step guide"
        ctaTo="/plan/holiday"
      />
    </>
  );
};

export default Home;
