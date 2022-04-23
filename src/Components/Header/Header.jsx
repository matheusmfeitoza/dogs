import React from "react";
import { Link } from "react-router-dom";
import styles from "./Index.module.css";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";
import { UserContext } from "../../Context/UserContext";

const Header = () => {
  const { login, data } = React.useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          {" "}
          <Dogs />
        </Link>
        {login ? (
          <Link className={styles.login} to="/user">
            {data && <span>{data.nome}</span>}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar conta
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
