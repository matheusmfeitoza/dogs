import React from "react";
import Input from "../Form/Input/Input";
import Button from "../Form/Button/Button";
import Error from "../Ui/Error/Error";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch.jsx";
import { PASSWORD_RESET } from "../../api";
import { useNavigate } from "react-router-dom";
import Head from "../Ui/Head/Head";

const LoginRecoverPass = () => {
  const [key, setKey] = React.useState("");
  const [login, setLogin] = React.useState("");
  const { erro, loading, request } = useFetch();
  const navigate = useNavigate();
  const newPassword = useForm();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keyUrl = params.get("key");
    const loginUrl = params.get("login");
    if (keyUrl) setKey(keyUrl);
    if (loginUrl) setLogin(loginUrl);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newPassword.validate()) {
      const { url, options } = PASSWORD_RESET({
        login: login,
        password: newPassword.value,
        key: key,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  };
  return (
    <section>
      <Head
        title="Recupere sua senha"
        description="Crie uma nova senha e volte a usar nossa rede social"
      />
      <h1 className="title"> Recupere seu acesso</h1>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Insira sua nova senha"
          type="password"
          name="password"
          {...newPassword}
        />
        {loading ? (
          <Button disabled>Redefinindo...</Button>
        ) : (
          <Button>Redefinir senha</Button>
        )}
      </form>
      {erro && <Error error={erro} />}
    </section>
  );
};

export default LoginRecoverPass;
