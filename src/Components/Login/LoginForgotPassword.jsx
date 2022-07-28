import React from "react";
import Input from "../Form/Input/Input";
import Button from "../Form/Button/Button";
import Error from "../Ui/Error/Error";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch.jsx";
import { PASSWORD_lOST } from "../../api";
import Head from "../Ui/Head/Head";

const LoginForgotPassword = () => {
  const login = useForm();
  const { data, erro, loading, request } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_lOST({
        login: login.value,
        url: window.location.href.replace("forgotuser", "recoverpass"),
      });
      await request(url, options);
    }
  };
  return (
    <section>
      <Head
        title="Esqueceu sua senha?"
        description="Peça o reset da sua senha para voltar a utilizar nossa rede social"
      />
      <h1 className="title">Recupere seu acesso</h1>
      {data ? (
        <p style={{ color: "#1d1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="login"
            placeholder="Informe seu usuário ou e-mail"
            {...login}
          />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar</Button>
          )}
        </form>
      )}

      {erro && <Error error={erro} />}
    </section>
  );
};

export default LoginForgotPassword;
