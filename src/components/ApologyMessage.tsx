
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { typewriterAnimation, initScrollAnimations } from '@/utils/animations';

const ApologyMessage = () => {
  const messageRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageRef.current) {
      typewriterAnimation(
        messageRef.current,
        "I'm truly sorry for the hurt I've caused. My words and actions were thoughtless. You deserve better, and I want to make things right. Your feelings matter to me, and I hope you can find it in your heart to forgive me.",
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
        <h2 className="text-4xl md:text-5xl text-apology-dark mb-4 text-shadow">
          From the Heart
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Some feelings are hard to express, but that doesn't mean they shouldn't be shared.
        </p>
      </div>

      <Card 
        ref={cardRef}
        className="shadow-xl border-apology/20 overflow-hidden animate-on-scroll card-shadow"
      >
        <CardContent className="p-8 md:p-12 bg-gradient-to-br from-white to-apology-light/20">
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-1 bg-apology rounded-full"></div>
          </div>
          <p 
            ref={messageRef}
            className="text-lg md:text-xl leading-relaxed text-gray-700 min-h-[150px]"
          ></p>
          <div className="mt-8 text-right">
            <p className="text-apology-dark italic">With sincerity and regret,</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApologyMessage;
