import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

class SpecialPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weekday: ""
    };
  }

  componentDidMount() {
    const now = new Date();
    const day = now
      .toLocaleDateString("default", { weekday: "long" })
      .toUpperCase();

    this.setState({
      weekday: day
    });
  }

  render() {
    const { weekday } = this.state;

    return (
      <Container>
        <Row>
          <Col>
            <h5>RECENTLY ADDED {weekday} SPECIALS</h5>
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }
}

export default SpecialPrice;
