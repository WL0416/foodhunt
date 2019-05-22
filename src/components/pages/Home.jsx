import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-rourter-dom";
import Carousel from "../home/Carousel";
import Search from "../home/Search";
import SpecialPrice from "../home/Specials";

const Home = props => {
  return (
    <span>
      <Carousel />
      <Search />
      <SpecialPrice />
    </span>
  );
};

export default Home;
