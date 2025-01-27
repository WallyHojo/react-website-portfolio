import React from 'react';
import { useContext } from 'react';
import './Navbar.css';
import { ThemeContext } from '../Theme';
import logo from '../assets/images/logo.webp';

function Navbar() {

  const { Link, refHeaderHeight, isScrolled, isHeaderVisible, isNavExpanded, toggleNavExpansion, toggleButtonRef, handleNavClick } = useContext(ThemeContext); //header ref hook

  return (
    <>
    <header id='header' className={`header py-3 ${isScrolled ? 'header-scrolled' : ''} ${isHeaderVisible ? 'header-visible' : 'header-hidden'} ${isNavExpanded ? 'expanded' : ''}`} ref={refHeaderHeight}>
      <div className='container'>
        <nav className='navbar navbar-expand-lg p-0'>
          <Link to="welcome-section" spy={true} smooth={true} duration={500} className='navbar-brand text-uppercase'><img src={logo} className='me-2' alt='logo' /> Walter Carlson</Link>
          <button className='navbar-toggler p-0 border-0' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation' onClick={toggleNavExpansion} ref={toggleButtonRef}>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-lg-0'>
              <li className='nav-item'>
                <Link to="welcome-section" spy={true} smooth={true} duration={500} className='nav-link text-uppercase' onClick={handleNavClick}>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to="about-section" spy={true} smooth={true} duration={500} className='nav-link text-uppercase' onClick={handleNavClick}>About</Link>
              </li>
              <li className='nav-item'>
                <Link to="skills-section" spy={true} smooth={true} duration={500} className='nav-link text-uppercase' onClick={handleNavClick}>Skills</Link>
              </li>
              <li className='nav-item'>
                <Link to="work-section" spy={true} smooth={true} duration={500} className='nav-link text-uppercase' onClick={handleNavClick}>Work</Link>
              </li>   
              <li className='nav-item'>
                <Link to="contact-section" spy={true} smooth={true} duration={500} className='nav-link text-uppercase' onClick={handleNavClick}>Contact</Link>
              </li>
              <li className='nav-item d-sm-none d-md-block'>
                <a href='https://drive.google.com/file/d/1K2KS4JusURTYkQvagbeCorw5WA2_ceL5/view?usp=sharing' target='_blank' className='nav-link text-uppercase' onClick={handleNavClick} rel='noreferrer'>Resume</a>
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