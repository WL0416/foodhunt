import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { List } from "semantic-ui-react";
import Special, { Rate } from "./Special";
import { Consumer } from "../../context";

class Specials extends Component {
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
      <Consumer>
        {value => {
          const { specialsPrice, specialsRate } = value;
          return (
            <div className="rate-block">
              <Container>
                <Row>
                  <Col>
                    <h5 className="block-title">
                      <strong>RECENTLY ADDED {weekday} SPECIALS</strong>
                    </h5>
                    <List selection verticalAlign="middle">
                      {specialsPrice.map(special => (
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
