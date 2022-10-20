import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { data } = useSelector((state) => state.user);

  return data ? children : <Navigate to="/login" />;

  // if (data) return <Route {...props}/>;
  // else if (data === null) return <Navigate to="/login" />;
  // else return null;
};

export default ProtectedRoute;
