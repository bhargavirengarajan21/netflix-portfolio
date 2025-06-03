// src/components/NetflixCard.jsx
import React, { useState } from "react";
import { useData } from "../Context";

const Card = ({ card, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const {data, setData} = useData();

  const onClickHandle = () => {
    if (onClick) {
      onClick(card);
      setData((prevData) => ({...prevData, continueWatching: [...prevData.continueWatching, card]})); // Update selectedCard in context
    } 
  }

  return (
    <div
      className={`netflix-card${hovered ? " hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClickHandle}
    >
      <img src={card.image} alt={card.title} className="card-image" />
      <h5 className={`${hovered ? "top" : "bottom"} card-title`}>{card.title}</h5>
      <p className={`${hovered ? "visible" : "hidden"} card-short`}>{card.shortDesc}</p>
      <div className={`${hovered ? "" : "hidden"} card-tool`}>{card.tools.map((tool, index) => <div className="card-tool-item" key={index}>{tool}<span className="dot">.</span></div>)}</div>
      <div className="card-overlay" />
    </div>
  );
}

export default Card;