import React from 'react';
import { useContext, useState, useRef } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import { ThemeContext } from '../Theme';
import logo from '../assets/images/logo.webp';

function Navbar() {

  const { refHeaderHeight, isScrolled, isHeaderVisible } = useContext(ThemeContext); //header ref hook

  // Function to handle the activation of a link.
  const handleSetActive = (to) => {
    console.log(to);
  };  

  // Function to indicate whether navigation is expanded
  const [isNavExpanded, setNavIsExpanded] = useState(false);
  const toggleButtonRef = useRef(null); // Reference to the navbar toggler button

  const toggleNavExpansion = () => {
    setNavIsExpanded((prev) => !prev);
    setNavIsExpanded(!isNavExpanded); // Toggles the expanded state
  };  

  const handleNavClick = () => {
    if (isNavExpanded) {
      // If the navbar is expanded, simulate a click on the toggle button
      toggleButtonRef.current.click();
    }
  };  

  return (
    <>
    <header id='header' className={`header py-3 ${isScrolled ? 'header-scrolled' : ''} ${isHeaderVisible ? 'header-visible' : 'header-hidden'} ${isNavExpanded ? 'expanded' : ''}`} ref={refHeaderHeight}>
      <div className='container'>
        <nav className='navbar navbar-expand-lg p-0'>
          <Link to="welcome-section" spy={true} smooth={true} duration={500} activeClass="active" className='navbar-brand text-uppercase' onSetActive={handleSetActive}><img src={logo} className='me-2' alt='logo' /> Walter Carlson</Link>
          <button className='navbar-toggler p-0 border-0' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation' onClick={toggleNavExpansion} ref={toggleButtonRef}>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-lg-0'>
              <li className='nav-item'>
                <Link to="welcome-section" spy={true} smooth={true} duration={500} activeClass="active" className='nav-link text-uppercase' onSetActive={handleSetActive} onClick={handleNavClick}>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to="about-section" spy={true} smooth={true} duration={500} activeClass="active" className='nav-link text-uppercase' onSetActive={handleSetActive} onClick={handleNavClick}>About</Link>
              </li>
              <li className='nav-item'>
                <Link to="skills-section" spy={true} smooth={true} duration={500} activeClass="active" className='nav-link text-uppercase' onSetActive={handleSetActive} onClick={handleNavClick}>Skills</Link>
              </li>
              <li className='nav-item'>
                <Link to="work-section" spy={true} smooth={true} duration={500} activeClass="active" className='nav-link text-uppercase' onSetActive={handleSetActive} onClick={handleNavClick}>Work</Link>
              </li>   
              <li className='nav-item'>
                <Link to="contact-section" spy={true} smooth={true} duration={500} activeClass="active" className='nav-link text-uppercase' onSetActive={handleSetActive} onClick={handleNavClick}>Contact</Link>
              </li>
              <li className='nav-item d-sm-none d-md-block'>
                <a href='https://drive.google.com/file/d/1PBk4mVGJZaBAwNw8WxZvjIBzykWPtCNs/view?usp=drive_link' target='_blank' activeClass="active" className='nav-link text-uppercase' onSetActive={handleSetActive} onClick={handleNavClick}>Resume</a>
              </li>              
            </ul>
          </div>
        </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;