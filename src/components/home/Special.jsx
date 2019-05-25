import React, { Component } from "react";
import PropTypes from "prop-types";
// import { Consumer } from "../../context";
// import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";
import { Container, Row, Col } from "react-bootstrap";
import "./Special.css";

class Special extends Component {
  render() {
    const { address, name, price, suburb, postcode } = this.props.special;
    return (
      <a className="speciala" href="/">
        <List.Item>
          <Container>
            <Row>
              <Col md={2} className="specialcol">
                <List.Content>${price}</List.Content>
              </Col>
              <Col md={10}>
                <List.Content>
                  <List.Header>{name}</List.Header>
                  <List.Description>
                    {address} {suburb} {postcode}
                  </List.Description>
                </List.Content>
              </Col>
            </Row>
          </Container>
        </List.Item>
      </a>
    );
  }
}

Special.propTypes = {
  special: PropTypes.object.isRequired
};

export default Special;
