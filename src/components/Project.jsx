
import React, { useState, useRef } from "react";
import cards from "../data/projectContent";
import Card from "../components/Card";
import Modal from "./ProjectModal";

const Project = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 500;
    } else {
      current.scrollLeft += 500;
    }
  };

  return (
  <div id="project" className="dashboard-container">
      <h2 className="project-title">Now Streaming: Projects</h2>
      <button className="scroll-arrow left" onClick={() => scroll('left')}>‹</button>
      <button className="scroll-arrow right" onClick={() => scroll('right')}>›</button>
      <div className="card-row" ref={scrollRef}>
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            onClick={() => setSelectedCard(card)}
          />
        ))}
      </div>
      <Modal
        open={!!selectedCard}
        onClose={() => setSelectedCard(null)}
        title={selectedCard?.title}
        description={selectedCard?.description}
        image={selectedCard?.image}
        link={selectedCard?.link}
      />
    </div>
  );
}

export default Project;