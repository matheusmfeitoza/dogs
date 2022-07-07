import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const { login } = useContext(UserContext);
  return login ? children : <Navigate to="/login" />;
};

export default ProtectRoute;
