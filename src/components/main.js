import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import AboutMe from "./aboutme";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";
import Portfolio from "./portfolio";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/resume" component={Resume} />
  </Switch>
);

class App extends React.Component {}

export default Main;
