import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import MainHeader from "../MainHeader/MainHeader";
import { useAuth } from "../Context/authContext";
import { Alert } from "react-bootstrap";
import Footer from "../Footer/Footer";

const Login = () => {
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(email.includes("@") && password.trim().length > 6);
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [email, password]);

  const validateEmailHandler = () => {
    setEmailIsValid(email.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };
  const navigate = useNavigate();
  const { login } = useAuth();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      // go to db
      await login({ email, password });
      setLoading(false);

      // navigate to a different page
      navigate("/home");
    } catch (err) {
      setLoading(false);
      console.log(err);
      setError("You dont an account or Check Username and Password ");
    }
  };

  if (loading) return <div>loading...</div>;
  return (
    <div>
      <div className={classes.mainheader}>
        <MainHeader />
      </div>
      <Card className={classes.login}>
        {error && <Alert variant="danger">{error}</Alert>}
        <form onSubmit={submitHandler}>
          <div
            className={`${classes.control} ${
              emailIsValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onBlur={validateEmailHandler}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div
            className={`${classes.control} ${
              passwordIsValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onBlur={validatePasswordHandler}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className={classes.actions}>
            <Button
              type="submit"
              className={classes.btn}
              disabled={!formIsValid}
            >
              Login
            </Button>
          </div>
          <div className={classes.createAccount}>
            <p>
              Still not have account?
              <Link to="/signup">
                <b className={classes.click}> Click Create New Account</b>
              </Link>
            </p>
          </div>
        </form>
      </Card>
      <div className={classes.mainheader}></div>
      <Footer />
    </div>
  );
};

export default Login;
