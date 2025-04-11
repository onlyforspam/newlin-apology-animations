
import React, { useEffect } from 'react';
import { initScrollAnimations } from '@/utils/animations';

const memories = [
  {
    title: "Remember When",
    text: "We shared those moments that brought us together in the first place..."
  },
  {
    title: "Our Journey",
    text: "The path we've walked has its ups and downs, but it's still our shared story..."
  },
  {
    title: "Looking Forward",
    text: "I hope we can create new memories together, better than before..."
  }
];

const MemoriesSection = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <div className="py-20 bg-gradient-to-b from-white to-apology-light/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center animate-on-scroll mb-16">
          <h2 className="text-4xl md:text-5xl text-apology-dark mb-4 text-shadow">
            What We Share
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The memories that remind us why our connection matters
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg border border-apology/10 animate-on-scroll"
              data-delay={0.2 * index}
            >
              <div className="mb-4">
                <span className="inline-block w-10 h-10 rounded-full bg-apology/20 flex items-center justify-center">
                  <span className="text-apology-dark font-bold">{index + 1}</span>
                </span>
              </div>
              <h3 className="text-2xl text-apology-dark mb-3">{memory.title}</h3>
              <p className="text-gray-600">{memory.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemoriesSection;
