import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-rourter-dom";
import Carousel from "../home/Carousel";
import Search from "../home/Search";

const Home = props => {
  return (
    <span>
      <Carousel />
      <Search />
    </span>
  );
};

export default Home;
