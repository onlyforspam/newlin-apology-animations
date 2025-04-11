
import React, { useEffect, useRef } from 'react';
import { floatingAnimation } from '@/utils/animations';

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
    { top: '15%', left: '10%', bg: 'bg-apology-light', size: 'w-8 h-8', shape: 'rounded-full opacity-70' },
    { top: '40%', right: '5%', bg: 'bg-apology', size: 'w-12 h-12', shape: 'rounded-full opacity-60' },
    { top: '75%', left: '15%', bg: 'bg-apology-dark', size: 'w-10 h-10', shape: 'rounded-full opacity-50' },
    { top: '25%', right: '15%', bg: 'bg-accent', size: 'w-6 h-6', shape: 'rounded-md rotate-45 opacity-40' },
    { top: '60%', right: '20%', bg: 'bg-apology-light', size: 'w-16 h-16', shape: 'rounded-full opacity-30' },
    { top: '85%', right: '30%', bg: 'bg-accent', size: 'w-8 h-8', shape: 'rounded-md rotate-12 opacity-40' },
    { top: '10%', left: '30%', bg: 'bg-apology', size: 'w-5 h-5', shape: 'rounded-full opacity-50' },
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
        />
      ))}
    </div>
  );
};

export default FloatingElements;
