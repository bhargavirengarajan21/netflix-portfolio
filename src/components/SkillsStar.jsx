import React from 'react';

const SkillStars = ({ title, level }) => {
  return (
    <div className="skill-card">
      <span className="skill-name">{title}</span>
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < level ? 'star filled' : 'star'}>★</span>
        ))}
      </div>
    </div>
  );
};

export default SkillStars;
