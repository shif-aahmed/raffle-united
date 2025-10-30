import React from 'react';
import './Contact.css';
import waveYellow from '../../assets/wave-yellow.svg';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-background"></div>
        <h1 className="contact-title">CONTACT US</h1>
        <div className="contact-wave">
          <img src={waveYellow} alt="Wave" className="contact-wave-image" />
        </div>
      </section>

      <div className="contact-content">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Left: Info */}
            <div className="contact-info">
              <h2 className="contact-heading">GET IN TOUCH</h2>

              <div className="contact-info-item">
                <div className="contact-icon">
                  {/* Envelope icon */}
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="5" width="18" height="14" rx="2" ry="2" stroke="#ff7a00" strokeWidth="2"></rect>
                    <path d="M3 7l9 6 9-6" stroke="#ff7a00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-label">EMAIL</div>
                  <a href="mailto:info@goldenraffle.co.uk" className="contact-link">info@goldenraffle.co.uk</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  {/* Map pin icon */}
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22s7-6.1 7-12a7 7 0 10-14 0c0 5.9 7 12 7 12z" stroke="#ff7a00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="10" r="3" stroke="#ff7a00" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-label">ADDRESS</div>
                  <p className="contact-address">149 South St, Greenock PA16 8TD, Scotland</p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <h2 className="contact-form-heading">CONTACT FORM</h2>
              <div className="form-group">
                <input type="text" placeholder="Name*" className="form-input" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email*" className="form-input" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone" className="form-input" />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" className="form-textarea" rows="8"></textarea>
              </div>
              <button type="submit" className="contact-submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


