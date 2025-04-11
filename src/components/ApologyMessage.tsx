
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { typewriterAnimation, initScrollAnimations } from '@/utils/animations';
import { Flower } from 'lucide-react';

const ApologyMessage = () => {
  const messageRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageRef.current) {
      typewriterAnimation(
        messageRef.current,
        "Hey, Sorry Newlin Na pannunadhu thappu thaan. Enna mannichiru idhuku aproma inimel ipdi panna maaten.",
        0.5
      );
    }

    // Initialize scroll-based animations
    initScrollAnimations();
  }, []);

  return (
    <div className="py-20 px-4 max-w-4xl mx-auto">
      <div 
        className="animate-on-scroll mb-12 text-center"
        data-delay="0.3"
      >
        <h2 className="text-4xl md:text-5xl text-floral-dark mb-4 text-shadow">
          From the Heart
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Some feelings are hard to express, but like flowers they need nurturing to grow.
        </p>
      </div>

      <Card 
        ref={cardRef}
        className="shadow-xl border-floral/20 overflow-hidden animate-on-scroll card-shadow relative"
      >
        {/* Decorative corner flowers */}
        <div className="absolute -top-6 -left-6 opacity-20">
          <Flower className="w-12 h-12 text-floral" />
        </div>
        <div className="absolute -bottom-6 -right-6 opacity-20">
          <Flower className="w-12 h-12 text-floral" />
        </div>
        
        <CardContent className="p-8 md:p-12 bg-gradient-to-br from-white to-floral-light/20">
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-1 bg-floral rounded-full"></div>
          </div>
          <p 
            ref={messageRef}
            className="text-lg md:text-xl leading-relaxed text-gray-700 min-h-[150px]"
          ></p>
          <div className="mt-8 text-right">
            <p className="text-floral-dark italic">With sincerity and regret,</p>
            <div className="inline-block mt-2">
              <Flower className="w-5 h-5 text-floral inline-block mr-1" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApologyMessage;
