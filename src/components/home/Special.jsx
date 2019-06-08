import React, { Component } from "react";
import PropTypes from "prop-types";
import { List, Image } from "semantic-ui-react";
import { Container, Row, Col } from "react-bootstrap";
import star from "../../images/star.png";
import { Link } from "react-router-dom";
import "./Special.css";

class Special extends Component {
  render() {
    const {
      address,
      name,
      price,
      suburb,
      postcode,
      vendor,
      id
    } = this.props.special;
    return (
      <Link to={`/${vendor}`} key={id} className="speciala">
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
      </Link>
    );
  }
}

class SpecialRate extends Component {
  render() {
    const {
      address,
      name,
      rate,
      suburb,
      postcode,
      vendor,
      id
    } = this.props.special;

    return (
      <Link to={`/${vendor}`} key={id} className="speciala">
        <List.Item>
          <Container>
            <Row>
              <Col md={2} className="specialcol">
                <List.Content>
                  <Image src={star} className="star" />
                  {rate}
                </List.Content>
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
      </Link>
    );
  }
}

Special.propTypes = {
  special: PropTypes.object.isRequired
};

SpecialRate.propTypes = {
  special: PropTypes.object.isRequired
};

export default Special;
export const Rate = SpecialRate;
