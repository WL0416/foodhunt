import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-rourter-dom";
import Carousel from "../home/Carousel";
import Search from "../home/Search";
import Specials from "../home/Specials";
import Categories from "../home/Categories";
import ScrollableAnchor from "react-scrollable-anchor";

const Home = props => {
  return (
    <>
      <Carousel />
      <ScrollableAnchor id={"search-section"}>
        <Search />
      </ScrollableAnchor>
      <ScrollableAnchor id={"specials-section"}>
        <Specials />
      </ScrollableAnchor>
      <Categories />
    </>
  );
};

export default Home;
