import React, { useState, useEffect } from "react";
import {
  trackResumePageView,
  trackResumeSwitch,
  trackResumeDownload,
  trackTimeSpent,
} from "../helper/PageTracker";
import { resumeData, personalInfo } from "../data/resumeData.js";

const ResumePage = () => {
  const [activeType, setActiveType] = useState("frontend");
  const [isLoading, setIsLoading] = useState(true);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    trackResumePageView(activeType);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 5) {
        trackTimeSpent(activeType, timeSpent);
      }
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, [activeType, startTime]);

  const handleTypeSwitch = (newType) => {
    if (newType !== activeType) {
      trackResumeSwitch(activeType, newType);
      setActiveType(newType);
    }
  };

  const handleDownload = () => {
    trackResumeDownload(activeType);
    const link = document.createElement("a");
    link.href = activeType === "frontend" 
      ? "https://drive.google.com/file/d/1bCfrN0bkt1q_JMTbSmlUAgd-rr9uAnIg/view"
      : "https://drive.google.com/file/d/1XsuuQY_A_eHJS1GGu-5KXPalY-_IuoN8/view";
    link.download = `Bhargavi_Rengarajan_${activeType === "frontend" ? "Frontend" : "Software_Engineer"}.pdf`;
    link.click();
  };

  const data = resumeData[activeType];

  if (isLoading) {
    return (
      <div className="resume-page">
        <div className="loading-screen">
          <div className="loader"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="resume-page">
      <div className="resume-container">
        {/* Header */}
        <header className="resume-header">
          <div className="header-content">
            <h1 className="name">{personalInfo.name}</h1>
            <div className="contact-info">
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              <span className="divider">|</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <span className="divider">|</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <span className="divider">|</span>
              <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer">
                LeetCode
              </a>
              <span className="divider">|</span>
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Resume Type Toggle */}
          <div className="resume-toggle">
            <button
              className={`toggle-btn ${activeType === "frontend" ? "active" : ""}`}
              onClick={() => handleTypeSwitch("frontend")}
            >
              <span className="toggle-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 9l3 3-3 3" />
                  <line x1="15" y1="9" x2="15" y2="9.01" />
                  <line x1="15" y1="15" x2="15" y2="15.01" />
                </svg>
              </span>
              Frontend
            </button>
            <button
              className={`toggle-btn ${activeType === "fullstack" ? "active" : ""}`}
              onClick={() => handleTypeSwitch("fullstack")}
            >
              <span className="toggle-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                  <circle cx="8" cy="6" r="1" fill="currentColor" />
                  <circle cx="8" cy="12" r="1" fill="currentColor" />
                  <circle cx="8" cy="18" r="1" fill="currentColor" />
                </svg>
              </span>
              Software Engineer
            </button>
          </div>

          {/* Download Button */}
          <button className="download-btn header-download" onClick={handleDownload}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7,10 12,15 17,10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </button>
        </header>

  
        {/* Main Content */}
        <main className="resume-main">
          <div class="right-content">
          <section className="resume-section skills-section">
            <h2 className="section-title">
              <span className="title-accent"></span>
              Technical Skills
            </h2>
            <div className="skills-grid">
              {data.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-item"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        
          <section className="resume-section achievements-section">
            <h2 className="section-title">
              <span className="title-accent"></span>
              Achievements
            </h2>
            <div className="achievements-list">
              {data.achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="resume-section certifications-section">
            <h2 className="section-title">
              <span className="title-accent"></span>
              Certifications
            </h2>
            <div className="certifications-list">
              {data.certifications.map((cert, index) => (
                <div key={index} className="cert-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                  <div className="cert-info">
                    <span className="cert-name">{cert.name}</span>
                    <span className="cert-issuer">{cert.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="left-content">
          <section className="resume-section education-section">
            <h2 className="section-title">
              <span className="title-accent"></span>
              Education
            </h2>
            <div className="education-list">
              {data.education.map((edu, index) => (
                <div
                  key={edu.school}
                  className="education-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="edu-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                    </svg>
                  </div>
                  <div className="edu-content">
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <p className="edu-school">{edu.school}</p>
                    <span className="edu-period">{edu.period}</span>
                    {edu.coursework && (
                      <p className="edu-coursework">
                        <strong>Coursework:</strong> {edu.coursework}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="resume-section experience-section">
            <h2 className="section-title">
              <span className="title-accent"></span>
              Experience
            </h2>
            <div className="experience-list">
              {data.experience.map((exp, index) => (
                <div
                  key={`${exp.company}-${exp.period}`}
                  className="experience-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="exp-header">
                    <div className="exp-title-group">
                      <h3 className="exp-role">{exp.role}</h3>
                      <span className="exp-company">{exp.company}</span>
                      <span className="exp-location">{exp.location}</span>
                    </div>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                  <ul className="exp-highlights">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="resume-section projects-section">
            <h2 className="section-title">
              <span className="title-accent"></span>
              Projects
            </h2>
            <div className="projects-grid">
              {data.projects.map((project, index) => (
                <a
                  key={project.name}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="project-card-inner">
                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-tech">{project.tech}</p>
                    <p className="project-desc">{project.description}</p>
                    <span className="project-link">
                      View Project
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
        </main>

      </div>

      {/* Background Elements */}
      <div className="bg-gradient"></div>
      <div className="bg-grid"></div>
    </div>
  );
};

export default ResumePage;
