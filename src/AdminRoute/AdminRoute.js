
import React from 'react';
import {  useLocation, Navigate } from 'react-router';
import useAuth from '../Hooks/useAuth';




const AdminRoute = ({ children}) => {
    const {  isLoading, admin } = useAuth();
    console.log(admin)
    const location= useLocation()
    if (isLoading) {
        return 'isLoading';
    }
    if (admin) {
        return children;
      
    }
  
    return <Navigate to="/home" replace state={{ from: location }}/>;
  };
   

export default AdminRoute;