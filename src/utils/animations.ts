
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

// Confetti effect animation
export const confettiAnimation = (container: string | Element) => {
  const colors = ['#9b87f5', '#7E69AB', '#D6BCFA', '#E5DEFF', '#8B5CF6'];
  const numConfetti = 50;
  
  // Create confetti elements
  for (let i = 0; i < numConfetti; i++) {
    const element = document.createElement('div');
    element.className = 'absolute w-3 h-3 rounded-full';
    element.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    element.style.zIndex = "10";
    
    if (typeof container === 'string') {
      document.querySelector(container)?.appendChild(element);
    } else {
      container.appendChild(element);
    }
    
    // Animate each piece
    gsap.fromTo(
      element,
      {
        x: 0,
        y: 0,
        scale: gsap.utils.random(0.6, 1.2),
        opacity: 1
      },
      {
        x: gsap.utils.random(-150, 150),
        y: gsap.utils.random(-200, -100),
        scale: 0,
        opacity: 0,
        rotation: gsap.utils.random(-180, 180),
        duration: gsap.utils.random(1.5, 3),
        ease: "power2.out"
      }
    );
  }
};
