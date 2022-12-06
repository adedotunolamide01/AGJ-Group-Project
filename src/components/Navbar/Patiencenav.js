import React from 'react';
import './Nav.css';
import { Link, useNavigate } from 'react-router-dom';

const Patiencenav = (props) => {
  const navigate = useNavigate();

  return (
    <header className="main-header">
      <h1>Health Management App</h1>
      <nav className="nav">
        <ul>
          <Link to="/patiencehome">
            <li>
              <a href="./patiencehome">Home</a>
            </li>
          </Link>
          <Link to="/Patiencemedicalhistory">
            <li>
              <a href="/medicalhistory">Medical History</a>
            </li>
          </Link>
          <Link to="/appointment">
            <li>
              <a href="/appointment">Appointment</a>
            </li>
          </Link>
          <Link to="/patienceprescription">
            <li>
              <a href="./Prescription">Prescription</a>
            </li>
          </Link>
          <Link to="/healthinfo">
            <li>
              <a href="/healthinfo">Health Info.</a>
            </li>
          </Link>
          <Link to="/profile">
            <li>
              <a href="/profile">Profile</a>
            </li>
          </Link>

          <li>
            <button onClick={() => navigate('/login')}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Patiencenav;
