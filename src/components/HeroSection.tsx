
import React, { useEffect, useRef } from 'react';
import { animateHeroTitle, revealAnimation } from '@/utils/animations';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      // Split text into characters for animation
      const text = titleRef.current.textContent || '';
      const splitText = text.split('').map((char, i) => 
        char === ' ' 
          ? ' ' 
          : `<span class="char inline-block" key=${i}>${char}</span>`
      ).join('');
      
      titleRef.current.innerHTML = splitText;
      animateHeroTitle('#hero-title');
    }

    if (subtitleRef.current) {
      revealAnimation(subtitleRef.current, 1.2);
    }
  }, []);

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-apology-light/30 to-transparent z-0"></div>
      <div className="max-w-4xl mx-auto text-center z-10 px-4">
        <h1 
          id="hero-title"
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold text-apology-dark mb-8 text-shadow-lg"
        >
          Newlin
        </h1>
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-secondary-foreground max-w-2xl mx-auto mb-12"
        >
          Sometimes words aren't enough, but they're where we begin...
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
