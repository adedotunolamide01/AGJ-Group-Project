import React, { useState, useEffect } from 'react';
import Login from '../src/components/Login/Login';
import Home from '../src/components/Home/PatienceHome';
import MainHeader from '../src/components/MainHeader/MainHeader';
import Form from '../src/components/Form/Form';

function FrontPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
        {!isLoggedIn && <Form onLogin={loginHandler} />}
      </main>
    </React.Fragment>
  );
}

export default FrontPage;
