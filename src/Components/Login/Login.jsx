import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginCreateUser from "./LoginCreateUser";
import LoginForgotPassword from "./LoginForgotPassword";
import LoginForm from "./LoginForm";

const Login = () => {
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
