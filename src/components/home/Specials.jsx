import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { List } from "semantic-ui-react";

class SpecialPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weekday: "",
      specials: []
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
            <List selection verticalAlign="middle">
              <List.Item>
                <List.Content>
                  <List.Header>test1</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>test2</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>test3</List.Header>
                </List.Content>
              </List.Item>
            </List>
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }
}

export default SpecialPrice;
