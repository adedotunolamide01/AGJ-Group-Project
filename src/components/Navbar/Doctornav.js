import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Doctornav = (props) => {
  return (
    <header className="main-header">
      <h1>Health Management App</h1>
      <nav className="nav">
        <ul>
          <Link to="./">
            <li>
              <a href="./">Home</a>
            </li>
          </Link>
          <Link to="./">
            <li>
              <a href="./">Medical History</a>
            </li>
          </Link>
          <Link to="./">
            <li>
              <a href="./">Appointment</a>
            </li>
          </Link>
          <Link to="./">
            <li>
              <a href="./">Prescription</a>
            </li>
          </Link>
          <Link to="./doctorpage">
            <li>
              <a href="./doctorpage">Doctor</a>
            </li>
          </Link>

          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Doctornav;
