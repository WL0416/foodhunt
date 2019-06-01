import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Provider from "./context";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import AddSpecial from "./components/pages/AddSpecial";
import TodayOverview from "./components/pages/TodayOverview";
import VenuesOverview from "./components/pages/VenuesOverview";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Food Hunt" />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="venues" component={VenuesOverview} />
              <Route exact path="/today" component={TodayOverview} />
              <Route exact path="/addspecial" component={AddSpecial} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
