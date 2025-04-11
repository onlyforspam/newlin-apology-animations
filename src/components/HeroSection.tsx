
import React, { useEffect, useRef } from 'react';
import { animateHeroTitle, revealAnimation } from '@/utils/animations';
import { Flower } from 'lucide-react';

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
      <div className="absolute inset-0 bg-gradient-to-b from-floral-light/30 to-transparent z-0"></div>
      
      {/* Decorative flowers */}
      <div className="absolute top-20 left-20 opacity-20">
        <FlowerDecoration size={80} />
      </div>
      <div className="absolute bottom-20 right-20 opacity-20">
        <FlowerDecoration size={100} />
      </div>
      
      <div className="max-w-4xl mx-auto text-center z-10 px-4">
        <Flower className="inline-block text-floral mb-6 w-16 h-16" />
        <h1 
          id="hero-title"
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold text-floral-dark mb-8 text-shadow-lg"
        >
          Newlin
        </h1>
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-secondary-foreground max-w-2xl mx-auto mb-12"
        >
          Sometimes words aren't enough, but with flowers they bloom...
        </p>
      </div>
    </div>
  );
};

// Decorative flower component
const FlowerDecoration = ({ size }: { size: number }) => {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {[...Array(8)].map((_, i) => (
        <div 
          key={i}
          className="absolute bg-floral-light rounded-t-full"
          style={{ 
            width: size * 0.4, 
            height: size * 0.6,
            top: size * 0.2,
            left: size * 0.3,
            transformOrigin: 'bottom center',
            transform: `rotate(${i * 45}deg)`,
            opacity: 0.8
          }}
        />
      ))}
      <div 
        className="absolute rounded-full bg-yellow-300"
        style={{ 
          width: size * 0.35, 
          height: size * 0.35,
          top: size * 0.325,
          left: size * 0.325
        }} 
      />
    </div>
  );
};

export default HeroSection;
