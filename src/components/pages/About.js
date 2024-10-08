import React from 'react';
import { useContext } from 'react';
import TrackVisibility from 'react-on-screen';
import './About.css';
import { ThemeContext } from '../../Theme';
import portrait from '../../assets/images/portrait.webp';

function About() {

  // From Theme.js
  const { headerHeight } = useContext(ThemeContext); //header height hook

  return (
    <>
      <div className='section-heading about-heading' style={{paddingTop: headerHeight}}>
        <div className='container-xxl'>
          <TrackVisibility partialVisibility>
            {({isVisible}) =>        
              <h2 className={`h1 m-0 ${isVisible ? 'animate__animated animate__fadeInUpBig' : 'animate__animated animate__fadeOutDownBig'}`}>About</h2>
            }
          </TrackVisibility>
        </div>
      </div>        
      <div className='about-container rounded-top' style={{paddingBottom: headerHeight}}>
        <div className='container-xxl d-flex align-items-center'>
          <div className='about-wrapper d-lg-block'>
            <div className='row'>
              <div className='col col-md-8'>
                <TrackVisibility>
                  {({isVisible}) =>  
                    <div className={isVisible ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'}>
                      <h2 className='m-0'>Greetings, I'm</h2>
                      <p className='display-6 text-blue mb-4'><strong>Walter Carlson</strong></p>
                      <p className='lead'>Seasoned graphic designer and responsive front-end web developer with 18 years of experience. Demonstrated ability to design and develop visually appealing and user-friendly websites. Seeking a challenging position as a front-end web developer to further enhance my skills and contribute to the success of my next employer by leveraging my strong technical expertise and extensive industry experience.</p>
                      <p className='lead mb-0'>Driven by a passion for the latest web technologies and design trends, I excel at using modern tools to create high-performance, user-centric web applications. I look forward to applying my skills and creativity in a collaborative environment to deliver innovative solutions.</p>
                    </div>
                  }
                </TrackVisibility> 
              </div>
            </div>
          </div>
        </div>
        <TrackVisibility offset={100}>
          {({isVisible}) =>          
            <div className={`about-img position-absolute ${isVisible ? 'animate__animated animate__fadeInRightBig' : 'animate__animated animate__fadeOutRight'}`}><img src={portrait} alt='portrait' /></div>
          }
        </TrackVisibility>
      </div>
      <span className='page position-absolute'>
        <TrackVisibility offset={200}>
          {({isVisible}) =>
            <div className={`number position-relative ${isVisible ? 'animate__animated animate__fadeInLeftBig' : 'animate__animated animate__fadeOutLeftBig'}`} data-id='2'></div>
          }
        </TrackVisibility>
      </span> 
    </>
  )
}

export default About