import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Animation to reveal elements as they enter the viewport
export const revealAnimation = (element: string | Element, delay: number = 0) => {
  return gsap.fromTo(
    element,
    { y: 50, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: 1.2, 
      ease: "power3.out", 
      delay: delay 
    }
  );
};

// Animation for hero title
export const animateHeroTitle = (element: string | Element) => {
  const chars = gsap.utils.toArray(`${element} .char`);
  
  return gsap.fromTo(
    chars,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.03,
      duration: 1.2,
      ease: "back.out(1.7)",
      delay: 0.5
    }
  );
};

// Typewriter animation for text
export const typewriterAnimation = (element: string | Element, text: string, delay: number = 0) => {
  return gsap.to(element, {
    duration: 3,
    text: text,
    ease: "none",
    delay: delay
  });
};

// Initialize scroll animations
export const initScrollAnimations = () => {
  // Animate elements as they enter viewport
  gsap.utils.toArray('.animate-on-scroll').forEach((element: any) => {
    gsap.fromTo(
      element,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  });

  // Parallax effect
  gsap.utils.toArray('.parallax').forEach((element: any) => {
    const depth = element.dataset.depth || 0.2;
    
    gsap.to(element, {
      y: `${depth * 100}%`,
      ease: "none",
      scrollTrigger: {
        trigger: element.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });
};

// Pulse animation for interactive elements
export const pulseAnimation = (element: string | Element) => {
  return gsap.to(element, {
    scale: 1.05,
    duration: 0.8,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });
};

// Floating animation for decorative elements
export const floatingAnimation = (element: string | Element, amplitude: number = 15) => {
  return gsap.to(element, {
    y: amplitude,
    duration: gsap.utils.random(3, 5),
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: gsap.utils.random(0, 2)
  });
};

// Flower confetti effect animation
export const confettiAnimation = (container: string | Element) => {
  const colors = ['#FF719A', '#FDE1D3', '#E5DEFF', '#FEC6A1', '#D946EF'];
  const numConfetti = 50;
  
  // Create flower-shaped confetti elements
  for (let i = 0; i < numConfetti; i++) {
    const flowerContainer = document.createElement('div');
    flowerContainer.className = 'absolute';
    flowerContainer.style.zIndex = "10";
    flowerContainer.style.width = `${Math.random() * 20 + 20}px`;
    flowerContainer.style.height = `${Math.random() * 20 + 20}px`;
    flowerContainer.style.position = 'absolute';
    
    // Create flower petals
    const petalCount = Math.floor(Math.random() * 3) + 5; // 5-7 petals
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    for (let j = 0; j < petalCount; j++) {
      const petal = document.createElement('div');
      const size = Math.random() * 10 + 8;
      
      petal.style.position = 'absolute';
      petal.style.width = `${size * 0.5}px`;
      petal.style.height = `${size}px`;
      petal.style.backgroundColor = color;
      petal.style.borderRadius = '50% 50% 50% 50% / 80% 80% 20% 20%';
      petal.style.transformOrigin = 'bottom center';
      petal.style.transform = `rotate(${(j * (360 / petalCount))}deg)`;
      petal.style.opacity = '0.85';
      
      flowerContainer.appendChild(petal);
    }
    
    // Add flower center
    const center = document.createElement('div');
    const centerSize = Math.random() * 5 + 5;
    center.style.position = 'absolute';
    center.style.width = `${centerSize}px`;
    center.style.height = `${centerSize}px`;
    center.style.backgroundColor = '#FFDA77';
    center.style.borderRadius = '50%';
    center.style.top = `calc(50% - ${centerSize/2}px)`;
    center.style.left = `calc(50% - ${centerSize/2}px)`;
    center.style.zIndex = '2';
    
    flowerContainer.appendChild(center);
    
    if (typeof container === 'string') {
      document.querySelector(container)?.appendChild(flowerContainer);
    } else {
      container.appendChild(flowerContainer);
    }
    
    // Animate each flower
    gsap.fromTo(
      flowerContainer,
      {
        x: 0,
        y: 0,
        scale: gsap.utils.random(0.6, 1.2),
        opacity: 1,
        rotation: 0
      },
      {
        x: gsap.utils.random(-200, 200),
        y: gsap.utils.random(-300, -100),
        scale: gsap.utils.random(0.2, 0.8),
        opacity: 0,
        rotation: gsap.utils.random(-180, 180),
        duration: gsap.utils.random(2, 4),
        ease: "power2.out",
        onComplete: () => {
          if (flowerContainer.parentNode) {
            flowerContainer.parentNode.removeChild(flowerContainer);
          }
        }
      }
    );
    
    // Add spinning animation to each flower
    gsap.to(flowerContainer, {
      rotation: gsap.utils.random(-360, 360),
      duration: gsap.utils.random(2, 4),
      ease: "power1.inOut"
    });
  }
};
