import React, { Component } from "react";
import { Container, Row, CardDeck } from "react-bootstrap";
import { Consumer } from "../../context";
import MyCard from "../util/MyCard";
import image from "../../vendors/locanda-restaurant-bar.jpg";

class TodayOverview extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { specials, weekday } = value;

          const todaySpecials = specials.filter(
            special => special.day.toLowerCase() === weekday.toLowerCase()
          );

          const todaySpecialCards = todaySpecials.map(special => (
            <a key={special.id} className="overview-a" href="/">
              <MyCard
                img={image}
                title={special.name}
                text={special.descrip}
                updateinfo="Last update 1 min ago"
              />
            </a>
          ));

          return (
            <Container>
              <br />
              <Row>
                <h1>{weekday} Specials</h1>
              </Row>
              <Row>
                <br />
                <p>The best {weekday} eats and specials</p>
              </Row>
              <Row>
                <CardDeck>{todaySpecialCards}</CardDeck>
              </Row>
            </Container>
          );
        }}
      </Consumer>
    );
  }
}

export default TodayOverview;
