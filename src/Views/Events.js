// src/Views/Events.js
import React, { useEffect } from 'react';
import './Events.css';
import afrobitesVideo from '../assets/images/afrobites_video_exhib_2.MOV';
import exhibitionPic from '../assets/images/exhibition_2_pic_1.jpg';
import groupPic from '../assets/images/group_pic_1.png';
import exhib1Video from '../assets/images/exhib_1_video.MP4';
import menuExhib1 from '../assets/images/menu_exhib_1.png';
import groupPicExhib1 from '../assets/images/group_pic_exhib_1.jpg';

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
            <h3>AfroBites SOLD OUT Exhibition 2 at Northeastern, 2024</h3>
            <p>
              Our second exhibition featured traditional Nigerian dishes with modern flair.
              The Northeastern studet's enjoyed out famous beans and plantain and jollof rice dishes.
            </p>
          </div>
        </div>
        
        <h3 className="exhibition-title">Exhibition Gallery</h3>
        <div className="exhibition-media-container">
          <div className="exhibition-media-item">
            <img src={exhibitionPic} alt="Exhibition" className="event-photo" />
          </div>
          <div className="exhibition-media-item">
            <video className="event-video" src={afrobitesVideo} autoPlay muted loop playsInline/>
          </div>
          <div className="exhibition-media-item">
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
        </div>
        
        <h3 className="exhibition-title">Exhibition Gallery</h3>
        <div className="exhibition-media-container">
          <div className="exhibition-media-item">
            <img src={menuExhib1} alt="Exhibition Menu" className="event-photo" />
          </div>
          <div className="exhibition-media-item">
            <video className="event-video" src={exhib1Video} autoPlay muted loop playsInline/>
          </div>
          <div className="exhibition-media-item">
            <img src={groupPicExhib1} alt="Group Photo" className="event-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
