import React from 'react';
import { useState, useEffect, useContext } from 'react';
import Carousel from 'react-multi-carousel';
import './Work.css';
import 'react-multi-carousel/lib/styles.css';
import { ThemeContext } from '../../../Theme';

// enhanced leads
import enhancedLeadsThumb from '../../../assets/images/work/enhanced-leads/thumb_img.webp';
import enhancedLeads1 from '../../../assets/images/work/enhanced-leads/personal-info_img.webp';
import enhancedLeads2 from '../../../assets/images/work/enhanced-leads/calculate-trade-in_img.webp';
import enhancedLeads3 from '../../../assets/images/work/enhanced-leads/calculate-payments_img.webp';
import enhancedLeads4 from '../../../assets/images/work/enhanced-leads/expectations_img.webp';

// 404
import fourOhFourThumb from '../../../assets/images/work/404/thumb_img.webp';
import fourOhFour1 from '../../../assets/images/work/404/devices_img.webp';
import fourOhFour2 from '../../../assets/images/work/404/tablet_img.webp';
import fourOhFour3 from '../../../assets/images/work/404/mobile_img.webp';

// elhart
import elhartThumb from '../../../assets/images/work/elhart/thumb_img.webp';
import elhart1 from '../../../assets/images/work/elhart/devices_img.webp';
import elhart2 from '../../../assets/images/work/elhart/tablet_img.webp';
import elhart3 from '../../../assets/images/work/elhart/mobile_img.webp';

// lodi
import lodiThumb from '../../../assets/images/work/lodi/thumb_img.webp';
import lodi1 from '../../../assets/images/work/lodi/devices_img.webp';
import lodi2 from '../../../assets/images/work/lodi/tablet_img.webp';
import lodi3 from '../../../assets/images/work/lodi/mobile_img.webp';

// fivestar
import fivestarThumb from '../../../assets/images/work/fivestar/thumb_img.webp';
import fivestar1 from '../../../assets/images/work/fivestar/tablet_img.webp';
import fivestar2 from '../../../assets/images/work/fivestar/static_img.webp';

// karhunt
import karhuntThumb from '../../../assets/images/work/karhunt/thumb_img.webp';
import karhunt1 from '../../../assets/images/work/karhunt/tablet_img.webp';
import karhunt2 from '../../../assets/images/work/karhunt/static_img.webp';

// finance
import financeThumb from '../../../assets/images/work/finance/thumb_img.webp';
import finance1 from '../../../assets/images/work/finance/static_img.webp';

// web hosting
import hostingThumb from '../../../assets/images/work/web-hosting/thumb_img.webp';
import hosting1 from '../../../assets/images/work/web-hosting/tablet_img.webp';
import hosting2 from '../../../assets/images/work/web-hosting/static_img.webp';

// eminence
import eminenceThumb from '../../../assets/images/work/eminence/thumb_img.webp';
import eminence1 from '../../../assets/images/work/eminence/tablet_img.webp';
import eminence2 from '../../../assets/images/work/eminence/static_img.webp';

// fictiv
import fictivThumb from '../../../assets/images/work/fictiv/thumb_img.webp';
import fictiv1 from '../../../assets/images/work/fictiv/tablet_img.webp';
import fictiv2 from '../../../assets/images/work/fictiv/static_img.webp';

// im2
import im2Thumb from '../../../assets/images/work/im2/thumb_img.webp';
import im21 from '../../../assets/images/work/im2/tablet_img.webp';
import im22 from '../../../assets/images/work/im2/static_img.webp';

// infared
import infaredThumb from '../../../assets/images/work/infared/thumb_img.webp';
import infared1 from '../../../assets/images/work/infared/tablet_img.webp';
import infared2 from '../../../assets/images/work/infared/static_img.webp';

function Work() {

  // From Theme.js
  const { TrackVisibility, Link } = useContext(ThemeContext); //header height hook  

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
      info: `<h4>400 Error Page Overview</h4><p>This 400 error page is designed to be both visually appealing and user-friendly, providing a delightful experience even when something goes wrong. The page is fully responsive, ensuring it looks great and functions smoothly across all devices, from desktop to mobile.</p><ul><li><p><strong>Design</strong>: The page features soft, playful colors and charming illustrations (like a cute character or whimsical elements) to keep the tone lighthearted. It's designed to turn an error into a positive, engaging moment for the user.</p></li><li><p><strong>Functionality</strong>: While the page creatively handles the 400 error (Bad Request), it still provides essential navigation options, such as a clear call-to-action to return to the homepage or a search bar to find the right content.</p></li><li><p><strong>Responsiveness</strong>: The layout adjusts perfectly to different screen sizes, ensuring the experience remains pleasant on mobile phones, tablets, and desktops.</p></li></ul><p>This page was created to improve user experience even in error situations, turning frustration into a fun, memorable interaction.</p>`,
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
      info: `<h4>Project Overview: Legacy Template Upgrade to Bootstrap Framework</h4><p><strong>Project Objective</strong>:<br>The goal of this project was to upgrade and modernize the existing front-end templates, which were built on an older version of the Foundation framework, to a more current and maintainable solution using the latest version of the Bootstrap framework. The objective was to ensure the templates remained fully responsive across all devices while improving both performance and scalability.</p><p><strong>Scope</strong>:</p><ul><li><p><strong>Legacy Template Evaluation</strong>: The first step involved evaluating the existing templates to understand the limitations of the old Foundation-based layout, particularly regarding compatibility with modern browsers, ease of maintenance, and responsiveness.</p></li><li><p><strong>Framework Upgrade</strong>: The templates were restructured and redeveloped using the latest version of Bootstrap, a popular and robust front-end framework that offers a wide range of pre-built components, grid systems, and utility classes. Bootstrap was chosen for its extensive support, flexibility, and ease of integration into existing projects.</p></li><li><p><strong>Responsive Design</strong>: The upgraded templates were designed to be fully responsive, ensuring optimal performance and user experience across all screen sizes and devices, from desktops to tablets to mobile phones. This involved leveraging Bootstrap's grid system and responsive utilities to create a fluid, adaptive layout.</p></li><li><p><strong>UI/UX Enhancements</strong>: Alongside the technical upgrade, minor UI/UX improvements were incorporated to create a more modern, visually appealing design. This included enhancing typography, improving color schemes, and updating elements such as buttons, navigation, and forms for better user interaction.</p></li><li><p><strong>Testing and Optimization</strong>: Rigorous testing was conducted across multiple devices and browsers to ensure consistent performance and compatibility. The codebase was optimized for faster load times and improved accessibility.</p></li></ul><p><strong>Outcome</strong>:<br>The upgraded templates, now built on Bootstrap, provide a more stable, scalable, and responsive foundation for future development. The new layout significantly improved the user experience, especially on mobile devices, and provided a more maintainable structure for the development team. The transition to Bootstrap also enhanced the site's ability to incorporate new features and design updates without overhauling the entire front-end framework in the future.</p>`,
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
      info: `<h4>Project Overview: Legacy Template Upgrade to Bootstrap Framework</h4><p><strong>Project Objective</strong>:<br>The goal of this project was to upgrade and modernize the existing front-end templates, which were built on an older version of the Foundation framework, to a more current and maintainable solution using the latest version of the Bootstrap framework. The objective was to ensure the templates remained fully responsive across all devices while improving both performance and scalability.</p><p><strong>Scope</strong>:</p><ul><li><p><strong>Legacy Template Evaluation</strong>: The first step involved evaluating the existing templates to understand the limitations of the old Foundation-based layout, particularly regarding compatibility with modern browsers, ease of maintenance, and responsiveness.</p></li><li><p><strong>Framework Upgrade</strong>: The templates were restructured and redeveloped using the latest version of Bootstrap, a popular and robust front-end framework that offers a wide range of pre-built components, grid systems, and utility classes. Bootstrap was chosen for its extensive support, flexibility, and ease of integration into existing projects.</p></li><li><p><strong>Responsive Design</strong>: The upgraded templates were designed to be fully responsive, ensuring optimal performance and user experience across all screen sizes and devices, from desktops to tablets to mobile phones. This involved leveraging Bootstrap's grid system and responsive utilities to create a fluid, adaptive layout.</p></li><li><p><strong>UI/UX Enhancements</strong>: Alongside the technical upgrade, minor UI/UX improvements were incorporated to create a more modern, visually appealing design. This included enhancing typography, improving color schemes, and updating elements such as buttons, navigation, and forms for better user interaction.</p></li><li><p><strong>Testing and Optimization</strong>: Rigorous testing was conducted across multiple devices and browsers to ensure consistent performance and compatibility. The codebase was optimized for faster load times and improved accessibility.</p></li></ul><p><strong>Outcome</strong>:<br>The upgraded templates, now built on Bootstrap, provide a more stable, scalable, and responsive foundation for future development. The new layout significantly improved the user experience, especially on mobile devices, and provided a more maintainable structure for the development team. The transition to Bootstrap also enhanced the site's ability to incorporate new features and design updates without overhauling the entire front-end framework in the future.</p>`,
      thumb: [lodiThumb],
      urls: [
        [lodi1],
        [lodi2],
        [lodi3],
      ],
    },
    {
      id: 5,
      title: 'Fivestar Toyota Template',
      info: `<h4>Website Template Overview for Car Dealership (2011)</h4><p>This website template was created as a design sample for a car dealership back in 2011, using Adobe Photoshop. It was a personal project done on free time for a previous employer, showcasing a modern, user-friendly layout tailored for the automotive industry.</p><p><strong>Key Features</strong>:</p><ul><li><strong>Design</strong>: The template features a clean, professional layout with a focus on showcasing vehicles. The homepage includes prominent areas for featured cars, promotions, and contact information.</li><li><strong>Visuals</strong>: Bold, high-quality images of cars were incorporated to highlight the dealership's inventory, alongside clear calls-to-action like "View Inventory" and "Contact Us."</li><li><strong>Color Scheme</strong>: The color palette was carefully selected to reflect the dealership's brand, incorporating sleek, modern tones that complement the automotive theme.</li><li><strong>User Focus</strong>: The design was meant to be intuitive, making it easy for visitors to browse car listings, view details, and get in touch with the dealership.</li></ul><p>This template was never fully developed into a live website but served as a solid visual concept that could be used as a foundation for a future online presence. The project demonstrated creativity and design skills, offering a glimpse into what a fully-fledged dealership website could look like.</p>`,
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
          <div className='modal-dialog modal-fullscreen' role="document">
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'><small>{modalData.title}</small></h5>
                <button type="button" className='display-6 close text-white' onClick={handleCloseModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                <div className='position-relative'>
                  <Carousel responsive={modal} className='modal-slider'>
                    {modalData.urls.map((url, index) => (
                      <div key={index}>
                        <img src={url} className='mx-auto d-block rounded-3' alt={`${modalData.title} - ${index + 1}`} />
                      </div>
                    ))}
                  </Carousel>

                  <div className='modal-scroll scroll d-none d-lg-block position-absolute top-50 text-uppercase'>
                  <Link className='position-absolute end-0 d-block py-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='bi bi-arrow-left' viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>                  
                    <small>scroll down</small> 
                  </Link>           
                  </div>                  
                </div>

                <div className='row'>
                  <div className='col col-md-10 offset-md-1'>
                    <div dangerouslySetInnerHTML={{ __html: modalData.info }} />
                  </div>
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