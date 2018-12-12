import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "../containers/App/index";

export const Router = () => {
  return(
    <Switch>
      <Route path="/" exact component={App} />} />
    </Switch>
  )
};
