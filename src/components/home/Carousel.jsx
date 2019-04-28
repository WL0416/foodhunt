import React from "react";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";
import slide3 from "../../images/slide3.jpg";
import "./Carousel.css";
import Contents from "./CarouselContent";

export default props => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="image">
            <img src={slide1} alt="First Slide" className="d-block w-100" />
          </div>
          <Contents information="Street Food Arriving!" />
        </div>
        <div className="carousel-item">
          <div className="image">
            <img src={slide2} alt="Second Slide" className="d-block w-100" />
          </div>
          <Contents information="Free Indian Food!" />
        </div>
        <div className="carousel-item">
          <div className="image">
            <img src={slide3} alt="Third Slide" className="d-block w-100" />
          </div>
          <Contents information="Free Food Again!!!" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};
