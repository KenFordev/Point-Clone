function CarouselItem({ slide, stopSlide, startSlide }) {
  return (
    <div
      className="caro__item"
      onMouseEnter={stopSlide}
      onMouseOut={startSlide}
    >
      <a href="#">
        <img src={slide} alt="" />
      </a>
    </div>
  );
}

export default CarouselItem;
