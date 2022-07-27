import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Form/Button/Button";
import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="container midContainer">
      <h1 className="title">Página não encontrada</h1>
      <p className={styles.text}>A página acessada não foi encontrada.</p>
      <div className={styles.btn}>
        <Button onClick={handleNavigate}>Voltar para página inicial</Button>
      </div>
    </div>
  );
};

export default PageNotFound;
