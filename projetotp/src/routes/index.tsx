import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "../pages/Main";
import About from "../pages/About";
import Devs from "../pages/Devs";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/about" component={About} />
    <Route path="/devs" component={Devs} />
  </Switch>
);

export default Routes;
