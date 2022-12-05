import React from 'react';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/authContext';

import HomeNav from '../Navbar/HomeNav';

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
          </Link>
        </Card>
        <Card className={classes.history}>
          <Link to="/patiencehome">
            <li>
              <h1>
                <strong>Patience</strong>
              </h1>
            </li>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Home;
