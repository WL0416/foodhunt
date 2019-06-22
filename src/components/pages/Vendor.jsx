import React, { Component } from "react";
import { Container, Image, Card, Button } from "react-bootstrap";
import "./Vendor.css";

class Vendor extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { specials, weekday } = this.props;

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

    const vendorSpecials = specials.filter(
      special => special.vendor === vendor
    );

    const monday = vendorSpecials.filter(special => special.day === "Monday");
    const tuesday = vendorSpecials.filter(special => special.day === "Tuesday");
    const wednesday = vendorSpecials.filter(
      special => special.day === "Wednesday"
    );
    const thursday = vendorSpecials.filter(
      special => special.day === "Thursday"
    );
    const friday = vendorSpecials.filter(special => special.day === "Friday");
    const saturday = vendorSpecials.filter(
      special => special.day === "Saturday"
    );
    const sunday = vendorSpecials.filter(special => special.day === "Sunday");

    const availableSpecials = [
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday
    ].filter(eachDay => eachDay.length > 0);

    const daysList = availableSpecials.map(eachDay => [].push(eachDay[0].day));

    console.log(daysList);

    const specialsList = availableSpecials.map((eachDay, index) =>
      eachDay.map((special, index) => {
        let ifButtonAvailable = false;

        if (special.day.toLowerCase() === weekday) ifButtonAvailable = true;

        let button = (
          <Button variant="success" block>
            Book Now
          </Button>
        );
        if (!ifButtonAvailable)
          button = (
            <Button variant="dark" block disabled>
              Book Now
            </Button>
          );

        if (index === 0)
          return (
            <>
              <br />
              <h4>
                <strong>{special.day}</strong>
              </h4>
              <br />
              <Card>
                <Card.Header>{special.name}</Card.Header>
                <Card.Body>
                  <Card.Text>{special.descrip}</Card.Text>
                  {button}
                </Card.Body>
              </Card>
              <br />
            </>
          );
        else
          return (
            <>
              <Card>
                <Card.Header>{special.name}</Card.Header>
                <Card.Body>
                  <Card.Text> {special.descrip}</Card.Text>
                  {button}
                </Card.Body>
              </Card>
              <br />
            </>
          );
      })
    );

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
        <h2 className="vendor-descrip">
          <strong>Specials at {vendor}</strong>
        </h2>
        <br />
        {specialsList}
      </Container>
    );
  }
}

export default Vendor;
