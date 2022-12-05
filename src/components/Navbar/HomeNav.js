import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const HomeNav = (props) => {
  return (
    <header className="main-header">
      <h1>Health Management App</h1>
      <nav className="nav">
        <ul>
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

export default HomeNav;
