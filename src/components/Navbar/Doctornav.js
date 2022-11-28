import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Doctornav = (props) => {
  return (
    <header className="main-header">
      <h1>Health Management App</h1>
      <nav className="nav">
        <ul>
          <Link to="../">
            <li>
              <a href="../frontpage">Home</a>
            </li>
          </Link>
          <Link to="../medicalhistory">
            <li>
              <a href="../medicalhistory">Medical History</a>
            </li>
          </Link>
          <Link to="/appointment">
            <li>
              <a href="/appointment">Appointment</a>
            </li>
          </Link>
          <Link to="../prescription">
            <li>
              <a href="../Prescription">Prescription</a>
            </li>
          </Link>
          <Link to="/healthinfo">
            <li>
              <a href="/healthinfo">Health Info.</a>
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
