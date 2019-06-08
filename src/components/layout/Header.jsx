import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = props => {
  const { branding } = props;
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark bg-danger mb-0 py-0 sticky-top"
      data-spy="affix"
      data-offset-top="50"
    >
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} width="75" height="75" alt="" />
          {branding}
        </Link>

        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/today" className="nav-link">
                TODAY
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/venues" className="nav-link">
                VENUES
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/addspecial" className="nav-link">
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
