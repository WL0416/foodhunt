import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
      </div>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">TODAY</li>
          <li className="nav-item">SEARCH</li>
          <li className="nav-item">VENUES</li>
          <li className="nav-item">ADD SPECIAL</li>
          <li className="nav-item">NEARBY NOW</li>
        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "Food Hunt"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
