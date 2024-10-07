import React from 'react';
import TrackVisibility from 'react-on-screen';
import PropTypes from 'prop-types';
import './Welcome.css';
import pfp from '../../assets/images/pfp.webp';

function Welcome() {

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
    <>
      <span className='tags top-tags position-absolute'>&lt;body&gt;</span>
      <div className='container-xxl'>
        <div className='welcome-container position-relative d-flex flex-column flex-md-row'>
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
            <div className='welcome-avatar'>
            <TrackVisibility>
                {({isVisible}) =>
                <img src={pfp} className={isVisible ? 'animate__animated animate__fadeIn animate__slow' : 'animate__animated animate__fadeOut animate__slow'} alt='profile' />
                }
            </TrackVisibility>
          </div>
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