import React from "react";
import slide1 from "../../images/slide1.jpg";
import video from "../../images/video.webm";
import "./Carousel.css";
import Contents from "./CarouselContent";
import { Image } from "react-bootstrap";

export default props => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
      data-interval="false"
    >
      {/* <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
      </ol> */}
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <span className="video">
            <video
              className="slide-video"
              width="100%"
              hight="auto"
              autoplay="true"
              loop="true"
              src={video}
              type="video/webm"
            />
          </span>
          <Contents information="Start Your Food Journey" />
        </div>
        <div className="carousel-item">
          <span className="image">
            <Image src={slide1} fluid />
          </span>
          <Contents information="Free Indian Food!" />
        </div>
      </div>
      {/* <a
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
      </a> */}
    </div>
  );
};
