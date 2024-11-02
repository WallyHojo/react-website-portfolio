import React from 'react';
import { useState, useEffect } from 'react';
import TrackVisibility from 'react-on-screen';
import Carousel from 'react-multi-carousel';
import './Work.css';
import 'react-multi-carousel/lib/styles.css';

// enhanced leads
import enhancedLeadsThumb from '../../assets/images/work/enhanced-leads/thumb_img.webp';
import enhancedLeads1 from '../../assets/images/work/enhanced-leads/personal-info_img.webp';
import enhancedLeads2 from '../../assets/images/work/enhanced-leads/calculate-trade-in_img.webp';
import enhancedLeads3 from '../../assets/images/work/enhanced-leads/calculate-payments_img.webp';
import enhancedLeads4 from '../../assets/images/work/enhanced-leads/expectations_img.webp';

// 404
import fourOhFourThumb from '../../assets/images/work/404/thumb_img.webp';
import fourOhFour1 from '../../assets/images/work/404/devices_img.webp';
import fourOhFour2 from '../../assets/images/work/404/tablet_img.webp';
import fourOhFour3 from '../../assets/images/work/404/mobile_img.webp';

// elhart
import elhartThumb from '../../assets/images/work/elhart/thumb_img.webp';
import elhart1 from '../../assets/images/work/elhart/devices_img.webp';
import elhart2 from '../../assets/images/work/elhart/tablet_img.webp';
import elhart3 from '../../assets/images/work/elhart/mobile_img.webp';

// lodi
import lodiThumb from '../../assets/images/work/lodi/thumb_img.webp';
import lodi1 from '../../assets/images/work/lodi/devices_img.webp';
import lodi2 from '../../assets/images/work/lodi/tablet_img.webp';
import lodi3 from '../../assets/images/work/lodi/mobile_img.webp';

// fivestar
import fivestarThumb from '../../assets/images/work/fivestar/thumb_img.webp';
import fivestar1 from '../../assets/images/work/fivestar/tablet_img.webp';
import fivestar2 from '../../assets/images/work/fivestar/static_img.webp';

// karhunt
import karhuntThumb from '../../assets/images/work/karhunt/thumb_img.webp';
import karhunt1 from '../../assets/images/work/karhunt/tablet_img.webp';
import karhunt2 from '../../assets/images/work/karhunt/static_img.webp';

// finance
import financeThumb from '../../assets/images/work/finance/thumb_img.webp';
import finance1 from '../../assets/images/work/finance/static_img.webp';

// web hosting
import hostingThumb from '../../assets/images/work/web-hosting/thumb_img.webp';
import hosting1 from '../../assets/images/work/web-hosting/tablet_img.webp';
import hosting2 from '../../assets/images/work/web-hosting/static_img.webp';

// eminence
import eminenceThumb from '../../assets/images/work/eminence/thumb_img.webp';
import eminence1 from '../../assets/images/work/eminence/tablet_img.webp';
import eminence2 from '../../assets/images/work/eminence/static_img.webp';

// fictiv
import fictivThumb from '../../assets/images/work/fictiv/thumb_img.webp';
import fictiv1 from '../../assets/images/work/fictiv/tablet_img.webp';
import fictiv2 from '../../assets/images/work/fictiv/static_img.webp';

// im2
import im2Thumb from '../../assets/images/work/im2/thumb_img.webp';
import im21 from '../../assets/images/work/im2/tablet_img.webp';
import im22 from '../../assets/images/work/im2/static_img.webp';

// infared
import infaredThumb from '../../assets/images/work/infared/thumb_img.webp';
import infared1 from '../../assets/images/work/infared/tablet_img.webp';
import infared2 from '../../assets/images/work/infared/static_img.webp';

function Work() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },    
    desktop: {
      breakpoint: { max: 1023, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 991, min: 576 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: 1,
    }
  };

  const [modalData, setModalData] = useState({ id: '', title: '', info: '', thumb: '', url: [] });
  const [showModal, setShowModal] = useState(false);
  const [fadeIn, setFadeIn] = useState(false); // For custom fade-in

  const images = [
    {
      id: 1,
      title: 'Enhanced Leads',
      info: `<h4>Product Overview: Enhanced Leads</h4>
      <p><strong>Introduction:</strong> Enhanced Leads is an innovative tool designed to streamline the process of calculating trade-in values and estimating payments for new or used vehicles. This user-friendly platform not only engages customers effectively but also ensures that dealerships receive high-quality leads, enhancing their sales potential.</p>
      <p><strong>Key Features:</strong></p>
      <ol><li><p><strong>Trade-In Value Calculator:</strong>
      Users can easily input their vehicle details—make, model, year, mileage, and condition—to receive an accurate estimate of their trade-in value. This feature empowers users with valuable information and encourages them to explore their options.</p></li><li><p><strong>Payment Estimator:</strong>
      After users select their desired vehicle, Enhanced Leads provides an intuitive payment calculator. By entering down payment amounts, loan terms, and interest rates, users can see potential monthly payments, helping them make informed decisions.</p></li><li><p><strong>Lead Generation:</strong>
      Enhanced Leads captures user information through a seamless interface, ensuring that dealerships receive qualified leads. This feature includes options for users to schedule test drives or receive follow-up communications, further facilitating engagement.</p></li><li><p><strong>Visual Design:</strong>
      Created with attention to detail in Photoshop, Enhanced Leads boasts a modern and appealing aesthetic. The design emphasizes usability, with clear navigation and visually engaging elements that enhance the user experience.</p></li><li><p><strong>Prototyping with Adobe XD:</strong>
      The prototyping phase in Adobe XD allowed for extensive testing and refinement of the user interface. This iterative process ensured that the final product is not only functional but also intuitive, making it easy for users to navigate through the trade-in and payment estimation process.</p></li></ol>
      <p><strong>Benefits for Dealerships:</strong></p>
      <ul><li><p><strong>Quality Leads:</strong> Enhanced Leads filters and qualifies potential buyers, ensuring dealerships receive serious inquiries from users genuinely interested in trading in their vehicles.</p></li><li><p><strong>Increased Engagement:</strong> By providing valuable tools for customers, dealerships can enhance their online presence and attract more visitors to their websites, ultimately leading to higher conversion rates.</p></li><li><p><strong>Streamlined Process:</strong> The user-friendly interface reduces friction in the vehicle trade-in and purchasing process, allowing dealerships to focus on closing deals rather than chasing leads.</p></li></ul>
      <p><strong>Conclusion:</strong>
Enhanced Leads is more than just a calculator; it’s a comprehensive tool designed to engage users while delivering high-quality leads to dealerships. With a focus on user experience and an attractive design, Enhanced Leads transforms the vehicle trading and purchasing process into a seamless journey for both customers and dealerships.</p>
      `,
      thumb: [enhancedLeadsThumb],
      urls: [
        [enhancedLeads1],
        [enhancedLeads2],
        [enhancedLeads3],
        [enhancedLeads4],
      ],
    },
    {
      id: 2,
      title: '404 Error Page',
      thumb: [fourOhFourThumb],
      urls: [
        [fourOhFour1],
        [fourOhFour2],
        [fourOhFour3],
      ],
    },
    {
      id: 3,
      title: 'Elhart Group Website',
      thumb: [elhartThumb],
      urls: [
        [elhart1],
        [elhart2],
        [elhart3],
      ],
    },
    {
      id: 4,
      title: 'Lodi Honda Website',
      thumb: [lodiThumb],
      urls: [
        [lodi1],
        [lodi2],
        [lodi3],
      ],
    },
    {
      id: 5,
      title: 'Fivestar Toyota Design',
      thumb: [fivestarThumb],
      urls: [
        [fivestar1],
        [fivestar2],
      ],
    },
    {
      id: 6,
      title: 'Karhunt Design',
      thumb: [karhuntThumb],
      urls: [
        [karhunt1],
        [karhunt2],
      ],
    },
    {
      id: 7,
      title: 'Finance Design',
      thumb: [financeThumb],
      urls: [
        [finance1],
      ],
    },
    {
      id: 8,
      title: 'Web Hosting Design',
      thumb: [hostingThumb],
      urls: [
        [hosting1],
        [hosting2],
      ],
    },
    {
      id: 9,
      title: 'Team Fortress Classic Gaming Website',
      thumb: [eminenceThumb],
      urls: [
        [eminence1],
        [eminence2],
      ],
    },
    {
      id: 10,
      title: 'Fictiv Innovations Website',
      thumb: [fictivThumb],
      urls: [
        [fictiv1],
        [fictiv2],
      ],
    },
    {
      id: 11,
      title: 'im2 Portfolio Design',
      thumb: [im2Thumb],
      urls: [
        [im21],
        [im22],
      ],
    },
    {
      id: 12,
      title: 'Infared Portfolio Website',
      thumb: [infaredThumb],
      urls: [
        [infared1],
        [infared2],
      ],
    },                            
  ];

  const handleImageClick = (id, title, info) => {
    const selectedImage = images.find(image => image.id === id);
    if (selectedImage) {
      setModalData({ id, title, info, urls: selectedImage.urls });
      setShowModal(true);
      document.body.classList.add('modal-open');
    }
  };

  const handleCloseModal = () => {
    setFadeIn(false); // Start fade-out
    setTimeout(() => {
      setShowModal(false); // Hide modal after fade-out is complete
    }, 300); // Match the fade-out transition duration
    document.body.classList.remove('modal-open');
  };  

  // Add fade-in effect after modal is opened
  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        setFadeIn(true);
      }, 10); // Slight delay to trigger fade-in
    }
  }, [showModal]);

  const modal = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };  

  return (    
    <>
      <div className='section-heading work-heading'>
        <div className='container-xxl'>
          <TrackVisibility partialVisibility>
            {({isVisible}) =>        
              <h2 className={`h1 m-0 ${isVisible ? 'animate__animated animate__fadeInUpBig' : 'animate__animated animate__fadeOutDownBig'}`}>Work</h2>
            }
          </TrackVisibility>
        </div>
      </div>           
      <div className='work-container position-relative'>
        <div className='container-xxl d-flex flex-column'>
          <div className='mt-auto'>
            <TrackVisibility>
              {({isVisible}) =>  
                <div className={isVisible ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'}>
                  <h3 className='mb-2'>Designs that Inspire, Solutions that Elevate</h3>
                  <p className='lead'>Explore a curated selection of my projects that showcase my skills and creativity. From innovative design solutions to impactful branding initiatives, each piece reflects my passion and dedication to delivering exceptional results. Click on the images to view more about the process and inspiration behind each project!</p>
                </div>
              }
            </TrackVisibility>  
          </div>                      
          <Carousel responsive={responsive} infinite={true} className='work-slider mt-auto mb-auto pb-5' autoPlay={true} autoPlaySpeed={3000}>
            {images.map((image) => (
              <img
                key={image.id}
                src={image.thumb}
                alt={`${(image.title.toLowerCase())} thumb`}
                className='img-fluid'
                style={{ width: '100%', cursor: 'pointer' }}
                onClick={() => handleImageClick(image.id, image.title, image.info)}
              />
            ))}                
          </Carousel>
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
        <div className={`modal ${fadeIn ? 'fade-in' : 'fade-out'}`} style={{ display: 'block', opacity: fadeIn ? 1 : 0 }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-fullscreen" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title"><small>{modalData.title}</small></h5>
                <button type="button" className="display-6 close text-white" onClick={handleCloseModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body position-relative">
                <Carousel responsive={modal} className='modal-slider'>
                  {modalData.urls.map((url, index) => (
                    <div key={index}>
                      <img src={url} className='mx-auto d-block rounded-3' alt={`Image ${modalData.id} - ${index + 1}`} />
                    </div>
                  ))}
                </Carousel>
                <div className='row'>
                  <div className='col col-md-10 offset-md-1'>
                    <div dangerouslySetInnerHTML={{ __html: modalData.info }} />
                  </div>
                </div>

                <div className='modal-scroll position-absolute top-50 text-uppercase'>
                  <small>scroll down</small> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='bi bi-arrow-right' viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                  </svg>
                </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary btn-lg" onClick={handleCloseModal}>
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