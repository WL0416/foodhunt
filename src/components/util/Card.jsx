import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap";

class Card extends Component {
  render() {
    const { img, title, text, updateinfo } = this.props;

    return (
      <Card>
        <Card.Img variant="top" src={img} />
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

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  updateinfo: PropTypes.string.isRequired
};

export default Card;
