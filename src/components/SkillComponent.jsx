import React, {useState, useEffect} from 'react';
import HorizontalScrollContainer from './Scrollable';
import { skillData } from '../data/skillsdata';
import SkillStars from './SkillsStar';

const SkillsSection = () => {

  const [selectedCard, setSelectedCard] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  console.log(isMobile)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth]);


  return (
    <>
      <h3>Skill Ratings</h3>
     <HorizontalScrollContainer isShow={isMobile}>
        <div className='skills-container'>
          {Object.entries(skillData).map(([category, skills], index) => (
            <div key={index} style={{  padding: '1rem', border: '1px solid red', borderRadius: '10px' }}>
              <h4 style={{ color: '#e50914', fontSize: '18px', marginBottom: '0.5rem' }}>{category}</h4>
              {skills.map((skill, index) => (
                <SkillStars key={index} title={skill.title} level={skill.level} />
              ))}
            </div>
          ))}
        </div>
     </HorizontalScrollContainer>
    </>
  );
};

export default SkillsSection;
