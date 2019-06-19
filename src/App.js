import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Provider, { Consumer } from "./context";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import AddSpecial from "./components/pages/AddSpecial";
import TodayOverview, {
  ContinentOverview,
  TypesOverview
} from "./components/pages/TodayOverview";
import VenuesList from "./components/pages/VenuesList";
import Vendor from "./components/pages/Vendor";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";

class App extends Component {
  render() {
    return (
      <Provider>
        <Consumer>
          {value => {
            const {
              specials,
              weekday,
              weekinfo,
              continentinfo,
              types,
              venues
            } = value;

            const vendorRouters = specials.map(special => (
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

            const weekdayRouters = Object.keys(weekinfo).map(
              (weekday, index) => (
                <Route
                  key={index}
                  exact
                  path={`/${weekday}`}
                  component={() => (
                    <TodayOverview specials={specials} weekday={weekday} />
                  )}
                />
              )
            );

            const continentRouters = Object.keys(continentinfo).map(
              (continent, index) => (
                <Route
                  key={index}
                  exact
                  path={`/${continent}`}
                  component={() => (
                    <ContinentOverview
                      specials={specials}
                      continent={continent}
                    />
                  )}
                />
              )
            );

            const typeRouters = Object.keys(types).map((type, index) => (
              <Route
                key={index}
                exact
                path={`/${type}`}
                component={() => (
                  <TypesOverview specials={specials} type={type} />
                )}
              />
            ));

            return (
              <Router>
                <div className="App">
                  <Header branding="Food Hunt" weekday={weekday} />
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route
                      exact
                      path="/venues"
                      component={() => <VenuesList venues={venues} />}
                    />
                    <Route exact path="/addspecial" component={AddSpecial} />
                    {weekdayRouters}
                    {vendorRouters}
                    {continentRouters}
                    {typeRouters}
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
