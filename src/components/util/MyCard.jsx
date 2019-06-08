import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

class MyCard extends Component {
  render() {
    const { img, title, text, updateinfo } = this.props;

    const chunkText = text.match(new RegExp(".{1," + 90 + "}", "g"));

    return (
      <Card style={{ width: "22rem" }}>
        <Card.Img variant="top" src={require("../../images/vendors/" + img)} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{chunkText[0]}...</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{updateinfo}</small>
        </Card.Footer>
      </Card>
    );
  }
}

MyCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  updateinfo: PropTypes.string.isRequired
};

export default MyCard;
