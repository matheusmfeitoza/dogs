import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import LoginCreateUser from "./LoginCreateUser";
import LoginForgotPassword from "./LoginForgotPassword";
import LoginForm from "./LoginForm";

const Login = () => {
  const { login } = React.useContext(UserContext);
  if (login === true) return <Navigate to="/conta" />;
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="forgotuser" element={<LoginForgotPassword />} />
        <Route path="createuser" element={<LoginCreateUser />} />
      </Routes>
    </div>
  );
};

export default Login;
