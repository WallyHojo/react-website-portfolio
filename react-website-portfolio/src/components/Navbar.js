import React from 'react';
import { useContext, useState } from 'react';
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

  const toggleNavExpansion = () => {
    setNavIsExpanded((prev) => !prev);
  };  

  return (
    <>
    <header id='header' className={`header py-3 ${isScrolled ? 'header-scrolled' : ''} ${isHeaderVisible ? 'header-visible' : 'header-hidden'} ${isNavExpanded ? 'expanded' : ''}`} ref={refHeaderHeight} >
      <div className='container'>
        <nav className='navbar navbar-expand-lg p-0'>
          <Link to="welcome-section" spy={true} smooth={true} duration={500} activeClass="active" className='navbar-brand text-uppercase' onSetActive={handleSetActive}><img src={logo} className='me-2' alt='logo' /> Walter Carlson</Link>
          <button className='navbar-toggler p-0 border-0' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation' nav-expanded={isNavExpanded} onClick={toggleNavExpansion}>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-lg-0'>
              <li className='nav-item'>
                <Link to="welcome-section" spy={true} smooth={true} duration={500} activeClass="active" className='nav-link text-uppercase' onSetActive={handleSetActive}>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to="about-section" spy={true} smooth={true} duration={500} activeClass="active" className='nav-link text-uppercase' onSetActive={handleSetActive}>About</Link>
              </li>
              <li className='nav-item'>
                <Link to="skills-section" spy={true} smooth={true} duration={500} activeClass="active" className='nav-link text-uppercase' onSetActive={handleSetActive}>Skills</Link>
              </li>
              <li className='nav-item'>
                <Link to="work-section" spy={true} smooth={true} duration={500} activeClass="active" className='nav-link text-uppercase' onSetActive={handleSetActive}>Work</Link>
              </li>   
              <li className='nav-item'>
                <Link to="contact-section" spy={true} smooth={true} duration={500} activeClass="active" className='nav-link text-uppercase' onSetActive={handleSetActive}>Contact</Link>
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