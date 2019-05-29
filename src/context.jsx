import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

class Provider extends Component {
  state = {
    specials: [],
    specialsPrice: [],
    specialsRate: [],
    weekinfo: {
      monday: 0,
      tuesday: 0,
      wednesday: 0,
      thursday: 0,
      friday: 0,
      saturday: 0,
      sunday: 0
    }
  };

  async componentDidMount() {
    const res = await axios.get(
      "https://my-json-server.typicode.com/wl0416/JSONapi/specials/"
    );

    const specials = res.data;

    console.log(specials);

    const specialsPrice = specials.sort(function(a, b) {
      return a.date - b.date;
    });
    console.log(specialsPrice.reverse());

    const specialsRate = specials.sort(function(a, b) {
      return a.rate - b.rate;
    });
    console.log(specialsRate.reverse());

    this.setState({
      specials: res.data,
      specialsPrice: specialsPrice,
      specialsRate: specialsRate
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
