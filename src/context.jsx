import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

class Provider extends Component {
  state = {
    specials: [],
    specialsDate: [],
    specialsRate: [],
    weekday: "",
    weekinfo: {},
    continentinfo: {},
    types: {},
    venues: {}
  };

  async componentDidMount() {
    const res = await axios.get(
      "https://my-json-server.typicode.com/wl0416/JSONapi/db/"
    );

    const specials = res.data.specials;
    const weekinfo = res.data.quantity.weekdays;
    const continentinfo = res.data.quantity.continents;
    const types = res.data.quantity.types;
    const venues = res.data.venues;

    const specialsDate = specials
      .sort(function(a, b) {
        return a.date - b.date;
      })
      .slice(0, 7);

    const specialsRate = specials
      .sort(function(a, b) {
        return a.rate - b.rate;
      })
      .reverse()
      .slice(0, 7);

    // get local time
    const now = new Date();
    const day = now
      .toLocaleDateString("default", { weekday: "long" })
      .toLowerCase();

    this.setState({
      specials: specials,
      specialsDate: specialsDate,
      specialsRate: specialsRate,
      weekday: day,
      weekinfo: weekinfo,
      continentinfo: continentinfo,
      types: types,
      venues: venues
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
export const Consumer = Context.Consumer;
