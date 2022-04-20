import React from "react";
import { Link } from "react-router-dom";
import Input from "../Form/Input/Input";
import Button from "../Form/Button/Button";
import useForm from "../../Hooks/useForm";
import { GET_USER, TOKEN_USER } from "../../api";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      getUser(token);
    }
  }, []);

  const getUser = async (token) => {
    const { url, options } = GET_USER(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_USER({
        username: username.value,
        password: password.value,
      });
      const response = await fetch(url, options);
      const json = await response.json();
      window.localStorage.setItem("token", json.token);
      getUser(json.token);
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
