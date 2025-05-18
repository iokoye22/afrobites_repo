// src/Views/Events.js
import React, { useEffect } from 'react';
import './Events.css';
import afrobitesVideo from '../assets/images/afrobites_video_exhib_2.MOV';
import exhibitionPic from '../assets/images/exhibition_2_pic_1.jpg';
import groupPic from '../assets/images/group_pic_1.png';

const Events = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="events-section" id="events">
      <div className="events-inner">
        <h2>Our Exhibitions</h2>

        <div className="exhibition">
          <div className="exhibition-info">
            <h3>AfroBites at Taste of Boston 2024</h3>
            <p>
              Our first exhibition featured traditional Nigerian dishes with modern flair.
              The crowd favorite was our spicy Jollof rice paired with grilled suya.
            </p>
          </div>
          <div className="exhibition-media">
            <img src={exhibitionPic} alt="Exhibition" className="event-photo" />
            <video className="event-video" src={afrobitesVideo} autoPlay muted loop playsInline/>
            <img src={groupPic} alt="Group Photo" className="event-photo" />
          </div>
        </div>

        <div className="exhibition">
          <div className="exhibition-info">
            <h3>AfroBites at African Food Fest NYC 2025</h3>
            <p>
              This time we brought a live cooking demo with Chef Lauretta. 
              The aroma of Egusi soup filled the air and brought attendees to our booth all day.
            </p>
          </div>
          <div className="exhibition-media">
            <video controls loop className="event-video">
              <source src="/videos/exhibition2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
