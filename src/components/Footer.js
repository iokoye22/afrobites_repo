// src/components/Footer.js
import React, { useEffect, useRef, useState } from 'react';
import './Footer.css';
import AfrobitesFooterLogo from '../assets/images/afrobites_logo_footer.png';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import uberEatsLogo from '../assets/images/uber_eats_logo.png';
import doordashLogo from '../assets/images/doordash_logo.png';

const Footer = () => {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    });

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer id="contact" ref={footerRef} className={`footer ${visible ? 'visible' : ''}`}>
      <div className="footer-content">
        <div className="footer-left">
          <img src={AfrobitesFooterLogo} alt="Afrobites Logo" className="footer-logo" />
          <p>2024 AfroBites MA</p>
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>Menu</li>
              <li>About US</li>
              <li>Contact Us</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Service</h4>
            <ul>
              <li>Delivery</li>
              <li>Payment</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Follow us</h4>
            <ul>
              <li>Instagram</li>
              <li>Tiktok</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>

        <div className="footer-order">
          <p className="order-label">ORDER NOW</p>
          <div className="footer-phone">
            <FaPhoneAlt className="phone-icon" />
            <span>+1 (781) 626–1955</span>
          </div>
          <div className="footer-email">
            <FaEnvelope className="email-icon" />
            <span>afrobitesma@gmail.com</span>
          </div>
          <div className="delivery-logos">
            <a href="https://www.ubereats.com" target="_blank" rel="noopener noreferrer">
              <img src={uberEatsLogo} alt="Uber Eats" />
            </a>
            <a href="https://www.doordash.com" target="_blank" rel="noopener noreferrer">
              <img src={doordashLogo} alt="DoorDash" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
