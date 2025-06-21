import React, { useState, useEffect } from "react";
import recommendations from "../data/recommendation.js";
import LinkedInBadge from "../components/LinkedinBadge.jsx";
import HorizontalScrollContainer from './Scrollable';
import { useData } from "../Context.jsx";
import axios from "axios"; 

const HireMeChat = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth]);
  
  
  return (
    <>
      <h2> Hire Me </h2>
      <section id="hireme" className="hireme-section">
        <div className="hireme-column hireme-contact">
          <LinkedInBadge />
          <h2>Contact Me</h2>
          <div className="hireme-contact-info">
            <h4>Email:</h4>
            <a href="mailto: breng002@ucr.edu">breng002@ucr.edu</a>
            <h4>Blogs:</h4>
            <a href="https://medium.com/@breng002" target="_blank" rel="noopener noreferrer"> https://dev.to/bhargavirengarajan21/what-is-dockerfile-docker-series-iii-35ai </a>
            <h4>Quora:</h4>
            <a href="https://www.quora.com/profile/Bhargavi-Rengarajan-3" target="_blank" rel="noopener noreferrer" >https://www.quora.com/profile/Bhargavi-Rengarajan-3</a>
            <h4>Github:</h4>
            <a href="https://github.com/bhargavirengarajan21" target="_blank" rel="noopener noreferrer">https://github.com/bhargavirengarajan21</a>
          </div>
        </div>

        <div className="hireme-column hireme-recommendations">
          <h2>LinkedIn Recommendations</h2>
          <HorizontalScrollContainer isShow={isMobile}>
            <div className="recommendations-list">
            {recommendations.map((rec, idx) => (
              <div className="recommendation-card" key={idx}>
                <p className="recommendation-text">"{rec.text}"</p>
                <p className="recommendation-author">
                  <strong>{rec.name}</strong> <span>— {rec.title}</span>
                </p>
              </div>
            ))}
          </div>
          </HorizontalScrollContainer>
        </div>
      </section>
    </>
  );
};

export default HireMeChat;
