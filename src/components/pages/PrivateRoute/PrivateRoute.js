import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserAuth } from '../../../context/AuthContext';

const PrivateRoute = () => {
  const { user } = UserAuth();

  return user ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
