import React from 'react';
import { createContext, useRef, useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  /*
  Header element height
  */
  const [headerHeight, setHeaderHeight] = useState(0); //ref for header height
  const refHeaderHeight = useRef(null); //create the ref

  useEffect(() => {
    if (refHeaderHeight.current) {
      setHeaderHeight(refHeaderHeight.current.offsetHeight);
    }
  }, []);

  /*
  Header scroll up/down
  */
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollTop = useRef(0); // To track the last scroll position
  const scrollTimeoutRef = useRef(null); // To handle timeout for showing the header

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = refHeaderHeight.current.offsetHeight;
      const currentScrollTop = window.scrollY;

      // Determine if the user has scrolled past the header height
      setIsScrolled(currentScrollTop > headerHeight);

      // Determine if scrolling up or down
      if (currentScrollTop > lastScrollTop.current) {
        // Scrolling down
        setIsHeaderVisible(false);
      } else {
        // Scrolling up
        setIsHeaderVisible(true);
      }

      // Update last scroll position
      lastScrollTop.current = currentScrollTop;

      // Clear the previous timeout if it exists
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }     
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }; 
  }, []);

  /*
  Scroll to section
  */
  const scrollToTop = () => {
    scroll.scrollToTop(100);
  };  

  const scrollToSection = (section) => {
    scroll.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });  
  };

  return (
    <ThemeContext.Provider value={{ headerHeight, setHeaderHeight, refHeaderHeight, scrollToSection, isScrolled, scrollToTop, isHeaderVisible }}>
      {children}
    </ThemeContext.Provider>
  );  
};

export default ThemeProvider;