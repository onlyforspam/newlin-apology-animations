
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { floatingAnimation, pulseAnimation, confettiAnimation } from '@/utils/animations';
import { toast } from '@/components/ui/use-toast';
import { Flower, Heart } from 'lucide-react';

const ForgiveSection = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [forgiven, setForgiven] = useState(false);
  const [heartsVisible, setHeartsVisible] = useState(false);
  
  useEffect(() => {
    if (buttonRef.current && !forgiven) {
      pulseAnimation(buttonRef.current);
    }
  }, [forgiven]);
  
  useEffect(() => {
    if (forgiven && containerRef.current) {
      // Create floating hearts after forgiveness
      setTimeout(() => {
        setHeartsVisible(true);
        const createFloatingHearts = () => {
          for (let i = 0; i < 5; i++) {
            const heartEl = document.createElement('div');
            heartEl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FF719A" stroke="none"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>';
            heartEl.className = 'absolute z-20';
            heartEl.style.opacity = '0';
            containerRef.current?.appendChild(heartEl);
            
            gsap.set(heartEl, {
              x: Math.random() * 300 - 150,
              y: 100,
              scale: Math.random() * 0.5 + 0.8,
              opacity: 0
            });
            
            gsap.to(heartEl, {
              y: -150 - Math.random() * 100,
              opacity: 0.8,
              duration: 3 + Math.random() * 2,
              delay: i * 0.5,
              ease: "power1.out",
              onComplete: () => {
                gsap.to(heartEl, {
                  opacity: 0,
                  duration: 1,
                  onComplete: () => {
                    if (heartEl.parentNode) {
                      heartEl.parentNode.removeChild(heartEl);
                    }
                  }
                });
              }
            });
          }
        };
        
        createFloatingHearts();
        // Repeat the floating hearts every few seconds
        const heartInterval = setInterval(createFloatingHearts, 4000);
        
        return () => clearInterval(heartInterval);
      }, 1000);
    }
  }, [forgiven]);
  
  const handleForgiveness = () => {
    if (containerRef.current) {
      // Create flower confetti
      confettiAnimation(containerRef.current);
      
      // Add a second burst of confetti after a delay
      setTimeout(() => {
        confettiAnimation(containerRef.current);
      }, 300);
      
      // Add a third burst for good measure
      setTimeout(() => {
        confettiAnimation(containerRef.current);
      }, 600);
      
      setForgiven(true);
      
      toast({
        title: "Thank You, Newlin! ❤️",
        description: "Your forgiveness blooms like the most beautiful flower.",
        duration: 5000,
      });
    }
  };
  
  return (
    <div 
      ref={containerRef}
      className="py-32 px-4 text-center relative overflow-hidden"
    >
      {/* Background decorative flowers */}
      {[...Array(6)].map((_, i) => (
        <div 
          key={i} 
          className="absolute opacity-10"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `scale(${Math.random() * 0.5 + 0.5}) rotate(${Math.random() * 360}deg)`
          }}
        >
          <Flower className="w-20 h-20 text-floral" />
        </div>
      ))}
      
      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl text-floral-dark mb-6 text-shadow animate-on-scroll">
          {forgiven ? "Thank You" : "Can You Find It In Your Heart?"}
        </h2>
        
        <p className="text-lg text-gray-600 mb-12 animate-on-scroll">
          {forgiven 
            ? "Your forgiveness is like spring after winter - a beautiful new beginning."
            : "Like a flower needs rain and sunshine, I need your forgiveness to grow better."
          }
        </p>
        
        {forgiven ? (
          <div className="animate-scale-up">
            <div className="text-5xl mb-4 relative inline-block">
              <Flower className="w-20 h-20 text-floral animate-pulse-gentle" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl">❤️</span>
              </div>
            </div>
            <p className="text-floral-dark text-xl font-medium">A new beginning blooms...</p>
          </div>
        ) : (
          <Button 
            ref={buttonRef}
            onClick={handleForgiveness}
            className="bg-floral hover:bg-floral-dark text-white px-8 py-6 text-xl rounded-full shadow-xl transition-all duration-300 animate-on-scroll flex items-center gap-2"
          >
            <Flower className="w-6 h-6" /> I Forgive You
          </Button>
        )}
      </div>
      
      {forgiven && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-floral-light/50 to-transparent z-0 animate-fade-in"></div>
          {heartsVisible && (
            <div className="absolute w-full h-full pointer-events-none"></div>
          )}
        </>
      )}
    </div>
  );
};

export default ForgiveSection;
