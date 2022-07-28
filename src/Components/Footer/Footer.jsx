import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p>
        Todos os direitos reservados à{" "}
        <a
          href="https://github.com/matheusmfeitoza"
          target={"_blank"}
          rel="noreferrer"
        >
          Matheus Marinho
        </a>
      </p>
    </footer>
  );
};

export default Footer;
