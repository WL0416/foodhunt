import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Provider from "./context";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import AddSpecial from "./components/pages/AddSpecial";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Food Hunt" />
            <div className="container-fluid">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="./AddSpecial" component={AddSpecial} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
