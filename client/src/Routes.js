import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import Weather from "./weather/Weather"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
        <PrivateRoute path="/weather" exact component={Weather} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
