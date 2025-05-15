// src/Views/HomePage.js
import React, { useEffect } from 'react';
import './HomePage.css';
import OurStory from './OurStory';

const HomePage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="afrobites-homepage">
      <OurStory />
    </div>
  );
};

export default HomePage;
