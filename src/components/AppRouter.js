import React from "react";
import { privateRoutes, publicRoutes } from "../routes";
import { Route, Redirect, Switch } from "react-router-dom";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/constants";

const AppRouter = () => {
  const isPrivate = true;
  return isPrivate ? (
    <Switch>
      {privateRoutes.map(({ path, Component }) => (
        <Route path={path} component={Component} exact></Route>
      ))}
      <Redirect to={CHAT_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route path={path} component={Component} exact></Route>
      ))}
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
