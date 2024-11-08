import React from 'react';
import { useContext } from 'react';
import './Welcome.css';
import pfp from '../../../assets/images/pfp.webp';
import { ThemeContext } from '../../../Theme';

function Welcome() {

  // From Theme.js
  const { TrackVisibility, TitleWithSpans } = useContext(ThemeContext); //header height hook

  return (
    <>
      <span className='tags top-tags position-absolute'>&lt;body&gt;</span>
      <div className='welcome-container container-xxl d-flex flex-column flex-md-row align-content-center'>
        <div className='welcome-text text-uppercase mt-auto mb-auto'>
          <TrackVisibility>
              {({isVisible}) =>
              <div className={isVisible ? 'animate__animated animate__fadeInUp animate__faster' : 'animate__animated animate__fadeOutDown'}>
                  <TitleWithSpans title='creative' tag='h1' />
              </div>
              }
          </TrackVisibility>
          <TrackVisibility>
              {({isVisible}) =>
              <div className={isVisible ? 'animate__animated animate__fadeInUp animate__fast' : 'animate__animated animate__fadeOutDown animate__fast'}>
                  <TitleWithSpans title='web developer' tag='h3' />
              </div>
              }
          </TrackVisibility>
          <TrackVisibility>
              {({isVisible}) =>
              <div className={isVisible ? 'animate__animated animate__fadeInUp' : 'animate__animated animate__fadeOutDown fadeInUp animate__faster'}>
                  <TitleWithSpans title='sensible to front-end' tag='h4' />
              </div>
              }
          </TrackVisibility>
        </div>
        <div className='welcome-avatar position-relative text-center'>
          <TrackVisibility offset={300}>
              {({isVisible}) =>
              <img src={pfp} className={`avatar top-50 ${isVisible ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'}`} alt='profile' />
              }
          </TrackVisibility>
          <TrackVisibility offset={300}>
              {({isVisible}) =>
              <img src={pfp} className={`avatar-reflect position-absolute top-50 z-n1 ${isVisible ? 'animate__animated animate__fadeIn animate__slower' : 'animate__animated animate__fadeOut animate__slower'}`} alt='profile' />
              }
          </TrackVisibility>          
        </div>
      </div>
      <span className='page position-absolute'>
        <TrackVisibility offset={200}>
          {({isVisible}) =>
            <div className={`number position-relative ${isVisible ? 'animate__animated animate__fadeInLeftBig' : 'animate__animated animate__fadeOutLeftBig'}`} data-id='1'></div>
          }
        </TrackVisibility>
      </span>
    </>
  )
}

export default Welcome