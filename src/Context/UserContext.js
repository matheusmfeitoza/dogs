import React from "react";
import { GET_USER, TOKEN_USER, TOKEN_USER_VALIDATE } from "../api";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export const UserProvider = (props) => {
  // Definindo States
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [erro, setErro] = React.useState(null);
  const navigate = useNavigate();

  // Função que valida o usuário com base no token
  async function getUser(token) {
    const { url, options } = GET_USER(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  // Função que obtem o token do usuário e também salva no localStorage
  async function getUserToken(username, password) {
    try {
      setErro(null);
      setLoading(true);
      const { url, options } = TOKEN_USER({ username, password });
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Erro: ${response.statusText}`);
      const json = await response.json();
      window.localStorage.setItem("token", json.token);
      await getUser(json.token);
      navigate("/conta");
    } catch (err) {
      setErro(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  // Função que desconecta o usuário e limpa localStorage e qualquer erro
  const logoutUser = React.useCallback(
    async function () {
      setData(null);
      setErro(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem("token");
      navigate("/login");
    },
    [navigate]
  );

  // Effect para validar se já tem algum usuário logado e realizar o login do mesmo
  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setErro(null);
          setLoading(true);
          const { url, options } = TOKEN_USER_VALIDATE(token);
          const response = await fetch(url, options);
          if (!response.ok) {
            throw new Error("Token Invalido");
          }
          await getUser(token);
          console.log(token);
        } catch (err) {
          logoutUser();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [logoutUser]);

  return (
    <UserContext.Provider
      value={{ data, getUserToken, logoutUser, login, erro, loading }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
