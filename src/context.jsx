import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

class Provider extends Component {
  state = {
    vendors: []
  };

  async componentDidMount() {
    const res = await axios.get(
      "https://my-json-server.typicode.com/wl0416/JSONapi/vendors/"
    );

    this.setState({ vendors: res.data });
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
