import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import LoginCreateUser from "./LoginCreateUser";
import LoginForgotPassword from "./LoginForgotPassword";
import LoginForm from "./LoginForm";
import styles from "./Styles/Login.module.css";
import PageNotFound from "../Ui/PageNotFound/PageNotFound";

const Login = () => {
  const { login } = React.useContext(UserContext);
  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.form}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="forgotuser" element={<LoginForgotPassword />} />
          <Route path="createuser" element={<LoginCreateUser />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
