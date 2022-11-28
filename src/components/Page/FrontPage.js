import React, { useState, useEffect } from "react";
import Login from "../Login/Login";
import Home from "../Home/Home";
import MainHeader from "../MainHeader/MainHeader";
import Form from "../Form/Form";
import Footer from "./Footer";

function FrontPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
        {!isLoggedIn && <Form onLogin={loginHandler} />}
        {!isLoggedIn && <Footer />}
      </main>
    </React.Fragment>
  );
}

export default FrontPage;
