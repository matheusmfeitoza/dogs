import React from "react";
import { Link } from "react-router-dom";
import Input from "../Form/Input/Input";
import Button from "../Form/Button/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../Context/UserContext";
import Error from "../Ui/Error/Error";
import styles from "./Styles/LoginForm.module.css";
import stylesBtn from "../../Components/Form/Button/button.module.css";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const context = React.useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      context.getUserToken(username.value, password.value);
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
          {context.loading ? (
            <Button disabled>Carregando...</Button>
          ) : (
            <Button>Entrar</Button>
          )}
          <Link className={stylesBtn.button} to="/login/createuser">
            Cadastrar Usuário
          </Link>
        </div>
      </form>
      <Error error={context.erro} />
      <Link className={styles.forgotUser} to="/login/forgotuser">
        Esqueceu sua senha?{" "}
        <span className={styles.spnForgot}>Clique aqui!</span>
      </Link>
    </section>
  );
};

export default LoginForm;
