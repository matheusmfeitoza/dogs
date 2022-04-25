import React from "react";
import { Link } from "react-router-dom";
import Input from "../Form/Input/Input";
import Button from "../Form/Button/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../Context/UserContext";
import Error from "../Ui/Error/Error";

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
        {context.loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
      </form>
      <Error error={context.erro} />
      <Link to="/login/createuser">Cadastrar Usuário</Link>
    </section>
  );
};

export default LoginForm;
