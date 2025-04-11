
import React, { useEffect, useRef } from 'react';
import { floatingAnimation } from '@/utils/animations';
import { Flower } from 'lucide-react';

const FloatingElements = () => {
  const floatingRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    floatingRefs.current.forEach((el) => {
      if (el) {
        floatingAnimation(el, Math.random() * 20 + 5);
      }
    });
  }, []);

  // Decorative shapes with different sizes and positions
  const elements = [
    { top: '15%', left: '10%', bg: 'bg-floral-light', size: 'w-8 h-8', shape: 'rounded-full opacity-70', icon: true },
    { top: '40%', right: '5%', bg: 'bg-floral', size: 'w-12 h-12', shape: 'rounded-full opacity-60', icon: false },
    { top: '75%', left: '15%', bg: 'bg-floral-dark', size: 'w-10 h-10', shape: 'rounded-full opacity-50', icon: true },
    { top: '25%', right: '15%', bg: 'bg-accent', size: 'w-16 h-16', shape: 'rounded-full opacity-40 overflow-hidden', petal: true },
    { top: '60%', right: '20%', bg: 'bg-floral-light', size: 'w-16 h-16', shape: 'rounded-full opacity-30', icon: false },
    { top: '85%', right: '30%', bg: 'bg-accent', size: 'w-14 h-14', shape: 'rounded-full opacity-40 overflow-hidden', petal: true },
    { top: '10%', left: '30%', bg: 'bg-floral', size: 'w-10 h-10', shape: 'rounded-full opacity-50', icon: true },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element, index) => (
        <div
          key={index}
          ref={(el) => (floatingRefs.current[index] = el)}
          className={`absolute ${element.bg} ${element.size} ${element.shape} blur-sm`}
          style={{
            top: element.top,
            left: element.left,
            right: element.right,
          }}
        >
          {element.icon && (
            <Flower className="w-full h-full text-white opacity-50" />
          )}
          {element.petal && (
            <div className="relative w-full h-full">
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-1/2 h-1/2 bg-floral-light rounded-t-full"
                  style={{ 
                    top: '25%', 
                    left: '25%', 
                    transformOrigin: 'bottom center',
                    transform: `rotate(${i * 60}deg)`,
                    opacity: 0.7
                  }}
                />
              ))}
              <div className="absolute w-1/3 h-1/3 rounded-full bg-yellow-300" style={{ top: '33%', left: '33%' }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
