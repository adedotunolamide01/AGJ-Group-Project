import React from "react";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/authContext";
import NavDoctor from "../Navbar/NavDoctor";
import Footer from "../Footer/Footer";

const DoctorHome = (props) => {
  const { user } = useAuth();
  return (
    <div>
      <div>
        <NavDoctor />
      </div>

      <Card className={classes.home}>
        <h1>Welcome back!</h1>
        <br></br>
        <strong>{user.email}</strong>
      </Card>
      <div className={classes.DashboardContentFlex}>
        <Card className={classes.history}>
          <Link to="./doctormedicalhistory">
            <li>
              <a href="../doctormedicalhistory">
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
          <Link to="../doctorprescription">
            <li>
              <a href="../doctorprescription">
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
        <Footer />
      </div>
    </div>
  );
};

export default DoctorHome;
