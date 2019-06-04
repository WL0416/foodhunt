import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Consumer } from "../../context";
import Category from "./Category";
import "./Categories.css";

class Categories extends Component {
  render() {
    const weekdays = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];
    const listWeekdays = weekdays.map(weekday => (
      <Category category={weekday} quantity="0" />
    ));

    const continents = [
      "Australia",
      "Asia",
      "Africa",
      "Europe",
      "North America",
      "South America",
      "Antarctica"
    ];
    const listContinents = continents.map(continent => (
      <Category category={continent} quantity="0" />
    ));

    const types = [
      "Parma",
      "Pizza",
      "Noodle",
      "Steak",
      "Burger",
      "Pie",
      "Fish and Chips"
    ];
    const listTypes = types.map(type => (
      <Category category={type} quantity="0" />
    ));

    return (
      <Consumer>
        {value => {
          const { specials } = value;
          return (
            <Container>
              <Row>
                <Col className="cate-col">
                  <h5 className="cate-title">Weekdays</h5>
                  {listWeekdays}
                </Col>
                <Col className="cate-col">
                  <h5 className="cate-title">Continents</h5>
                  {listContinents}
                </Col>
                <Col className="cate-col">
                  <h5 className="cate-title">Types</h5>
                  {listTypes}
                </Col>
              </Row>
            </Container>
          );
        }}
      </Consumer>
    );
  }
}

export default Categories;
