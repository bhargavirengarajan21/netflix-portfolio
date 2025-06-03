import React, {useState} from 'react';
import { skillData } from '../data/skillsdata';
import SkillStars from './SkillsStar';

const SkillsSection = () => {
  const [skills, setSkills] = useState();
  const skillTypes = Object.keys(skillData);

  const handleChange = (e) => {
    setSkills(skillData[e.target.value]);
  }

  return (
    <>
      <h3>Skill Ratings</h3>
      <div className='skill-options'>
        <label htmlFor="role-select">Choose a role:</label>
        <select id="role-select" name="role" onChange={handleChange}>
          <option value="">--Select a role--</option>
          {skillTypes.map((key) => (
          <option value={key}>{key}</option>
          ))}
        </select>
      </div>
      {skills ? <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '1rem', border: '1px solid #eee', borderRadius: '10px' }}>
        <h2 style={{ color: '#e50914', fontSize: '20px', marginBottom: '1rem', textAlign: 'center' }}>My Skills</h2>
        {skills.map((skill, index) => (
          <SkillStars key={index} title={skill.title} level={skill.level} />
        ))}
      </div>: ""}
      
    </>
   
  );
};

export default SkillsSection;
