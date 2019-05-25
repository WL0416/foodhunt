import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";

class Special extends Component {
  render() {
    const { id, name, address, price } = this.props.special;
    return (
      <List.Item>
        <List.Content />
      </List.Item>
    );
  }
}
