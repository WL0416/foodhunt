import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";
import "./Vendor.css";

class Vendor extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
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
      <p key={special.id}>{special.name}</p>
    ));

    return (
      <Container className="vendor">
        <Image src={img} alt="title" style={{ width: "100%" }} />
        <h1 className="vendor-title">{vendor}</h1>
        <h3 className="vendor-address">
          {address},{suburb},{postcode}
        </h3>
        <h5 className="vendor-website">
          <a
            href={`http://${website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {website}
          </a>
        </h5>
        <h5 className="vendor-phone">{phone}</h5>
        <h5 className="vendor-descrip">test test test</h5>
        {specialsList}
      </Container>
    );
  }
}

export default Vendor;
