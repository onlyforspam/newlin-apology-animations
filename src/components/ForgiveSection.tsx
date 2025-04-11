
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { floatingAnimation, pulseAnimation, confettiAnimation } from '@/utils/animations';
import { toast } from '@/components/ui/use-toast';

const ForgiveSection = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [forgiven, setForgiven] = useState(false);
  
  useEffect(() => {
    if (buttonRef.current && !forgiven) {
      pulseAnimation(buttonRef.current);
    }
  }, [forgiven]);
  
  const handleForgiveness = () => {
    if (containerRef.current) {
      confettiAnimation(containerRef.current);
      setForgiven(true);
      
      toast({
        title: "Thank You, Newlin! ❤️",
        description: "Your forgiveness means the world to me.",
        duration: 5000,
      });
    }
  };
  
  return (
    <div 
      ref={containerRef}
      className="py-32 px-4 text-center relative overflow-hidden"
    >
      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl text-apology-dark mb-6 text-shadow animate-on-scroll">
          {forgiven ? "Thank You" : "Can You Find It In Your Heart?"}
        </h2>
        
        <p className="text-lg text-gray-600 mb-12 animate-on-scroll">
          {forgiven 
            ? "Your forgiveness means the world to me. I promise to do better."
            : "Everyone makes mistakes, but not everyone gets the chance to make things right."
          }
        </p>
        
        {forgiven ? (
          <div className="animate-scale-up">
            <div className="text-5xl mb-4">❤️</div>
            <p className="text-apology-dark text-xl font-medium">A new beginning...</p>
          </div>
        ) : (
          <Button 
            ref={buttonRef}
            onClick={handleForgiveness}
            className="bg-apology hover:bg-apology-dark text-white px-8 py-6 text-xl rounded-full shadow-xl transition-all duration-300 animate-on-scroll"
          >
            I Forgive You
          </Button>
        )}
      </div>
      
      {forgiven && (
        <div className="absolute inset-0 bg-gradient-to-t from-apology-light/50 to-transparent z-0 animate-fade-in"></div>
      )}
    </div>
  );
};

export default ForgiveSection;
