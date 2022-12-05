import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const NavDoctor = (props) => {
  return (
    <header className="main-header">
      <h1>Health Management App</h1>
      <nav className="nav">
        <ul>
          <Link to="/doctorhome">
            <li>
              <a href="./homedoctor">Home</a>
            </li>
          </Link>
          <Link to="/doctormedicalhistory">
            <li>
              <a href="/doctormedicalhistory">Medical History</a>
            </li>
          </Link>
          <Link to="/appointment">
            <li>
              <a href="/appointment">Appointment</a>
            </li>
          </Link>
          <Link to="/doctorprescription">
            <li>
              <a href=".doctorprescription">Prescription</a>
            </li>
          </Link>
          <Link to="/healthinfo">
            <li>
              <a href="/healthinfo">Health Info.</a>
            </li>
          </Link>
          <Link to="/doctorpage">
            <li>
              <a href="./doctorpage">Doctor</a>
            </li>
          </Link>
          <Link to="/profiledoc">
            <li>
              <a href="/healthinfo">Profile</a>
            </li>
          </Link>
          <li>
            <Link to="/login">
              <button onClick={props.onLogout}>Logout</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavDoctor;
