import React from 'react';
import { useContext, useRef, useState } from 'react';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { ThemeContext } from '../../Theme';

function Contact() {

  // From Theme.js
  const { headerHeight } = useContext(ThemeContext); //header height hook

  const form = useRef();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Update state based on the field being changed
    if (name === 'firstName') setFirstName(value);
    else if (name === 'lastName') setLastName(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'message') setMessage(value);

    // Clear error and success messages on input change
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const namePattern = /^[a-zA-Z]{2,}$/; // Letters only, at least 2 characters
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern

    if (!namePattern.test(firstName)) {
      setError('First name must be at least 2 letters long and contain only letters.');
      return;
    }
    if (!namePattern.test(lastName)) {
      setError('Last name must be at least 2 letters long and contain only letters.');
      return;
    }
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Send email using EmailJS
    const templateParams = {
      firstName,
      lastName,
      email,
    };

    emailjs.send('service_6wyqnpf', 'template_fpcny71', templateParams, 'XLYQ7l_ypaQaiyMdp')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setSuccess('Email sent successfully!');
        // Clear the form
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        setError('Failed to send email. Please try again later.');
      });
  };

  return (
    <>      
      <div className='section-heading contact-heading' style={{paddingTop: headerHeight}}>
        <div className='container-xxl'>
          <TrackVisibility partialVisibility>
            {({isVisible}) =>        
              <h2 className={`h1 m-0 ${isVisible ? 'animate__animated animate__fadeInUpBig' : 'animate__animated animate__fadeOutDownBig'}`}>Contact</h2>
            }
          </TrackVisibility>
        </div>
      </div>    
      <div className='contact-container position-relative' style={{paddingBottom: headerHeight}}>
        <div className='container-xxl d-flex align-items-center'>
          <div className='contact-wrapper d-lg-block pb-5'>
            <div className='row'>
              <div className='col col-md-8 offset-md-2'>
                <p>Fields marked with (<span className='text-danger'>*</span>) are required.</p>
                <form ref={form} onSubmit={handleSubmit} id='contact'>
                  <div className='row'>
                    <div className='col col-md-6'>
                      <label>First Name <small>(<span className='text-danger'>*</span>)</small></label>
                      <input value={firstName} onChange={handleChange} type='text' name='firstName' id='firstName' required />
                    </div>
                    <div className='col col-md-6'>
                      <label>Last Name <small>(<span className='text-danger'>*</span>)</small></label>
                      <input value={lastName} onChange={handleChange} type='text' name='lastName' id='lastName' required /> 
                    </div>
                  </div>     
                  <div className='col'>
                    <label>Email <small>(<span className='text-danger'>*</span>)</small></label>
                    <input value={email} onChange={handleChange} type='email' name='email' id='email' required />              
                    <label>Message</label>
                    <textarea value={message} onChange={handleChange} name='message' rows='6' id='message' />    
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {success && <p style={{ color: 'green' }}>{success}</p>}                            
                    <input type='submit' value='Submit' id='submit' />              
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className='page position-absolute'>
        <TrackVisibility offset={200}>
          {({isVisible}) =>
            <div className={`number position-relative ${isVisible ? 'animate__animated animate__fadeInLeftBig' : 'animate__animated animate__fadeOutLeftBig'}`} data-id='5'></div>
          }
        </TrackVisibility>
      </span>
      <span className='tags bottom-tags position-absolute'>&lt;/body&gt;</span>
    </>
  )
}

export default Contact