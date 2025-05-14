// src/components/Header.js
import React from 'react';
import './Header.css';
import AfrobitesLogo from '../assets/images/afrobites_logo_512.png';
import leafsImage from '../assets/images/leafs.png';
import jollofImage from '../assets/images/jollof_v1.png';

const Header = () => {
  return (
    <header className="hero-container">
      <img src={leafsImage} alt="Floating Leafs" className="leafs-bg" />
      <nav className="navbar">
        <img src={AfrobitesLogo} alt="Afrobites Logo" className="logo" />
        <ul className="nav-links">
          <li>About Us</li>
          <li>Menu</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
        <div className="nav-icons">
          <span className="icon user-icon">👤</span>
          <span className="icon cart-icon">🛒</span>
        </div>
      </nav>

      <div className="hero-content">
        <div className="hero-text">
          <h1>Get a taste of <br /> <span>West African food</span></h1>
          <p>
            Discover the rich and diverse flavors of West Africa right here at Afro Bites.
            Our authentic dishes bring the vibrant culinary traditions of West Africa straight to your table,
            inviting you to savor every bite.
          </p>
          <div className="hero-buttons">
            <button className="menu-btn">Menu</button>
            <button className="order-btn">Order Now</button>
          </div>
        </div>

        <div className="hero-image">
          <img src={jollofImage} alt="Jollof Rice Plate" />
        </div>
      </div>
    </header>
  );
};

export default Header;
