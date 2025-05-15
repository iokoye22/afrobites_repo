// src/Views/OurStory.js
import React from 'react';
import './OurStory.css';
import laurettaHeadshot from '../assets/images/Lauretta_Okoye_headshot.jpg';
import leafsImage from '../assets/images/leafs.png';

const OurStory = () => {
  return (
    <section className="our-story" id="our-story">
      <img src={leafsImage} alt="Floating Leafs" className="leafs-bg" />
      <div className="our-story-inner">
        <div className="our-story-image">
          <img src={laurettaHeadshot} alt="Chef Lauretta Okoye" />
        </div>
        <div className="our-story-text">
          <h4>Our Story</h4>
          <h2>Who is AfroBites</h2>
          <p>
            Meet Chef Lauretta Okoye, a Nigerian immigrant whose culinary journey brings the vibrant flavors of Africa to your table. 
            With a passion for authentic African cuisine, Chef Lauretta infuses each dish with a rich tapestry of tradition and heritage. 
            Lauretta draws inspiration from her homeland to create dishes like Jollof Rice and Egusi Soup that captivate the senses. 
            Beyond the kitchen, Chef Lauretta is a proud Northeastern Alumm, pharmacist, pharmacy owner, and cultural ambassador. 
            Lauretta shares the stories behind each dish to foster appreciation and understanding. 
            Experience the warmth of Nigeria and the spirit of Chef Lauretta's culinary artistry with every unforgettable bite.
          </p>
          <button className="menu-cta">Menu</button>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
