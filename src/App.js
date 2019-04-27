import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/layout/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Food Hunt" />
        <div className="container" />
      </div>
    );
  }
}

export default App;
