import React, { useRef, useState } from "react";

const HorizontalScrollContainer = ({ children, isShow }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollLeft += direction === "left" ? -500 : 500;
  };

  return (
    <div className="scroll-wrapper">
      <button className="scroll-button left" onClick={() => scroll("left")} style={{ display: isShow ? "block" : "none" }}>
        ◀
      </button>

      <div className="scroll-container" ref={scrollRef}>
        {children}
      </div>

      <button className="scroll-button right" onClick={() => scroll("right")} style={{ display: isShow ? "block" : "none" }}>
        ▶
      </button>
    </div>
  );
};

export default HorizontalScrollContainer;
