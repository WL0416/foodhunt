import React, { Component } from "react";

class AddSpecial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      specials: []
    };
  }

  render() {
    return <h1>Add Specials</h1>;
  }
}

export default AddSpecial;
