// src/Views/HomePage.js
import React from 'react';
import './HomePage.css';
import Header from './Header';
import OurStory from './OurStory';

const HomePage = () => {
  return (
    <div className="afrobites-homepage">
      <Header />
      <OurStory />
    </div>
  );
};

export default HomePage;
