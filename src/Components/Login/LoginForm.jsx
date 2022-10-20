import React from "react";
import { Link } from "react-router-dom";
import Input from "../Form/Input/Input";
import Button from "../Form/Button/Button";
import useForm from "../../Hooks/useForm";
import Error from "../Ui/Error/Error";
import styles from "./Styles/LoginForm.module.css";
import stylesBtn from "../../Components/Form/Button/button.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../store/user";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const dispatch = useDispatch();

  const { token, user } = useSelector((state) => state);
  const loading = token.loading || user.loading;
  const error = token.error || user.error;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      dispatch(
        userLogin({ username: username.value, password: password.value })
      );
    }
  };

  return (
    <section className="animaLeft">
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Usuário"
          id={username.value}
          name={username.value}
          {...username}
        />
        <Input type="password" label="Senha" {...password} />
        <div className={styles.formButton}>
          {loading ? (
            <Button disabled>Carregando...</Button>
          ) : (
            <Button>Entrar</Button>
          )}
          <Link className={stylesBtn.button} to="/login/createuser">
            Criar conta
          </Link>
        </div>
      </form>
      <Error error={error} />
      <Link className={styles.forgotUser} to="/login/forgotuser">
        Esqueceu sua senha?{" "}
        <span className={styles.spnForgot}>Clique aqui!</span>
      </Link>
    </section>
  );
};

export default LoginForm;
