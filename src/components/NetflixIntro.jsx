import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import { useData } from '../Context';
import netflixSound from '../assets/netflix-sound.mp3';
import logoImage from '../assets/name-card.png';

const NetflixIntro = () => { 
  const [clicked, setClicked] = useState(false);
  const {data, setData} = useData();

  useEffect(() => {
      if (data.showedIntro) {
          window.location.href = '/browse';
      }
  }, []);

  const [play, { stop }] = useSound(netflixSound, {
    volume: 1,
    onend: () => {
      stop();
  }});

  const handlePlayClick = () => {
    setClicked(true);
    play();
    setTimeout(() => { 
      setData((prev) => ({...prev, showedIntro: true}));
      window.location.href="/browse";      
    }, 5000);
    clearTimeout();
  };

  return (
        <div className="netflix-container"  onClick={handlePlayClick} onLoad={handlePlayClick}>
            <img 
              src={logoImage} 
              alt="Custom Logo" 
              className={`netflix-logo ${clicked ? 'animate' : ''}`} 
            />
        </div>
  );
};

export default NetflixIntro;
