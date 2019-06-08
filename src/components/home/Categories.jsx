import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Category from "./Category";
import { Consumer } from "../../context";
import "./Categories.css";

class Categories extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { weekinfo, continentinfo, types } = value;

          const weekdays = Object.keys(weekinfo);

          const listWeekdays = weekdays.map((weekday, index) => (
            <Category
              key={index}
              category={weekday}
              quantity={weekinfo[weekday]}
            />
          ));

          const continents = Object.keys(continentinfo);

          const listContinents = continents.map((continent, index) => (
            <Category
              key={index}
              category={continent}
              quantity={continentinfo[continent]}
            />
          ));

          const newTypes = Object.keys(types);

          const listTypes = newTypes.map((type, index) => (
            <Category key={index} category={type} quantity={types[type]} />
          ));

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
