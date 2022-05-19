import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./Styles/UserHeader.module.css";
import { useLocation } from "react-router-dom";

function UserHeader() {
  const [titulo, setTitulo] = React.useState("");
  const { pathname } = useLocation();

  React.useEffect(() => {
    switch (pathname) {
      case "/conta/estatisticas":
        setTitulo("Estatisticas");
        break;
      case "/conta/postar":
        setTitulo("Poste sua foto");
        break;
      default:
        setTitulo("Minha conta");
    }
  }, [pathname]);

  return (
    <div className={styles.header}>
      <h1 className="title">{titulo}</h1>
      <UserHeaderNav />
    </div>
  );
}

export default UserHeader;
