import React from 'react';
import { createContext, useRef, useEffect, useState } from 'react';

export const MovingContext = createContext();

const MovingElement = ({ children }) => {
  const [bgColor, setBgColor] = useState('transparent');
  const sectionRef = useRef(null);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const movingElement = elementRef.current;

      if (section && movingElement) {
        try {
          const sectionRect = section.getBoundingClientRect();
          const elementRect = movingElement.getBoundingClientRect();

          if (
            elementRect.top < sectionRect.bottom &&
            elementRect.bottom > sectionRect.top
          ) {
            setBgColor('lightblue'); // Change this color as needed
          } else {
            setBgColor('transparent');
          }
        } catch (error) {
          console.error('Error with getBoundingClientRect:', error);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Optional: handle window resize

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <MovingContext.Provider value={{ bgColor, setBgColor, sectionRef, elementRef }}>
      {children}
    </MovingContext.Provider>
  );  
};

export default MovingElement;