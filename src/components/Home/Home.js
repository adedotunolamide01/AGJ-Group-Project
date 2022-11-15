import React from "react";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <div>
      <Card className={classes.home}>
        <h1>Welcome back!</h1>
      </Card>
      <div className={classes.DashboardContentFlex}>
        <Card className={classes.history}>
          <h1>Medical History</h1>
        </Card>
        <Card className={classes.appointment}>
          <h1>Next appointment</h1>
        </Card>
        <Card className={classes.Prescription}>
          <h1>View Prescription</h1>
        </Card>
        <Card className={classes.information}>
          <h1>Health Information</h1>
        </Card>
      </div>
    </div>
  );
};

export default Home;
