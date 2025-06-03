// src/components/Modal.jsx
import React from "react";

const Modal = ({ open, onClose, title, description, image, link }) => {
  if (!open) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
            <button className="modal-close" onClick={onClose}>&times;</button>
            <img src={image} alt={title} className="modal-image" />    
            {link && ( 
                <div className="hero-buttons">
                <button className="hero-btn hero-btn-play">
                  <span className="hero-btn-icon">&#9654;</span> Github Link
                </button>
                <button className="hero-btn hero-btn-list">
                  <span className="hero-btn-icon">+</span> Website Link
                </button>
                </div>
            )}  
        </div>
        <h2 className="modal-title">{title}</h2>
        <p className="modal-desc">{description}</p>
      </div>
    </div>
  );
}

export default Modal;