import React from "react";
import { GET_USER, TOKEN_USER } from "../api";

export const UserContext = React.createContext();

export const UserProvider = (props) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [erro, setErro] = React.useState(null);

  async function getUser(token) {
    const { url, options } = GET_USER(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    console.log(data);
  }

  async function getUserToken(username, password) {
    const { url, options } = TOKEN_USER({ username, password });
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(response);
    console.log(json);
    if (response.status === 200) {
      window.localStorage.setItem("token", json.token);
      getUser(json.token);
      setLogin(true);
    }
  }

  return (
    <UserContext.Provider value={{ data, getUserToken, login }}>
      {props.children}
    </UserContext.Provider>
  );
};
