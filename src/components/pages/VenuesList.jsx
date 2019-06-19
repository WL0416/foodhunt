import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";
import "./VenuesList.css";

class VenuesList extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { venues } = this.props;

    const venueNames = Object.keys(venues);

    const venuesList = venueNames.map((venue, index) => (
      <Row key={index} className="venues-row">
        <strong>
          {venue}:{venues[index]}
        </strong>
      </Row>
    ));

    return (
      <Container>
        <br />
        <Row className="venues-row">
          <h1>Pubs and restaurants in Melbourne</h1>
        </Row>
        {venuesList}
      </Container>
    );
  }
}

VenuesList.propTypes = {
  venues: PropTypes.object.isRequired
};

export default VenuesList;
