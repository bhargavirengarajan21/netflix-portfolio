import React, { useState } from "react";
import episodes from "../data/experienceContent";
//       
const AboutMeModal = ({ open, onClose }) => {
  const [openIndex, setOpenIndex] = useState(null);
  console.log("Modal open state:", open);
  if (!open) return null;

  const toggleDetails = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Education & Experience</h2>
        <div className="episodes-list">
          {episodes.map((ep, idx) => (
            <div className="episode-card" key={ep.year}>
              <div className="episode-row" onClick={() => toggleDetails(idx)}>
                <div className="episode-header">
                  <span className="episode-year">Episode : {ep.year}</span>
                  <span className="episode-role">Role : {ep.role}</span>
                   <span className="episode-toggle">{openIndex === idx ? "▲" : "▼"}</span>
                </div>
                <span className="episode-description">Skills : {ep.description.join(', ')}</span>
              </div>
              {openIndex === idx && (
                <div className="episode-details">
                  <ul>
                    {ep.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  {ep.certificates.length > 0 && (
                    <div className="episode-certs">
                      <strong>Certificates:</strong>
                      <ul>
                        {ep.certificates.map((cert, j) => (
                          <li key={j}>{cert}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMeModal;
