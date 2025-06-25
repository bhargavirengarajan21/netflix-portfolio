import React, {useState} from "react";
import Profile from "../assets/picture-3.png";
import AboutMeModal from "../components/Experience";


const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleResume = () => {
    window.open("https://drive.google.com/file/d/19O-rgH4Lge8NIhfkJNmsaFc2ceMtW0fR/view?usp=sharing", "_blank");
  }

  return (
    <section className="hero-section">
      <img
        src={Profile}
        alt="Profile Picture"
        className="hero-bg animated-hero-image"
        draggable="false"
      />
      <div className="hero-gradient" />
      <div className="hero-content">
        <h1 className="hero-title">🎬 Now Streaming: Bhargavi Rengarajan</h1>
        <p className="hero-desc">
          I analyze thrillers with a grin, sing with a flair that’s bound to win, and code with a passion that’s deep within. Fluent in Java, Python, and ReactJS, I bring stories to life—on screen and in code. Whether I’m building in the cloud or crafting the next big plot twist, I’m here to make tech as entertaining as your favorite Netflix binge.
        </p>
        <div className="hero-buttons">
          <button className="hero-btn hero-btn-play" onClick={handleResume}>
            <span className="hero-btn-icon">&#9654;</span> Resume
          </button>
          <button id="workandeducation" className="hero-btn hero-btn-list" onClick={() => setModalOpen(true)}>
            <span className="hero-btn-icon">+</span> Experience
          </button>
        </div>
        <AboutMeModal open={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </section>
  );
};

export default HeroSection;
