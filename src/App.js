import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Provider, { Consumer } from "./context";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import AddSpecial from "./components/pages/AddSpecial";
import TodayOverview from "./components/pages/TodayOverview";
import VenuesList from "./components/pages/VenuesList";
import Vendor from "./components/pages/Vendor";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";

class App extends Component {
  render() {
    return (
      <Provider>
        <Consumer>
          {value => {
            const { specials, weekday } = value;

            const routers = specials.map(special => (
              <Route
                key={special.id}
                exact
                path={`/${special.vendor}`}
                component={() => (
                  <Vendor
                    specials={specials.filter(special => special.vendor)}
                    special={special}
                  />
                )}
              />
            ));

            return (
              <Router>
                <div className="App">
                  <Header branding="Food Hunt" />
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/venues" component={VenuesList} />
                    <Route
                      exact
                      path="/today"
                      component={() => (
                        <TodayOverview specials={specials} weekday={weekday} />
                      )}
                    />
                    <Route exact path="/addspecial" component={AddSpecial} />
                    {routers}
                  </Switch>
                  <ScrollUpButton
                    style={{ backgroundColor: "rgb(221,97,66)" }}
                  />
                  <Footer />
                </div>
              </Router>
            );
          }}
        </Consumer>
      </Provider>
    );
  }
}

export default App;
