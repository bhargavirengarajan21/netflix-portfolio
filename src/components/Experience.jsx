import React, { useState } from "react";
import episodes from "../data/experienceContent";

import {
  FaGraduationCap,
  FaLaptopCode,
  FaBriefcase,
  FaStar
} from "react-icons/fa";

const iconMap = {
  "Full Stack Engineer, Mr. Cooper": <FaStar />,
  "Graduate Student & Teaching Assistant, UCR": <FaGraduationCap />,
  "Software Engineer II, Mr. Cooper": <FaBriefcase />,
  "Software Engineer I, Mr. Cooper": <FaBriefcase />,
  "Software Engineer Trainee, Mr. Cooper": <FaBriefcase />,
  "Graduate Intern, Mr. Cooper": <FaLaptopCode />,
  "Student, Thiagarajar College of Engineering": <FaGraduationCap />
};

const AboutMeModal = ({ open, onClose }) => {
  const [openIndex, setOpenIndex] = useState(null);
  if (!open) return null;

  const toggleDetails = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2 className="roadmap-heading">Education & Experience</h2>

        <div className="roadmap-timeline">
          <div
            className="roadmap-fill"
            style={{ height: `${((openIndex + 1) / episodes.length) * 100}%` }}
          ></div>

          {episodes.map((ep, idx) => {
            const Icon = iconMap[ep.role] || <FaBriefcase />;

            return (
              <div key={ep.year} className={`roadmap-step ${idx % 2 === 0 ? "even" : ""}`}>
                <div className="roadmap-dot">{Icon}</div>

                <div className="roadmap-card" onClick={() => toggleDetails(idx)}>
                  <div className="roadmap-header">
                    <strong>Episode: {ep.year}</strong>
                    <span className="roadmap-role">Role: {ep.role}</span>
                    <span className="episode-toggle">{openIndex === idx ? "▲" : "▼"}</span>
                  </div>
                  <div className="roadmap-description">
                    Skills: {ep.description.join(", ")}
                  </div>

                  {openIndex === idx && (
                    <div className="roadmap-content open">
                      <ul className="roadmap-details">
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutMeModal;
