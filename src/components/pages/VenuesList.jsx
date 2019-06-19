import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./VenuesList.css";

class VenuesList extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { venues } = this.props;

    const venueNames = Object.keys(venues);

    const venuesList = venueNames.map((area, index) => (
      <>
        <Row key={index} className="venues-row">
          <strong>{area.toUpperCase()}</strong>
        </Row>
        <Row key={area} className="venue-content">
          {Object.keys(venues[area]).map(venue => (
            <Link to={`/${venue}`}>
              {venue}({venues[area][venue]})
            </Link>
          ))}
        </Row>
      </>
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
