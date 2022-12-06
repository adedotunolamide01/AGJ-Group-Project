import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Doctornav = (props) => {
  return (
    <header className="main-header">
      <h1>Health Management App</h1>
      <nav className="nav">
        <ul>
          <Link to="./frontpage">
            <li>Home</li>
          </Link>
          <Link to="/medicalhistory">
            <li>Medical History</li>
          </Link>
          <Link to="/appointment">
            <li>Appointment</li>
          </Link>
          <Link to="/prescription">
            <li>Prescription</li>
          </Link>
          <Link to="/healthinfo">
            <li>Health Info.</li>
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
