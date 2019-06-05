import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

class MyCard extends Component {
  render() {
    const { img, title, text, updateinfo } = this.props;

    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={require("../../vendors/" + img)} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
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
