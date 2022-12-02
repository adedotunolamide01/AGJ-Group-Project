import React from 'react';
import { useAuth } from '../Context/authContext';

import { Navigate } from 'react-router-dom';

function RequiredAuth({ children }) {
  //   checking for user takes time
  //so it instantaneously navigate to login in all cases
  //   //so it instantaneously navigate to login in all cases

  const { user } = useAuth();
  // after bzilion changes this decided to work for no reason
  return user ? children : <Navigate to="/login" />;
}

export default RequiredAuth;
