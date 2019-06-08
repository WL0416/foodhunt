import React, { Component } from "react";
import { Container, Row, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyCard from "../util/MyCard";

class TodayOverview extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { specials, weekday } = this.props;

    const todaySpecials = specials.filter(
      special => special.day.toLowerCase() === weekday.toLowerCase()
    );

    const todaySpecialCards = todaySpecials.map(special => (
      <Link to={`/${special.vendor}`} key={special.id} className="overview-a">
        <MyCard
          img={special.image}
          title={special.name}
          text={special.descrip}
          updateinfo="Last update 1 min ago"
        />
      </Link>
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
  }
}

export default TodayOverview;
