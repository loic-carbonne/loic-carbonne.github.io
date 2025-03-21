
import { useEffect, useState } from 'react';

export function useScrollAnimation(threshold = 0.1) {
  const [elements, setElements] = useState<Element[]>([]);
  
  useEffect(() => {
    // Initially set all elements to visible if they are above the fold
    const handleInitialAnimation = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      
      animatedElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('animate-fade-up');
        }
      });
    };
    
    // Configure the observer for elements that come into view during scrolling
    const setupObserver = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      setElements(Array.from(animatedElements));
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-up');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold,
          rootMargin: '0px 0px -100px 0px', // Trigger a bit before the element comes into view
        }
      );
      
      animatedElements.forEach((el) => {
        // If the element is already visible (above the fold), add the animation class
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('animate-fade-up');
        } else {
          observer.observe(el);
        }
      });
      
      return () => {
        animatedElements.forEach((el) => {
          observer.unobserve(el);
        });
      };
    };
    
    // Run initial animation for elements above the fold
    handleInitialAnimation();
    
    // Set up the observer with a slight delay to ensure DOM is ready
    const timeoutId = setTimeout(setupObserver, 100);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [threshold]);
  
  return elements;
}

// Create a non-hook version that can be called outside of components
export const initScrollAnimation = (threshold = 0.1) => {
  const handleInitialAnimation = () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    animatedElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('animate-fade-up');
      }
    });
  };
  
  const setupObserver = () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px', // Trigger a bit before the element comes into view
      }
    );
    
    animatedElements.forEach((el) => {
      // If the element is already visible (above the fold), add the animation class
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('animate-fade-up');
      } else {
        observer.observe(el);
      }
    });
  };
  
  // Run initial animation for elements above the fold
  handleInitialAnimation();
  
  // Set up the observer with a slight delay to ensure DOM is ready
  setTimeout(setupObserver, 100);
};

export const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
