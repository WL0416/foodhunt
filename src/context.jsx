import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

class Provider extends Component {
  state = {
    specials: [],
    specialsDate: [],
    specialsRate: [],
    weekday: "",
    weekinfo: {
      monday: 0,
      tuesday: 0,
      wednesday: 0,
      thursday: 0,
      friday: 0,
      saturday: 0,
      sunday: 0
    },
    continentinfo: {
      australia: 0,
      asia: 0,
      africa: 0,
      europe: 0,
      northamerica: 0,
      southamerica: 0,
      antarctica: 0
    },
    types: {
      parma: 0,
      pizza: 0,
      noodle: 0,
      steak: 0,
      burger: 0,
      pie: 0,
      fishchips: 0
    }
  };

  async componentDidMount() {
    const res = await axios.get(
      "https://my-json-server.typicode.com/wl0416/JSONapi/specials/"
    );

    const specials = res.data;

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
      .toUpperCase();

    this.setState({
      specials: res.data,
      specialsDate: specialsDate,
      specialsRate: specialsRate,
      weekday: day
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
