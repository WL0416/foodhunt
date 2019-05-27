import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

class Provider extends Component {
  state = {
    specials: [],
    specialsPrice: [],
    specialsRate: []
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
    console.log(specialsRate);

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
