import React from "react";
import classes from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <Link to="/">
            <li>
              <a href="/">Patient</a>
            </li>
          </Link>
        )}
        {props.isLoggedIn && (
          <Link to="./page/doctorpage">
            <li>
              <a href="/">Doctor</a>
            </li>
          </Link>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
