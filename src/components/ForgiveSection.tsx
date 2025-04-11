
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { floatingAnimation, pulseAnimation, confettiAnimation } from '@/utils/animations';
import { toast } from '@/components/ui/use-toast';
import { Flower } from 'lucide-react';

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
        <div className="absolute inset-0 bg-gradient-to-t from-floral-light/50 to-transparent z-0 animate-fade-in"></div>
      )}
    </div>
  );
};

export default ForgiveSection;
