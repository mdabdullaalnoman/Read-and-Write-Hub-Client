
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';


const PrivateRoute = ({ children }) => {
    const {user}= useAuth()

    if (user?.email) {
        return children;
      
    }
  
    return <Navigate to="/login" replace />;
  };

export default PrivateRoute;