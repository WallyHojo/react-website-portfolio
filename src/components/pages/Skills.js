import React from 'react';
import { useContext } from 'react';
import TrackVisibility from 'react-on-screen';
import Carousel from 'react-multi-carousel';
import './Skills.css';
import 'react-multi-carousel/lib/styles.css';
import { ThemeContext } from '../../Theme';

function Skills() {

  // From Theme.js
  const { headerHeight } = useContext(ThemeContext); //header height hook

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <div className='section-heading skills-heading' style={{paddingTop: headerHeight}}>
        <div className='container-xxl'>
          <TrackVisibility partialVisibility>
            {({isVisible}) =>        
              <h2 className={`h1 m-0 ${isVisible ? 'animate__animated animate__fadeInUpBig' : 'animate__animated animate__fadeOutDownBig'}`}>Skills</h2>
            }
          </TrackVisibility>
        </div>
      </div>        
      <div className='skills-container' style={{paddingBottom: headerHeight}}>
        <div className='container-xxl'>
            <div className='skills-wrapper d-flex flex-column'>
              <div className='mt-auto'>
                <TrackVisibility>
                  {({isVisible}) =>  
                    <div className={isVisible ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'}>
                      <h3 className='mb-4 d-none d-sm-block'>Everyday is a new challenge</h3>
                      <p>In the Skills section of my portfolio, you'll find an overview of my technical expertise and proficiency across various web development technologies. I have a strong command of HTML5, CSS3, and jQuery, allowing me to craft visually stunning and highly functional web interfaces. My experience extends to popular libraries such as React, enhancing my ability to build dynamic, user-centric applications. Additionally, I am well-versed in responsive design principles. This section highlights not only the tools I use but also my commitment to staying current with industry trends and best practices.</p>
                    </div>
                  }
                </TrackVisibility>  
              </div>
              <Carousel responsive={responsive} infinite={true} className='skill-slider mt-auto mb-auto' autoPlay={true} autoPlaySpeed={3000}>
                <div className='skill text-center'>
                  <div className='progress-pie_shape' aria-hidden="true">
                    <span className='progress-pie_value'>98<i>%</i></span>
                    <svg className='m-auto' viewBox="0 0 100 100" fill="none" strokeLinecap="round">
                      <circle className='progress-pie_bg' cx="50" cy="50" r="44"></circle>
                      <circle id='item2' className='progress-pie_fill' cx="50" cy="50" r="44" transform="rotate(-90 50 50)" strokeDashoffset="13.823" strokeDasharray="276.46"></circle>
                    </svg>
                  </div>
                  <h5 className='mt-1'>HTML5</h5>
                </div>
                <div className='skill text-center'>
                  <div className='progress-pie_shape' aria-hidden="true">
                    <span className='progress-pie_value'>88<i>%</i></span>
                    <svg className='m-auto' viewBox="0 0 100 100" fill="none" strokeLinecap="round">
                      <circle className='progress-pie_bg' cx="50" cy="50" r="44"></circle>
                      <circle id='item2' className='progress-pie_fill' cx="50" cy="50" r="44" transform="rotate(-90 50 50)" strokeDashoffset="35.9398" strokeDasharray="276.46"></circle>
                    </svg>
                  </div>
                  <h5 className='mt-1'>CSS3</h5>
                </div>
                <div className='skill text-center'>
                  <div className='progress-pie_shape' aria-hidden="true">
                    <span className='progress-pie_value'>85<i>%</i></span>
                    <svg className='m-auto' viewBox="0 0 100 100" fill="none" strokeLinecap="round">
                      <circle className='progress-pie_bg' cx="50" cy="50" r="44"></circle>
                      <circle id='item2' className='progress-pie_fill' cx="50" cy="50" r="44" transform="rotate(-90 50 50)" strokeDashoffset="41.469" strokeDasharray="276.46"></circle>
                    </svg>
                  </div>
                  <h5 className='mt-1'>Bootstrap v5</h5>
                </div>
                <div className='skill text-center'>
                  <div className='progress-pie_shape' aria-hidden="true">
                    <span className='progress-pie_value'>95<i>%</i></span>
                    <svg className='m-auto' viewBox="0 0 100 100" fill="none" strokeLinecap="round">
                      <circle className='progress-pie_bg' cx="50" cy="50" r="44"></circle>
                      <circle id='item2' className='progress-pie_fill' cx="50" cy="50" r="44" transform="rotate(-90 50 50)" strokeDashoffset="13.823" strokeDasharray="276.46"></circle>
                    </svg>
                  </div>
                  <h5 className='mt-1'>Foundation ZURB 6</h5>
                </div>
                <div className='skill text-center'>
                  <div className='progress-pie_shape' aria-hidden="true">
                    <span className='progress-pie_value'>92<i>%</i></span>
                    <svg className='m-auto' viewBox="0 0 100 100" fill="none" strokeLinecap="round">
                      <circle className='progress-pie_bg' cx="50" cy="50" r="44"></circle>
                      <circle id='item2' className='progress-pie_fill' cx="50" cy="50" r="44" transform="rotate(-90 50 50)" strokeDashoffset="22.1168" strokeDasharray="276.46"></circle>
                    </svg>
                  </div>
                  <h5 className='mt-1'>Responsive Design</h5>
                </div>
                <div className='skill text-center'>
                  <div className='progress-pie_shape' aria-hidden="true">
                    <span className='progress-pie_value'>85<i>%</i></span>
                    <svg className='m-auto' viewBox="0 0 100 100" fill="none" strokeLinecap="round">
                      <circle className='progress-pie_bg' cx="50" cy="50" r="44"></circle>
                      <circle id='item2' className='progress-pie_fill' cx="50" cy="50" r="44" transform="rotate(-90 50 50)" strokeDashoffset="41.469" strokeDasharray="276.46"></circle>
                    </svg>
                  </div>
                  <h5 className='mt-1'>User Experience (UX)</h5>
                </div>
                <div className='skill text-center'>
                  <div className='progress-pie_shape' aria-hidden="true">
                    <span className='progress-pie_value'>90<i>%</i></span>
                    <svg className='m-auto' viewBox="0 0 100 100" fill="none" strokeLinecap="round">
                      <circle className='progress-pie_bg' cx="50" cy="50" r="44"></circle>
                      <circle id='item2' className='progress-pie_fill' cx="50" cy="50" r="44" transform="rotate(-90 50 50)" strokeDashoffset="27.646" strokeDasharray="276.46"></circle>
                    </svg>
                  </div>
                  <h5 className='mt-1'>User Interface (UI)</h5>
                </div>
                <div className='skill text-center'>
                  <div className='progress-pie_shape' aria-hidden="true">
                    <span className='progress-pie_value'>60<i>%</i></span>
                    <svg className='m-auto' viewBox="0 0 100 100" fill="none" strokeLinecap="round">
                      <circle className='progress-pie_bg' cx="50" cy="50" r="44"></circle>
                      <circle id='item2' className='progress-pie_fill' cx="50" cy="50" r="44" transform="rotate(-90 50 50)" strokeDashoffset="110.584" strokeDasharray="276.46"></circle>
                    </svg>
                  </div>
                  <h5 className='mt-1'>jQuery</h5>
                </div>
                <div className='skill text-center'>
                  <div className='progress-pie_shape' aria-hidden="true">
                    <span className='progress-pie_value'>40<i>%</i></span>
                    <svg className='m-auto' viewBox="0 0 100 100" fill="none" strokeLinecap="round">
                      <circle className='progress-pie_bg' cx="50" cy="50" r="44"></circle>
                      <circle id='item2' className='progress-pie_fill' cx="50" cy="50" r="44" transform="rotate(-90 50 50)" strokeDashoffset="165.876" strokeDasharray="276.46"></circle>
                    </svg>
                  </div>
                  <h5 className='mt-1'>PHP</h5>
                </div>
                <div className='skill text-center'>
                  <div className='progress-pie_shape' aria-hidden="true">
                    <span className='progress-pie_value'>80<i>%</i></span>
                    <svg className='m-auto' viewBox="0 0 100 100" fill="none" strokeLinecap="round">
                      <circle className='progress-pie_bg' cx="50" cy="50" r="44"></circle>
                      <circle id='item2' className='progress-pie_fill' cx="50" cy="50" r="44" transform="rotate(-90 50 50)" strokeDashoffset="82.938" strokeDasharray="276.46"></circle>
                    </svg>
                  </div>
                  <h5 className='mt-1'>Adobe Photoshop</h5>
                </div>
                <div className='skill text-center'>
                  <div className='progress-pie_shape' aria-hidden="true">
                    <span className='progress-pie_value'>60<i>%</i></span>
                    <svg className='m-auto' viewBox="0 0 100 100" fill="none" strokeLinecap="round">
                      <circle className='progress-pie_bg' cx="50" cy="50" r="44"></circle>
                      <circle id='item2' className='progress-pie_fill' cx="50" cy="50" r="44" transform="rotate(-90 50 50)" strokeDashoffset="110.584" strokeDasharray="276.46"></circle>
                    </svg>
                  </div>
                  <h5 className='mt-1'>Adobe Illustrator</h5>
                </div>                
                <div className='skill text-center'>
                  <div className='progress-pie_shape' aria-hidden="true">
                    <span className='progress-pie_value'>75<i>%</i></span>
                    <svg className='m-auto' viewBox="0 0 100 100" fill="none" strokeLinecap="round">
                      <circle className='progress-pie_bg' cx="50" cy="50" r="44"></circle>
                      <circle id='item2' className='progress-pie_fill' cx="50" cy="50" r="44" transform="rotate(-90 50 50)" strokeDashoffset="69.115" strokeDasharray="276.46"></circle>
                    </svg>
                  </div>
                  <h5 className='mt-1'>Adobe XD</h5>
                </div>
                <div className='skill text-center'>
                  <div className='progress-pie_shape' aria-hidden="true">
                    <span className='progress-pie_value'>90<i>%</i></span>
                    <svg className='m-auto' viewBox="0 0 100 100" fill="none" strokeLinecap="round">
                      <circle className='progress-pie_bg' cx="50" cy="50" r="44"></circle>
                      <circle id='item2' className='progress-pie_fill' cx="50" cy="50" r="44" transform="rotate(-90 50 50)" strokeDashoffset="27.646" strokeDasharray="276.46"></circle>
                    </svg>
                  </div>
                  <h5 className='mt-1'>Adobe Dreamweaver</h5>
                </div>
                <div className='skill text-center'>
                  <div className='progress-pie_shape' aria-hidden="true">
                    <span className='progress-pie_value'>70<i>%</i></span>
                    <svg className='m-auto' viewBox="0 0 100 100" fill="none" strokeLinecap="round">
                      <circle className='progress-pie_bg' cx="50" cy="50" r="44"></circle>
                      <circle id='item2' className='progress-pie_fill' cx="50" cy="50" r="44" transform="rotate(-90 50 50)" strokeDashoffset="82.938" strokeDasharray="276.46"></circle>
                    </svg>
                  </div>
                  <h5 className='mt-1'>Visual Studio</h5>
                </div> 
              </Carousel>   
            </div>
             
        </div>
      </div>
      <span className='page position-absolute'>
        <TrackVisibility offset={200}>
          {({isVisible}) =>
            <div className={`number position-relative ${isVisible ? 'animate__animated animate__fadeInLeftBig' : 'animate__animated animate__fadeOutLeftBig'}`} data-id='3'></div>
          }
        </TrackVisibility>
      </span>    
    </>
  )
}

export default Skills