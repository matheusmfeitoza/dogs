import React from "react";
import { Link } from "react-router-dom";
import Input from "../Form/Input/Input";
import Button from "../Form/Button/Button";
import useForm from "../../Hooks/useForm";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.value,
          password: password.value,
        }),
      })
        .then((data) => data.json())
        .then((response) => console.log(response));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Usuário"
          id={username.value}
          name={username.value}
          {...username}
        />
        <Input type="password" label="Senha" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/createuser">Cadastrar Usuário</Link>
    </div>
  );
};

export default LoginForm;
