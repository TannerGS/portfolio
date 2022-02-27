import React, { Fragment } from "react";
import Media from 'react-media';
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import Resume from "./components/Resume";
import NavbarCollapsed from "./components/NavbarCollapsed";
import NavbarExpanded from "./components/NavbarExpanded";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Media queries={{
          medium: "(max-width: 1455px)",
          large: "(min-width: 1455px)"
        }}>
          {matches => (
            <Fragment>
              {matches.medium && <NavbarCollapsed />}
              {matches.large && <NavbarExpanded />}
            </Fragment>
          )}
      </Media>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
