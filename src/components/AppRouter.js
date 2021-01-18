import React, { useContext } from "react";
import { privateRoutes, publicRoutes } from "../routes";
import { Route, Redirect, Switch } from "react-router-dom";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/constants";
import { Context } from "..";
import { useAuthState } from "react-firebase-hooks/auth";

const AppRouter = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  const isPrivate = !!user;

  return isPrivate ? (
    <Switch>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact></Route>
      ))}
      <Redirect to={CHAT_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact></Route>
      ))}
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
