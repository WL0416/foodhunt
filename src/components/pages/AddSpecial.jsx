import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class AddSpecial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      specials: []
    };
  }

  render() {
    const weekdays = [
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
      "SUNDAY"
    ];

    const types = [
      "PINTS",
      "PARMA",
      "PIZZA",
      "STRAK",
      "CURRY",
      "BREAKFAST",
      "BURGER",
      "PIE",
      "TRIVIA",
      "FISH AND CHIPS",
      "ROAST",
      "JUGS",
      "TACOS",
      "HAPPY HOUR",
      "POKER",
      "COMEDY",
      "LUNCH SPECIALS",
      "BINGO"
    ];
    return (
      <Container>
        <Row>
          <h1>Add a New Special</h1>
        </Row>
        <Row>
          <p>Feel free to submit a new special with the form below.</p>
        </Row>
        <Row>
          <h3>Venue info (we may have it in our database already)</h3>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formGroupVenue">
                <Form.Label>VENUE</Form.Label>
                <Form.Control type="text" placeholder="VENUE NAME" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formGroupAddress">
                <Form.Label>ADDRESS</Form.Label>
                <Form.Control type="text" placeholder="STREET ADDRESS" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group controlId="formGroupWebsite">
                <Form.Label>WEBSITE</Form.Label>
                <Form.Control type="url" placeholder="WEBSITE URL" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formGroupSuburb">
                <Form.Label>SUBURB</Form.Label>
                <Form.Control type="text" placeholder="SUBURB" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group controlId="formGroupPostcode">
                <Form.Label>POST CODE</Form.Label>
                <Form.Control type="number" placeholder="POST CODE" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group controlId="formGroupPhone">
                <Form.Label>PHONE</Form.Label>
                <Form.Control type="number" placeholder="PHONE NUMBER" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <h3>Special Info</h3>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formGroupName">
                <Form.Label>NAME</Form.Label>
                <Form.Control type="text" placeholder="SPECIAL NAME" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formGroupPrice">
                <Form.Label>PRICE</Form.Label>
                <Form.Control type="number" placeholder="SPECIAL PRICE" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formGroupWeekdays">
                <Form.Label>WHICH DAY(S)</Form.Label>
                <br />
                {weekdays.map(weekday => (
                  <Form.Check
                    inline
                    type="checkbox"
                    id={`${weekday}`}
                    label={`${weekday}`}
                  />
                ))}
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formGroupType">
                <Form.Label>ADD TYPE</Form.Label>
                <br />
                {types.map(type => (
                  <Form.Check
                    inline
                    type="checkbox"
                    id={`${type}`}
                    label={`${type}`}
                  />
                ))}
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formGroupDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" placeholder="TELL US ABOUT IT!" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <br />
        <Row>
          <Col />
          <Col>
            <Button
              as="input"
              type="submit"
              value="SUBMIT"
              variant="danger"
              size="lg"
              block
            />
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }
}

export default AddSpecial;
