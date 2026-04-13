import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import HeroSection from '../components/landing/HeroSection';
import ProgressSection from '../components/landing/ProgressSection';
import StatementsSection from '../components/landing/StatementsSection';
import IntegrationsSection from '../components/landing/IntegrationsSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import AudiencesSection from '../components/landing/AudiencesSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import CTASection from '../components/landing/CTASection';

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
  useEffect(() => {
    // Refresh ScrollTrigger after all images load so pin calculations are correct
    const images = document.querySelectorAll('img');
    let loaded = 0;
    const total = images.length;
    const onLoad = () => {
      loaded++;
      if (loaded >= total) ScrollTrigger.refresh();
    };
    images.forEach(img => {
      if (img.complete) onLoad();
      else img.addEventListener('load', onLoad);
    });
  }, []);

  return (
    <>
      <HeroSection />
      <ProgressSection />
      <StatementsSection />
      <IntegrationsSection />
      <FeaturesSection />
      <AudiencesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
