import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Consumer } from "../../context";

class Categories extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { specials } = value;
          return (
            <Container>
              <Row>
                <Col>
                  <h5 className="cate-title">Weekdays</h5>
                  <ul className="cate-list">
                    <li>
                      <a href="/">Monday(0)</a>
                    </li>
                    <li>
                      <a href="/">Tuesdy(0)</a>
                    </li>
                    <li>
                      <a href="/">Wednesday(0)</a>
                    </li>
                    <li>
                      <a href="/">Thursday(0)</a>
                    </li>
                    <li>
                      <a href="/">Friday(0)</a>
                    </li>
                    <li>
                      <a href="/">Saturday(0)</a>
                    </li>
                    <li>
                      <a href="/">Sunday(0)</a>
                    </li>
                  </ul>
                </Col>
                <Col>
                  <h5 className="block-title">Countries</h5>
                </Col>
                <Col>
                  <h5 className="block-title">Types</h5>
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
