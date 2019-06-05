import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../../images/vendors/locanda-restaurant-bar.jpg";

class Vendor extends Component {
  render() {
    const { specials } = this.props;

    return <img src={img} alt="" />;
  }
}

export default Vendor;
