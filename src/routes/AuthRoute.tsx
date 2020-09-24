import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
//
import { useAuth } from "../context/authContext";

interface AuthRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

// This component extends funcionality from the base Route from react-router-dom

const AuthRoute: React.FC<AuthRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) => {
        // This comparison looks odd, but basically if the route is private and
        // there is a user, it should return the original component, and if
        // its not private and there is no user, it also must return the original
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              // If there is a user and the route is not private, must redirect
              // to the dashboard, but if it is private and there is no user,
              // the right thing is to redirect to login
              pathname: isPrivate ? "/" : "/dashboard",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default AuthRoute;
