import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { List } from "semantic-ui-react";
import Special, { Rate } from "./Special";
import { Consumer } from "../../context";

class Specials extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { specialsDate, specialsRate, weekday } = value;
          return (
            <div className="rate-block">
              <Container>
                <Row>
                  <Col>
                    <h5 className="block-title">
                      <strong>RECENTLY ADDED {weekday} SPECIALS</strong>
                    </h5>
                    <List selection verticalAlign="middle">
                      {specialsDate.map(special => (
                        <Special key={special.id} special={special} />
                      ))}
                    </List>
                  </Col>
                  <Col>
                    <h5 className="block-title">
                      <strong>TOP RATE SPECIALS</strong>
                    </h5>
                    <List selection verticalAlign="middle">
                      {specialsRate.map(special => (
                        <Rate key={special.id} special={special} />
                      ))}
                    </List>
                  </Col>
                </Row>
              </Container>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Specials;
