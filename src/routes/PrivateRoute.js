import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ isAdmin }) => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
        { !user && <Navigate to="/signin" /> }
        { isAdmin && user.role !== 'admin' && <Navigate to='/signin' /> }
    </>
  );
};

export default ProtectedRoute;
