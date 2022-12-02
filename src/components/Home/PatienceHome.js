import React from 'react';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/authContext';

import PatienceNav from '../Navbar/Patiencenav';

const PatienceHome = (props) => {
  const { user } = useAuth();
  return (
    <div>
      <div>
        <PatienceNav />
      </div>

      <Card className={classes.home}>
        <h1>Welcome back!</h1>
        <br></br>
        <strong>{user.email}</strong>
      </Card>
      <div className={classes.DashboardContentFlex}>
        <Card className={classes.history}>
          <Link to="../patiencemedicalhistory">
            <li>
              <a href="../Patiencemedicalhistory">
                <h1>Medical History</h1>
              </a>
            </li>
          </Link>
        </Card>
        <Card className={classes.appointment}>
          <Link to="../appointment">
            <li>
              <a href="../appointment">
                <h1>Appointment</h1>
              </a>
            </li>
          </Link>
        </Card>
        <Card className={classes.Prescription}>
          <Link to="../patienceprescription">
            <li>
              <a href="../patienceprescription">
                <h1>View Prescription</h1>
              </a>
            </li>
          </Link>
        </Card>
        <Card className={classes.information}>
          <Link to="../healthinfo">
            <li>
              <a href="../healthinfo">
                <h1>Health Information</h1>
              </a>
            </li>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default PatienceHome;
