import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Button, Modal, Form, Col, FormLabel } from "react-bootstrap";
import { FormGroup } from "semantic-ui-react";
import "./VendorCard.css";

class VendorCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formShow: false,
      resultShow: false
    };

    this.handleShow = () => {
      this.setState({ formShow: true });
    };

    this.handleHide = () => {
      this.setState({ formShow: false });
    };

    this.handleResult = () => {
      this.setState({ resultShow: true, formShow: false });
    };

    this.handleResultHide = () => {
      this.setState({ resultShow: false });
    };
  }

  render() {
    const { ifButtonAvailable, special } = this.props;

    let button = (
      <Button variant="success" block onClick={this.handleShow}>
        Order Now
      </Button>
    );

    if (!ifButtonAvailable) {
      button = (
        <Button variant="dark" block disabled>
          Order Now
        </Button>
      );
    }
    return (
      <>
        <Card>
          <Card.Header>{special.name}</Card.Header>
          <Card.Body>
            <Card.Text>{special.descrip}</Card.Text>
            {button}
          </Card.Body>
        </Card>

        <Modal
          show={this.state.formShow}
          onHide={this.handleHide}
          dialogClassName="modal-90w"
          aria-labelledby="example"
          centered="true"
        >
          <Modal.Header id="popupTitle">
            <Modal.Title id="example">
              Order {special.name} at {special.vendor}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <FormGroup as={Col} controlId="formGridPhone">
                  <FormLabel>Phone</FormLabel>
                  <Form.Control
                    type="number"
                    placeholder="Enter Phone number"
                  />
                </FormGroup>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                  <FormLabel>Name</FormLabel>
                  <Form.Control placeholder="Enter your name here" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridTime">
                  <FormLabel>Arriving Time</FormLabel>
                  <Form.Control as="select">
                    <option value="1200pm">12:00 pm</option>
                    <option value="1230pm">12:30 pm</option>
                    <option value="0100pm">01:00 pm</option>
                    <option value="0130pm">01:30 pm</option>
                    <option value="0200pm">02:00 pm</option>
                    <option value="0230pm">02:30 pm</option>
                    <option value="0300pm">03:00 pm</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Button variant="success" onClick={this.handleResult}>
                Submit{" "}
              </Button>
              <Button variant="danger" onClick={this.handleHide}>
                Cancel
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        <Modal
          show={this.state.resultShow}
          onHide={this.handleResultHide}
          dialogClassName="modal-90w"
          aria-labelledby="example"
          centered="true"
        >
          <Modal.Header id="popupTitle">
            <Modal.Title id="example">
              Order {special.name} at {special.vendor}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button variant="success" onClick={this.handleResultHide} block>
              SUCCESSFULLY SUBMITTED !!!
            </Button>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

VendorCard.propTypes = {
  ifButtonAvailable: PropTypes.bool.isRequired,
  special: PropTypes.object.isRequired
};

export default VendorCard;
