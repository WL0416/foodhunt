import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header branding="Food Hunt" />
          <div className="container">
            <Home />
            <Switch>
              <Router exact path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
