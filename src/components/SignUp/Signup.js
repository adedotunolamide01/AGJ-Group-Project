import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";
import Card from "../UI/Card/Card";
import classes from "../Login/Login.module.css";
import Button from "../UI/Button/Button";
import MainHeader from "../MainHeader/MainHeader";
import Footer from "../Footer/Footer";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

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

  const { signup } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      // go to db
      await signup({ email, password });
      setLoading(false);

      // navigate to a different page
      navigate("/home");
    } catch (err) {
      setLoading(false);
      console.log(err);
      setError("Failed to create an account");
    }
  };

  if (loading) return <div>loading...</div>;

  return (
    <div>
      <div className={classes.mainheader}>
        <MainHeader />
      </div>

      <Card className={classes.login}>
        <form onSubmit={onSubmit}>
          <h1>Signup</h1>
          {error && <p style={{ color: "red" }}>{error}</p>}
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
              SUBMIT
            </Button>
          </div>
          <p>
            Already has an account? <Link to="/login">login</Link>
          </p>
        </form>
      </Card>
      <Footer />
    </div>
  );
};

export default Signup;
