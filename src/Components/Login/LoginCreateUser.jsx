import React from "react";
import Input from "../Form/Input/Input";
import Button from "../Form/Button/Button";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../api";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

const LoginCreateUser = () => {
  // Criando os states necessários
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const context = useContext(UserContext);

  // Função assincrona para cadastrar usuário pela API
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      password: password.value,
      email: email.value,
    });
    const response = await fetch(url, options);
    if (response.ok) context.getUserToken(username.value, password.value);
  };

  return (
    <section>
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="E-mail:" type="email" name="email" {...email} />
        <Input label="Usuário:" type="text" name="username" {...username} />
        <Input label="Senha:" type="password" name="password" {...password} />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default LoginCreateUser;
