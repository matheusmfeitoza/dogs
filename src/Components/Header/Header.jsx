import React from "react";
import { Link } from "react-router-dom";
import styles from "./Index.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/login">Login / Criar conta</Link>
      </nav>
    </div>
  );
};

export default Header;
