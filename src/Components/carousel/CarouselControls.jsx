import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function CarouselControls({ prev, next }) {
  return (
    <div>
      <button className="carousel-control left" onClick={prev}>
        <FiChevronLeft size={"1.5rem"} />
      </button>
      <button className="carousel-control right" onClick={next}>
        <FiChevronRight size={"1.5rem"} />
      </button>
    </div>
  );
}

export default CarouselControls;
