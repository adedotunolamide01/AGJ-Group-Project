import React from 'react';
import { useAuth } from '../Context/authContext';

import { Navigate } from 'react-router-dom';

function RequiredAuth({ children }) {
  //   checking for user takes time

  const { user, userLoading } = useAuth();

  if (userLoading) return <div>loading...</div>;
  return user ? children : <Navigate to="/login" />;
}

export default RequiredAuth;
