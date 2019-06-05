import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

class Vendor extends Component {
  render() {
    const { specials, url } = this.props;

    const image = require("../../images/vendors/" + url);

    const specialsList = specials.map(special => (
      <h1 key={special.id}>{special.name}</h1>
    ));

    return (
      <>
        <Image src={image} alt="title" style={{ width: "100%" }} />
        <Container>{specialsList}</Container>
      </>
    );
  }
}

export default Vendor;
