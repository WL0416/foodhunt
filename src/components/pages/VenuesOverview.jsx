import React, { Component } from "react";

class VenuesOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: []
    };
  }

  render() {
    return <h1>Overview Page</h1>;
  }
}

export default VenuesOverview;
