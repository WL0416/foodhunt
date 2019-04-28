import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                TODAY
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                SEARCH
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                VENUES
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                ADD SPECIAL
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                NEARBY NOW
              </Link>
            </li>
          </ul>
        </div>
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
