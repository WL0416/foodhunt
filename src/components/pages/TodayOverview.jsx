import React, { Component } from "react";

class TodayOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      specials: []
    };
  }

  render() {
    return <h1>Overview Page</h1>;
  }
}

export default TodayOverview;