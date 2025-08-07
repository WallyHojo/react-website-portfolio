import React from 'react';
import { useContext } from 'react';
import 'animate.css';
import '../../App.css';
import './Default.css';
import Welcome from './welcome/Welcome';
import About from './about/About';
import Skills from './skills/Skills';
import Work from './work/Work';
import Contact from './contact/Contact';
import { ThemeContext } from '../../Theme';

function Default() { 

  // From Theme.js
  const { Link, Element, headerHeight, isScrolled, isHeaderVisible, windowHeight, sectionIDs, tooltip, handleMouseEnter, handleMouseLeave } = useContext(ThemeContext); //header height hook

  return (
      <>
        <main id='main' className='position-relative' role='main'>

          <div className='rounded-container rounded-bottom position-relative'>
            <Element id='welcome-section' className='position-relative' style={{height:`${windowHeight}px`, paddingTop: headerHeight, paddingBottom: headerHeight}}>
              <Welcome />
            </Element>

            <Element id='about-section' className='position-relative d-flex flex-column' style={{height:`${windowHeight}px`, paddingTop: headerHeight}}>
              <About />
            </Element>  

            <Element id='skills-section' className='position-relative d-flex flex-column' style={{height:`${windowHeight}px`, paddingTop: headerHeight}}>
              <Skills />
            </Element>

            <Element id='work-section' className='position-relative d-flex flex-column' style={{height:`${windowHeight}px`, paddingTop: headerHeight}}>
              <Work />
            </Element>

            <div className='bg top-gradient position-absolute top-0 start-0'></div>
          </div>

          <Element id='contact-section' className='position-relative d-flex flex-column' style={{height:`${windowHeight}px`, paddingTop: headerHeight}}>
            <Contact />
          </Element>  

          <div className={`social position-fixed flex-column ${isScrolled ? 'social-scrolled' : ''} ${isHeaderVisible ? 'animate__animated animate__fadeInLeftBig' : 'animate__animated animate__slow animate__fadeOutLeftBig'} d-none d-sm-block`}>
            <div><a className='position-relative d-inline-block text-center' href='https://www.instagram.com/wallykillbot' target='_blank' rel='noopener noreferrer'><svg width="25px" height="100%" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z" /></svg></a></div>
            <div><a className='position-relative d-inline-block text-center' href='https://www.linkedin.com/in/walter-carlson-918b6b305/' target='_blank' rel='noopener noreferrer'><svg width="25px" height="100%" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z" /></svg></a></div>
            <div><a className='position-relative d-inline-block text-center' href='https://github.com/WallyHojo' target='_blank' rel='noopener noreferrer'><svg width="25px" height="100%" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg"><path d="M90.156 41.965 50.036 1.848a5.913 5.913 0 0 0-8.368 0l-8.332 8.332 10.566 10.566a7.03 7.03 0 0 1 7.23 1.684 7.043 7.043 0 0 1 1.673 7.277l10.183 10.184a7.026 7.026 0 0 1 7.278 1.672 7.04 7.04 0 0 1 0 9.957 7.045 7.045 0 0 1-9.961 0 7.038 7.038 0 0 1-1.532-7.66l-9.5-9.497V59.36a7.04 7.04 0 0 1 1.86 11.29 7.04 7.04 0 0 1-9.957 0 7.04 7.04 0 0 1 0-9.958 7.034 7.034 0 0 1 2.308-1.539V33.926a7.001 7.001 0 0 1-2.308-1.535 7.049 7.049 0 0 1-1.516-7.7L29.242 14.273 1.734 41.777a5.918 5.918 0 0 0 0 8.371L41.855 90.27a5.92 5.92 0 0 0 8.368 0l39.933-39.934a5.925 5.925 0 0 0 0-8.371" /></svg></a></div> 
            <div><a className='position-relative d-inline-block text-center' href='https://dribbble.com/wallyhojo' target='_blank' rel='noopener noreferrer'><svg width="25px" height="100%"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="dribbble"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,2a7.94,7.94,0,0,1,5.51,2.22A24.93,24.93,0,0,1,12.68,8.4,29.07,29.07,0,0,0,9.81,4.31,7.94,7.94,0,0,1,12,4ZM7.89,5.15A27.16,27.16,0,0,1,10.7,9a25.11,25.11,0,0,1-6,.74H4.34A8,8,0,0,1,7.89,5.15ZM6,17.31A7.9,7.9,0,0,1,4,12c0-.1,0-.2,0-.29h.68a26.67,26.67,0,0,0,7-1c.32.61.62,1.24.91,1.89a14.3,14.3,0,0,0-4.29,2.41l-.3.24A21,21,0,0,0,6,17.31ZM12,20a7.92,7.92,0,0,1-4.47-1.37,17.92,17.92,0,0,1,1.56-1.58l.32-.27a12.63,12.63,0,0,1,4-2.27,32,32,0,0,1,1.4,5A8.08,8.08,0,0,1,12,20Zm4.63-1.49a34.87,34.87,0,0,0-1.28-4.46l.34,0a.25.25,0,0,1,.12,0h.11l.1,0,.48,0a9.43,9.43,0,0,1,3.09.53A7.94,7.94,0,0,1,16.63,18.51ZM16.5,12c-.21,0-.42,0-.62,0a1.56,1.56,0,0,0-.39,0,6.64,6.64,0,0,0-.81.1h-.1c-.29-.67-.59-1.32-.92-2a26.57,26.57,0,0,0,5.13-2.4A8,8,0,0,1,20,12c0,.17,0,.34,0,.51A11.48,11.48,0,0,0,16.5,12Z"/></svg></a></div> 
            <div><a className='position-relative d-inline-block text-center' href='https://drive.google.com/file/d/1RPYN8E4Ph5L2NZ-f-fM25RMTAwWhHW4e/view?usp=sharing' target='_blank' rel='noopener noreferrer'><svg width="25px" height="100%" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg"><path d="M360-460h40v-80h40q17 0 28.5-11.5T480-580v-40q0-17-11.5-28.5T440-660h-80v200Zm40-120v-40h40v40h-40Zm120 120h80q17 0 28.5-11.5T640-500v-120q0-17-11.5-28.5T600-660h-80v200Zm40-40v-120h40v120h-40Zm120 40h40v-80h40v-40h-40v-40h40v-40h-80v200ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" /></svg></a></div>         
               
          </div>

          <div className='scroll position-fixed flex-column text-uppercase'>
            <Link to="about-section" className={`position-absolute end-0 d-block ${isScrolled ? 'fade-out' : 'fade-in'} p-2`}>
              <small>scroll down</small> 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='bi bi-arrow-right' viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
              </svg>
            </Link>
            <Link to="main" className={`position-absolute end-0 d-block ${isScrolled ? 'fade-in' : 'fade-out'} p-2`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='bi bi-arrow-left' viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
              </svg>    
              <small>to the top</small>
            </Link>            
          </div>

          <div className='dots-container position-fixed d-flex flex-column top-50 end-0 translate-middle-y pe-2 z-1'>
            {sectionIDs.map(({ id, label }, index) => (
              <div key={index} className='dot-wrapper position-relative'>
                <Link className='dot d-block' to={id} spy={true} smooth={true} offset={-100} duration={500} onMouseEnter={(event) => handleMouseEnter(event, label)} onMouseLeave={handleMouseLeave}></Link>
                {tooltip.visible && tooltip.label === label && (
                  <div className='tooltip position-absolute z-n1'>
                    {tooltip.label}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className='bg bg-image position-absolute top-0 end-0'></div>
        </main>                      
      </>
  );
}

export default Default;