import React from 'react';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/authContext';
import Footer from '../Footer/Footer';
import aptImg from './Icons/appointment.png';
import pxImg from './Icons/prescription.png';
import infImg from './Icons/information.png';
import hisImg from './Icons/history.png';

import PatienceNav from '../Navbar/Patiencenav';

const PatienceHome = (props) => {
  const { user } = useAuth();
  return (
    <div>
      <div>
        <PatienceNav />
      </div>

      <Card className={classes.home}>
        <h1>
          <strong>{user.email}</strong>
        </h1>
      </Card>
      <div className={classes.DashboardContentFlex}>
        <Card className={classes.history}>
          <Link to="../patiencemedicalhistory">
            <li>
              <a href="../Patiencemedicalhistory">
                <h1>Medical History</h1>
              </a>
            </li>
            <img className={classes.regPics} src={hisImg} alt="" />
          </Link>
        </Card>
        <Card className={classes.appointment}>
          <Link to="../appointment">
            <li>
              <a href="../appointment">
                <h1>Appointment</h1>
              </a>
            </li>
            <img className={classes.regPics} src={aptImg} alt="" />
          </Link>
        </Card>
        <Card className={classes.Prescription}>
          <Link to="../patienceprescription">
            <li>
              <a href="../patienceprescription">
                <h1>View Prescription</h1>
              </a>
            </li>
            <img className={classes.regPics} src={pxImg} alt="" />
          </Link>
        </Card>
        <Card className={classes.information}>
          <Link to="../healthinfo">
            <li>
              <a href="../healthinfo">
                <h1>Health Information</h1>
              </a>
            </li>
            <img className={classes.regPics} src={infImg} alt="" />
          </Link>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default PatienceHome;
