import React, { Component } from "react";
import { Container, Image, Row } from "react-bootstrap";
import "./Vendor.css";

class Vendor extends Component {
  render() {
    const { specials } = this.props;

    const {
      image,
      vendor,
      address,
      suburb,
      postcode,
      website,
      phone
    } = this.props.special;

    const img = require("../../images/vendors/" + image);

    const specialsList = specials.map(special => (
      <h1 key={special.id}>{special.name}</h1>
    ));

    return (
      <Container className="vendor">
        <Row classNam="vendor-banner">
          <Image src={img} alt="title" style={{ width: "100%" }} />
        </Row>
        <Row className="vendor-title">
          <h1>{vendor}</h1>
        </Row>
        <Row className="vendor-address">
          <h3>
            {address},{suburb},{postcode}
          </h3>
        </Row>
        <Row>
          <h5 className="vendor-website-phone">
            {website}
            <br />
            {phone}
          </h5>
        </Row>
        {specialsList}
      </Container>
    );
  }
}

export default Vendor;
