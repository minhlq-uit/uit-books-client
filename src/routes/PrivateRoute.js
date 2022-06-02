import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, children }) => {
  const { user } = useSelector((state) => state.user);
<<<<<<< HEAD
 console.log('children', children)
 console.log('is admin user role', isAdmin, user.role)
=======

>>>>>>> 48df1ab36715c232db2116b88a3706ac838860de
  return (
    <>
      {/* { !user && <Navigate to="/signin" /> }
        { isAdmin && user.role !== 'admin' && <Navigate to='/signin' /> } */}
      {isAdmin ? (
        user ? (
          user.role !== "admin" ? (
            <Navigate to="/signin" />
          ) : (
            <>{children}</>
          )
        ) : (
          <Navigate to="/signin" />
        )
      ) : !user ? (
        <Navigate to="/signin" />
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default ProtectedRoute;
