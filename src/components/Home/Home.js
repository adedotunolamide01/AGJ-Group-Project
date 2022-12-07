import React from "react";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/authContext";
import Footer from "../Footer/Footer";
import bgImg from "./Icons/patient.png";
import dcImg from "./Icons/doctor2.png";

import HomeNav from "../Navbar/HomeNav";

const Home = (props) => {
  const { user } = useAuth();
  return (
    <div>
      <div>
        <HomeNav />
      </div>

      <Card className={classes.home}>
        <h1>Welcome back!</h1>
        <br></br>

        <strong>{user.email}</strong>
      </Card>
      <div className={classes.DashboardContentFlex}>
        <Card className={classes.history}>
          <Link to="/doctorpage">
            <li>
              <h1>Doctor</h1>
            </li>
            <img className={classes.regPic} src={dcImg} alt="" />
            <div className={classes.boardCopy}>
              <p>Click here if you are a doctor</p>
            </div>
          </Link>
        </Card>
        <Card className={classes.history}>
          <Link to="/patiencehome">
            <li>
              <h1>
                <strong>Patient</strong>
              </h1>
            </li>
            <img className={classes.regPics} src={bgImg} alt="" />
            <div className={classes.boardCop}>
              <p>Click here if you are a Patient</p>
            </div>
          </Link>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
