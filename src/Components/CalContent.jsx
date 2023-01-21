import Carousel from "./carousel/Carousel";
import React from "react";
import "./calrousel.css";

function CalContent() {
  const slides = [
    "../../public/image-visual/page1.jpg",
    "../../public/image-visual/page2.png",
    "../../public/image-visual/page3.png",
    "../../public/image-visual/page4.jpg",
    "../../public/image-visual/page5.png",
  ];
  return (
    <div className="main__bg">
      <div className="conteiner">
        <div className="carousel-layout d-flex align-items-center">
          <Carousel slides={slides} indicators interval={4000} />
        </div>
      </div>
    </div>
  );
}

export default CalContent;
