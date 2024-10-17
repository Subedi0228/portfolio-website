import React, { useState } from "react";
import "./card.css"; // Import the updated CSS

const SliderCard = ({ images, title, description, callToAction }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-card">
      <div className="slider-wrapper">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="slider-image"
            />
          ))}
        </div>
        <button className="arrow left-arrow" onClick={goToPrevious}>
          &#10094;
        </button>
        <button className="arrow right-arrow" onClick={goToNext}>
          &#10095;
        </button>
      </div>
      <h2 className="slider-title">{title}</h2>
      <p className="slider-description">{description}</p>
      <button className="slider-action">{callToAction}</button>
    </div>
  );
};

export default SliderCard;
