import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { List } from "semantic-ui-react";
import Special, {Rate} from "./Special";
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
            <Container>
              <Row>
                <Col>
                  <h5>RECENTLY ADDED {weekday} SPECIALS</h5>
                  <List selection verticalAlign="middle">
                    {specialsPrice.map(special => (
                      <Special key={special.id} special={special} />
                    ))}
                  </List>
                </Col>
                <Col>
                  <h5>TOP RATE SPECIALS</h5>
                  <List selection verticalAlign="middle">
                    {specialsRate.map(special => (
                      <Rate key={special.id} special={special} />
                    ))}
                  </List>
                </Col>
              </Row>
            </Container>
          );
        }}
      </Consumer>
    );
  }
}

export default Specials;
