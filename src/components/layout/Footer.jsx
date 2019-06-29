import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
  const { copyright } = props;
  return (
    <footer className="page-footer font-small danger-color pt-4 mt-5">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-8 mt-md-0 mt-3">
            <h5 className="text-uppercase text-center">Food Hunt</h5>
            {/* <p className="text-center">aksoajdijoiwajdijawijdioaj</p> */}
            <ul className="list-unstyled">
              <li>
                <p className="text-center">
                  Address: 399 Lonsdale St, Melbourne, VIC, 3000
                </p>
              </li>
              <li>
                <p className="text-center">Phone: 039789135</p>
              </li>
              <li>
                <p className="text-center">Email: contact@foodhunt.com.au</p>
              </li>
            </ul>
          </div>
          <hr className="clearfix w-100 d-md-none pb-3" />
          <div className="col-md-4 mb-md-0 mb-3">
            <h5 className="text-uppercase">About</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Our Business</a>
              </li>
              <li>
                <a href="/">Partner Support</a>
              </li>
              <li>
                <a href="/">Become Our Partner</a>
              </li>
              <li>
                <a href="/">Customer Services</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Link 1</a>
              </li>
              <li>
                <a href="/">Link 2</a>
              </li>
              <li>
                <a href="/">Link 3</a>
              </li>
              <li>
                <a href="/">Link 4</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>

      <div className="footer-copyright text-center py-3">{copyright}</div>
    </footer>
  );
};

Footer.defaultProps = {
  copyright: " © 2019 Copyright: FoodHunt Pty Ltd"
};

Footer.propTypes = {
  copyright: PropTypes.string.isRequired
};

export default Footer;
