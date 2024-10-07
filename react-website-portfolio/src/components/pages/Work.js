import React from 'react';
import { useContext, useState, useEffect } from 'react';
import TrackVisibility from 'react-on-screen';
import Carousel from 'react-multi-carousel';
import './Work.css';
import 'react-multi-carousel/lib/styles.css';
import { ThemeContext } from '../../Theme';

function Work() {

  // From Theme.js
  const { headerHeight } = useContext(ThemeContext); //header height hook

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4
    },    
    desktop: {
      breakpoint: { max: 1023, min: 992 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 991, min: 576 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: 1
    }
  };

  const [modalData, setModalData] = useState({ id: '', thumb: '', url: '' });
  const [showModal, setShowModal] = useState(false);
  const [fadeIn, setFadeIn] = useState(false); // For custom fade-in

  const images = [
    { id: 1, thumb: 'https://placehold.co/320x240/EEE/31343C', url: 'https://placehold.co/640x480/EEE/31343C' },
    { id: 2, thumb: 'https://placehold.co/320x240/EEE/31343C', url: 'https://placehold.co/640x480/EEE/31343C' },
    { id: 3, thumb: 'https://placehold.co/320x240/EEE/31343C', url: 'https://placehold.co/640x480/EEE/31343C' },
    { id: 4, thumb: 'https://placehold.co/320x240/EEE/31343C', url: 'https://placehold.co/640x480/EEE/31343C' },
    { id: 5, thumb: 'https://placehold.co/320x240/EEE/31343C', url: 'https://placehold.co/640x480/EEE/31343C' },
  ];

  const handleImageClick = (id, url) => {
    setModalData({ id, url });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setFadeIn(false); // Start fade-out
    setTimeout(() => {
      setShowModal(false); // Hide modal after fade-out is complete
    }, 300); // Match the fade-out transition duration
  };  

  // Add fade-in effect after modal is opened
  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        setFadeIn(true);
      }, 10); // Slight delay to trigger fade-in
    }
  }, [showModal]);

  return (    
    <>
      <div className='section-heading work-heading' style={{paddingTop: headerHeight}}>
        <div className='container-xxl'>
          <TrackVisibility partialVisibility>
            {({isVisible}) =>        
              <h2 className={`h1 m-0 ${isVisible ? 'animate__animated animate__fadeInUpBig' : 'animate__animated animate__fadeOutDownBig'}`}>Work</h2>
            }
          </TrackVisibility>
        </div>
      </div>           
      <div className='work-container' style={{paddingBottom: headerHeight}}>
        <div className='container-xxl'>
          <div className='work-wrapper d-flex flex-column'>
            <Carousel responsive={responsive} infinite={true} className='work-slider mt-auto mb-auto pb-5'>
              {images.map((image) => (
                <img
                  key={image.id}
                  src={image.thumb}
                  alt={`image ${image.id}`}             
                  className='img-fluid'
                  style={{ cursor: 'pointer', margin: '10px' }}
                  onClick={() => handleImageClick(image.id, image.url)}
                />
              ))}                
            </Carousel>
          </div>
        </div>
      </div>
      <span className='page position-absolute'>
        <TrackVisibility offset={200}>
          {({isVisible}) =>
            <div className={`number position-relative ${isVisible ? 'animate__animated animate__fadeInLeftBig' : 'animate__animated animate__fadeOutLeftBig'}`} data-id='4'></div>
          }
        </TrackVisibility>
      </span> 

      {showModal && (
        <div className={`modal modal-xl ${fadeIn ? 'fade-in' : 'fade-out'}`} style={{ display: 'block', opacity: fadeIn ? 1 : 0 }} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Image Details</h5>
                <button type="button" className="close" onClick={handleCloseModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img src={modalData.url} alt={`Image ${modalData.id}`} style={{ maxWidth: '100%' }} />
                <p>Data ID: {modalData.id}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show" onClick={handleCloseModal}></div>
        </div>
      )}
    </>
  )
}

export default Work