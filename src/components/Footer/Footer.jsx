import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-column">
          <h3>Home</h3>
          <ul className="footer-links">
            <li><a href="/live-competition">Competitions</a></li>
            <li><a href="/how-to-play">How to Play</a></li>
            <li><a href="/previous-winners">Winners</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3><Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link></h3>
          <ul className="footer-links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Payment Method</h3>
          <div className="payment-methods">
            <div className="visa-logo">VISA</div>
            <div className="mastercard-logo">Mastercard</div>
          </div>
          
          <h3>Social</h3>
          <div className="social-icons">
            <div className="social-icon facebook">f</div>
            <div className="social-icon twitter">t</div>
            <div className="social-icon instagram"></div>
          </div>
        </div>
        
        <div className="footer-column">
          <h3><Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link></h3>
          <div className="footer-text">
            <p>Players must be over 18 years of age.</p>
            <p>If you win and you are under 18 then you will not be able to collect the prize and the competition will be drawn again.</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>© Copyright 2021 | All Rights Reserved. Powered by HiltonWebDesign.com</p>
        </div>
        <div className="footer-bottom-right">
          <a href="#terms">Website Terms & Conditions</a>
          <a href="#competition-terms">Competition Terms & Conditions</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;