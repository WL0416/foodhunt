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
        <br />
      </Link>
    ));

    return (
      <Container>
        <br />
        <Row>
          <h1>{weekday.toUpperCase()} Specials</h1>
        </Row>
        <Row>
          <br />
          <p>The best {weekday.toUpperCase()} eats and specials</p>
        </Row>
        <Row>
          <CardDeck>{todaySpecialCards}</CardDeck>
        </Row>
      </Container>
    );
  }
}

class ContinentOverview extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { specials, continent } = this.props;

    const continentSpecials = specials.filter(
      special => special.continent.toLowerCase() === continent.toLowerCase()
    );

    const continentSpecialCards = continentSpecials.map(special => (
      <Link to={`/${special.vendor}`} key={special.id} className="overview-a">
        <MyCard
          img={special.image}
          title={special.name}
          text={special.descrip}
          updateinfo="Last update 1 min ago"
        />
        <br />
      </Link>
    ));

    return (
      <Container>
        <br />
        <Row>
          <h1>{continent.toUpperCase()} Specials</h1>
        </Row>
        <Row>
          <br />
          <p>The best {continent.toUpperCase()} eats and specials</p>
        </Row>
        <Row>
          <CardDeck>{continentSpecialCards}</CardDeck>
        </Row>
      </Container>
    );
  }
}

class TypesOverview extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { specials, type } = this.props;

    const typeSpecials = specials.filter(
      special => special.type.toLowerCase() === type.toLowerCase()
    );

    const typeSpecialCards = typeSpecials.map(special => (
      <Link to={`/${special.vendor}`} key={special.id} className="overview-a">
        <MyCard
          img={special.image}
          title={special.name}
          text={special.descrip}
          updateinfo="Last update 1 min ago"
        />
        <br />
      </Link>
    ));

    return (
      <Container>
        <br />
        <Row>
          <h1>{type.toUpperCase()} Specials</h1>
        </Row>
        <Row>
          <br />
          <p>The best {type.toUpperCase()} eats and specials</p>
        </Row>
        <Row>
          <CardDeck>{typeSpecialCards}</CardDeck>
        </Row>
      </Container>
    );
  }
}

export default TodayOverview;
export { ContinentOverview, TypesOverview };
