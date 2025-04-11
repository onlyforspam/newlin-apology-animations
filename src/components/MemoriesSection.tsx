
import React, { useEffect, useRef } from 'react';
import { initScrollAnimations, floatingAnimation } from '@/utils/animations';
import { Flower } from 'lucide-react';
import gsap from 'gsap';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const flowerRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    initScrollAnimations();
    
    // Add floating animations to flowers
    flowerRefs.current.forEach((flower, index) => {
      if (flower) {
        gsap.to(flower, {
          y: `${Math.sin(index) * 15}px`,
          rotation: Math.random() * 10 - 5,
          duration: 2 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2
        });
      }
    });
    
    // Add rotation animation to flower centers
    document.querySelectorAll('.flower-center').forEach((center) => {
      gsap.to(center, {
        rotation: 360,
        duration: 20 + Math.random() * 10,
        repeat: -1,
        ease: "none"
      });
    });
  }, []);

  const renderFlower = (size: number, color: string, position: string) => {
    return (
      <div 
        ref={el => flowerRefs.current.push(el)}
        className={`absolute ${position} z-0`}
      >
        <div className="relative" style={{ width: size, height: size }}>
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className={`absolute bg-${color} rounded-t-full`}
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
            className="absolute rounded-full bg-yellow-300 flower-center"
            style={{ 
              width: size * 0.35, 
              height: size * 0.35,
              top: size * 0.325,
              left: size * 0.325
            }} 
          />
        </div>
      </div>
    );
  };

  return (
    <div 
      ref={containerRef}
      className="py-20 bg-gradient-to-b from-white to-floral-light/30 relative overflow-hidden"
    >
      {/* Decorative Flowers */}
      {renderFlower(80, 'floral-light', 'top-10 left-10')}
      {renderFlower(100, 'floral/60', 'bottom-20 right-20')}
      {renderFlower(60, 'floral-light', 'top-1/4 right-10')}
      {renderFlower(120, 'floral/40', 'bottom-10 left-1/4')}
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center animate-on-scroll mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Flower className="w-8 h-8 text-floral animate-pulse-gentle" />
            <h2 className="text-4xl md:text-5xl text-floral-dark text-shadow">
              Blooming Memories
            </h2>
            <Flower className="w-8 h-8 text-floral animate-pulse-gentle" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Like flowers in a garden, our memories grow more beautiful with time and care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg border border-floral/10 animate-on-scroll relative overflow-hidden group"
              data-delay={0.2 * index}
            >
              {/* Memory Card Flower Decoration */}
              <div className="absolute -top-6 -right-6 opacity-20 transform transition-transform duration-700 group-hover:rotate-45">
                <Flower className="w-16 h-16 text-floral" />
              </div>
              
              <div className="mb-4 relative z-10">
                <span className="inline-block w-10 h-10 rounded-full bg-floral/20 flex items-center justify-center">
                  <span className="text-floral-dark font-bold">{index + 1}</span>
                </span>
              </div>
              <h3 className="text-2xl text-floral-dark mb-3 relative z-10">{memory.title}</h3>
              <p className="text-gray-600 relative z-10">{memory.text}</p>
              
              {/* Bottom Flower Animation on Hover */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full transition-transform duration-700 ease-out group-hover:translate-y-1/2">
                <div className="relative" style={{ width: 60, height: 60 }}>
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute bg-floral/80 rounded-t-full"
                      style={{ 
                        width: 24, 
                        height: 36,
                        top: 12,
                        left: 18,
                        transformOrigin: 'bottom center',
                        transform: `rotate(${i * 45}deg)`,
                      }}
                    />
                  ))}
                  <div className="absolute rounded-full bg-yellow-300 w-5 h-5 top-[27.5px] left-[27.5px]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemoriesSection;
