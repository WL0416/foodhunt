import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class TodayOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      specials: []
    };
  }

  render() {
    return (
      <Container>
        <Row>
          <h1 />
        </Row>
      </Container>
    );
  }
}

export default TodayOverview;
