import React from "react";
import { Route, Switch } from "react-router-dom";
import Index from '../index'

export default () => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        component={Index} />}
      />
      <Route
        path="/main"
        exact
        component={Index} />}
      />
    </Switch>
  );
};