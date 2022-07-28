import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import LoginCreateUser from "./LoginCreateUser";
import LoginForgotPassword from "./LoginForgotPassword";
import LoginForm from "./LoginForm";
import styles from "./Styles/Login.module.css";
import PageNotFound from "../Ui/PageNotFound/PageNotFound";
import LoginRecoverPass from "./LoginRecoverPass";
import Head from "../Ui/Head/Head";

const Login = () => {
  const { login } = React.useContext(UserContext);
  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <Head
        title={"Faça Login"}
        description={"Cria sua conta e faça parte da nossa rede social"}
      />
      <div className={styles.form}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="forgotuser" element={<LoginForgotPassword />} />
          <Route path="recoverpass" element={<LoginRecoverPass />} />
          <Route path="createuser" element={<LoginCreateUser />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
