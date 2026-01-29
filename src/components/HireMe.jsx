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
    <h2>Recommendations</h2>
      <section id="hireme" className="hireme-section">
        <div className="hireme-column hireme-contact">
          <LinkedInBadge />
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
