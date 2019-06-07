import React from "react";
import "./CarouselContent.css";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const CarouselContent = props => {
  const { information } = props;
  return (
    <div className="carousel-caption">
      <h1 className="slogan">{information}</h1>
      <div className="row" style={{ paddingBottom: "13%" }}>
        <div className="col" />
        <div className="col">
          <Button variant="success" size="lg" block href="#specials-section">
            Get Info
          </Button>
        </div>
        <div className="col">
          <Button variant="danger" size="lg" block href="#search-section">
            Hunt Now
          </Button>
        </div>
        <div className="col" />
      </div>
    </div>
  );
};

CarouselContent.defaultProps = {
  information: "Need information here."
};

CarouselContent.propTypes = {
  information: PropTypes.string.isRequired
};

export default CarouselContent;
