import React from "react";

function CarouselIndicators({ slides, currentIndex, switchIndex }) {
  return (
    <div className="carousel-indicators">
      {slides.map((item, index) => (
        <button
          onClick={() => switchIndex(index)}
          key={index}
          className={`carousel-indicator-item ${
            currentIndex === index ? "active" : ""
          }`}
        ></button>
      ))}
    </div>
  );
}

export default CarouselIndicators;
