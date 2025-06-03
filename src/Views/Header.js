// src/components/Header.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import AfrobitesLogo from '../assets/images/afrobites_logo_512.png';
import leafsImage from '../assets/images/leafs.png';
import jollofImage from '../assets/images/jollof_v1.png';
import shoppingCartImage from '../assets/images/shopping cart.png';
import personImage from '../assets/images/person.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setMenuOpen(false); // Close mobile menu
  };

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-content">
          <img src={AfrobitesLogo} alt="Afrobites Logo" className="logo" onClick={() => handleNavigate('/')} style={{ cursor: 'pointer' }} />
          
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li onClick={() => handleScroll('our-story')}>Our Story</li>
            <li onClick={() => handleNavigate('/menu')}>Menu</li>
            <li onClick={() => handleScroll('contact')}>Contact</li>
            <li onClick={() => handleNavigate('/events')}>Events</li>
          </div>

          <div className="nav-icons">
            <img src={personImage} alt="User Account" className="icon user-icon" />
            <img src={shoppingCartImage} alt="Shopping Cart" className="icon cart-icon" />
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </div>
          </div>
        </div>
      </nav>

      {isHomePage && (
        <header className="hero-container">
          <img src={leafsImage} alt="Floating Leafs" className="leafs-bg" />
          <div className="hero-content">
            <div className="hero-text">
              <h1>Get a taste of <br /> <span>West African food.</span></h1>
              <p>
                Discover the rich and diverse flavors of West Africa right here at AfroBites.
                Our authentic dishes bring the vibrant culinary traditions of West Africa straight to your table,
                inviting you to savor every bite.
              </p>
              <div className="hero-buttons">
                <button className="menu-btn" onClick={() => handleNavigate('/menu')}>Menu</button>
                <button className="order-btn" onClick={() => handleNavigate('/order')}>Order Now</button>
              </div>
            </div>
            <div className="hero-image">
              <img src={jollofImage} alt="Jollof Rice Plate" />
            </div>
          </div>
        </header>
      )}
    </div>
  );
};

export default Header;
