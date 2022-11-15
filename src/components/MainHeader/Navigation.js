import React from "react";
import classes from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <Link to="./frontpage">
            <li>
              <a href="./frontpage">Home</a>
            </li>
          </Link>
        )}
        {props.isLoggedIn && (
          <Link to="/">
            <li>
              <a href="/">Medical History</a>
            </li>
          </Link>
        )}
        {props.isLoggedIn && (
          <Link to="./">
            <li>
              <a href="./">Appointment</a>
            </li>
          </Link>
        )}
        {props.isLoggedIn && (
          <Link to="./">
            <li>
              <a href="./">Prescription</a>
            </li>
          </Link>
        )}
        {props.isLoggedIn && (
          <Link to="./">
            <li>
              <a href="./">Health Info.</a>
            </li>
          </Link>
        )}
        {props.isLoggedIn && (
          <Link to="./doctorpage">
            <li>
              <a href="./doctorpage">Doctor</a>
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
