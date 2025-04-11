
import React, { useEffect } from 'react';
import FloatingElements from '@/components/FloatingElements';
import HeroSection from '@/components/HeroSection';
import ApologyMessage from '@/components/ApologyMessage';
import MemoriesSection from '@/components/MemoriesSection';
import ForgiveSection from '@/components/ForgiveSection';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Index = () => {
  useEffect(() => {
    // Initialize main page animation
    gsap.fromTo(
      '.apology-page',
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.inOut' }
    );

    // Initialize scroll trigger for all scroll animations
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
    
    animateOnScrollElements.forEach((element, index) => {
      const delay = element.getAttribute('data-delay') || (index * 0.1);
      
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: parseFloat(delay.toString()),
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    return () => {
      // Clean up ScrollTrigger instances when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen apology-page">
      <FloatingElements />
      <main>
        <HeroSection />
        <ApologyMessage />
        <MemoriesSection />
        <ForgiveSection />
      </main>
      
      <footer className="py-6 bg-white border-t border-gray-100 text-center text-sm text-gray-500">
        <p>Created with sincerity and hope for forgiveness</p>
      </footer>
    </div>
  );
};

export default Index;
