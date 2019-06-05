import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../../images/vendors/locanda-restaurant-bar.jpg";

class Vendor extends Component {
  render() {
    const { specials } = this.props;

    const specialsList = specials.map(special => (
      <h1 key={special.id}>{special.name}</h1>
    ));

    console.log(specials);

    return (
      <>
        <img src={img} alt="title" style={{ width: "100%" }} />
        <Container>{specialsList}</Container>
      </>
    );
  }
}

export default Vendor;
