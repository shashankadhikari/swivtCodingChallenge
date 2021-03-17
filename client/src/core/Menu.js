import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAutheticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "yellow" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Menu = ({ history }) => (
  <div>
    <div className="navbar-fixed">
      <nav className="blue">
        <div className="container">
          <div className="nav-wrapper">
            <Link className="brand-logo" to="/">
              FindWeather
            </Link>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link
                  style={currentTab(history, "/")}
                  className="nav-link"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {isAutheticated() && (
                <li>
                  <Link
                    style={currentTab(history, "/user/dashboard")}
                    className="nav-link"
                    to="/user/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
              )}
              
              {!isAutheticated() && (
                <Fragment>
                  <li>
                    <Link
                      style={currentTab(history, "/signup")}
                      className="nav-link"
                      to="/signup"
                    >
                      Signup
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={currentTab(history, "/signin")}
                      className="nav-link"
                      to="/signin"
                    >
                      Sign In
                    </Link>
                  </li>
                </Fragment>
              )}
              {isAutheticated() && (
                <li>
                <Link
                  className="nav-link"
                  onClick={() => {
                    signout(() => {
                      history.push("/");
                    });
                  }}
                >
                  Signout
                </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
);

export default withRouter(Menu);
