import React from "react";
import { Switch } from "react-router-dom";
//
import AuthRoute from "../routes/AuthRoute";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import ForgotPasswd from "../pages/ForgotPasswd";
import ResetPasswd from "../pages/ResetPasswd";

const Routes: React.FC = () => (
  <Switch>
    <AuthRoute exact path="/" component={SignIn} />
    <AuthRoute path="/signup" component={SignUp} />
    <AuthRoute path="/passwd-forgot" component={ForgotPasswd} />
    <AuthRoute path="/passwd-reset/:tokenId" component={ResetPasswd} />

    <AuthRoute path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
