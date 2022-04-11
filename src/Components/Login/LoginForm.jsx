import React from "react";
import { Link } from "react-router-dom";
import Input from "../Form/Input/Input";
import Button from "../Form/Button/Button";

const LoginForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((data) => data.json())
      .then((response) => console.log(response));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          id={username}
          label="Usuário"
          name={username}
          value={username}
        />
        <Input
          type="password"
          id={password}
          label="Senha"
          name={password}
          value={password}
        />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/createuser">Cadastrar Usuário</Link>
    </div>
  );
};

export default LoginForm;
