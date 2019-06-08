import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import "./VenuesList.css";

class VenuesList extends Component {
  render() {
    const venues = [
      "Abbortsford",
      "Albert Park",
      "Ascot Vale",
      "Balaclava",
      "Bentleigh East",
      "Berwick",
      "Blackburn",
      "Boronia",
      "Box Hill",
      "Brighton",
      "Brighton Beach",
      "Brunswick",
      "Brunswick East",
      "Brunswick West",
      "Camberwell",
      "Carlton",
      "Carlton North",
      "Carnegie",
      "Caulfield",
      "Clayton",
      "Clifton Hill",
      "Coburg",
      "Collingwood",
      "Dandenong",
      "Docklands",
      "Elsternwick",
      "Elwood",
      "Essendon",
      "Essendon North",
      "Fitzroy",
      "Fitzroy North",
      "Flemington",
      "Footscray",
      "Geelong",
      "Harrow",
      "Hawthorn",
      "Hawthorn East",
      "Kew",
      "Lilydale",
      "Malven",
      "Malvern East",
      "Maribyrnong",
      "McKinnon",
      "Melbourne CBD",
      "Menton",
      "Middle Park",
      "Moonee Ponds",
      "Moorabbin",
      "Mornington",
      "Mulgrave",
      "Newport",
      "North Carlton",
      "North Melbourne",
      "Northcote",
      "Notting Hill",
      "Parkville",
      "Point Cook",
      "Port Melbourne",
      "Prahran",
      "Preston",
      "Reservior",
      "Richmond",
      "Ringwood",
      "Sandringham",
      "Seddon",
      "South Melbourne",
      "South Wharf",
      "South Yarra",
      "Southbank",
      "Spotswood",
      "St Kilda",
      "St Kilda East",
      "Sunbury",
      "Thornbury",
      "Toorak",
      "Tullamarine",
      "Warrandyte",
      "Wesr Melbourne",
      "Williamstown",
      "Windsor",
      "Yarraville"
    ];

    const venuesList = venues.map((venue, index) => (
      <Row key={index} className="venues-row">
        {venue}
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

export default VenuesList;
