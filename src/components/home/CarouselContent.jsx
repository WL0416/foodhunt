import React from "react";
import "./CarouselContent.css";
import PropTypes from "prop-types";

const CarouselContent = props => {
  const { information } = props;
  return (
    <div className="carousel-caption">
      <h1>{information}</h1>
      <div className="row">
        <div className="col" />
        <div className="col">
          <button type="button" className="btn-block btn-success">
            Get Info
          </button>
        </div>
        <div className="col">
          <button type="button" className="btn-block btn-danger">
            Hunt Now
          </button>
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
