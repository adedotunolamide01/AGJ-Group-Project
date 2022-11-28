import React from "react";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <Card className={classes.home}>
        <h1>Welcome back!</h1>
      </Card>
      <div className={classes.DashboardContentFlex}>
        <Card className={classes.history}>
          <Link to="./medicalhistory">
            <li>
              <a href="../medicalhistory">
                <h1>Medical History</h1>
              </a>
            </li>
          </Link>
        </Card>
        <Card className={classes.appointment}>
          <h1>Appointment</h1>
        </Card>
        <Card className={classes.Prescription}>
          <Link to="../prescription">
            <li>
              <a href="../prescription">
                <h1>Prescription</h1>
              </a>
            </li>
          </Link>
        </Card>
        <Card className={classes.information}>
          <h1>Health Information</h1>
        </Card>
      </div>
    </div>
  );
};

export default Home;
