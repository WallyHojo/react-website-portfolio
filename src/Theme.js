import React from 'react';
import PropTypes from 'prop-types';
import TrackVisibility from 'react-on-screen';
import { Link, Element } from 'react-scroll';
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

      // Prevent hiding the header if at the top of the page
      if (currentScrollTop === 0) {
        setIsHeaderVisible(true);
        lastScrollTop.current = 0; // Reset last scroll position
        return;
      }

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
  }, [headerHeight]);

  /*
  Header expanded
  */
  // Function to indicate whether navigation is expanded
  const [isNavExpanded, setNavIsExpanded] = useState(false);


  const toggleNavExpansion = () => {
    setNavIsExpanded((prev) => !prev);
    setNavIsExpanded(!isNavExpanded); // Toggles the expanded state
  };  

  /*
  Nav toggle click
  */
  const toggleButtonRef = useRef(null); // Reference to the navbar toggler button

  const handleNavClick = () => {
    if (isNavExpanded) {
      // If the navbar is expanded, simulate a click on the toggle button
      toggleButtonRef.current.click();
    }
  };  

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

  /*
  Setting window height to each section
  */
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // Function to update the window height state
  const handleResize = () => {
    if (window.innerWidth > 1280) { // Adjust the breakpoint as needed
      setWindowHeight(window.innerHeight);
    }
  };

  useEffect(() => {
    // Add event listener on mount
    window.addEventListener('resize', handleResize);

    // Remove event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once   
  
  /*
  Array of sections show dots
  */
  const sectionIDs = [
    { id: 'welcome-section', label: 'welcome' },
    { id: 'about-section', label: 'about' },
    { id: 'skills-section', label: 'skills' },
    { id: 'work-section', label: 'work' },
    { id: 'contact-section', label: 'contact' }
  ];

  const [tooltip, setTooltip] = useState({ label: '', visible: false });

  const handleMouseEnter = (event, label) => {
    setTooltip({ label, visible: true });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };  

  /*
  Title with characters wrapped in span tags
  */
  const TitleWithSpans = ({ title, tag }) => {
    // Determine the correct tag to use
    const Tag = tag;

    return (
      <Tag>
        {title.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </Tag>
    );
  };
  
  TitleWithSpans.propTypes = {
    title: PropTypes.string.isRequired,
    tag: PropTypes.oneOf(['h1', 'h3', 'h4']).isRequired,
  };  

  return (
    <ThemeContext.Provider value={{ TrackVisibility, Link, Element, headerHeight, refHeaderHeight, isNavExpanded, isScrolled, isHeaderVisible, windowHeight, sectionIDs, tooltip, handleMouseEnter, handleMouseLeave, TitleWithSpans }}>
      {children}
    </ThemeContext.Provider>
  );  
};

export default ThemeProvider;