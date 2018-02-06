import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/pages/Landing/Landing";
import Home from "./components/pages/Home/Home";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/home" component={Home} />
  </Switch>
);

export default Routes;
