import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-rourter-dom";
import Carousel from "../home/Carousel";
import Search from "../home/Search";
import Specials from "../home/Specials";
import Categories from "../home/Categories";

const Home = props => {
  return (
    <span>
      <Carousel />
      <Search />
      <Specials />
      <Categories />
    </span>
  );
};

export default Home;
