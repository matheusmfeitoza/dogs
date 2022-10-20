import React from "react";
import { Link } from "react-router-dom";
import styles from "./Index.module.css";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";
import { useSelector } from "react-redux";

const Header = () => {
  const { data } = useSelector((state) => state.user);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          {" "}
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
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
