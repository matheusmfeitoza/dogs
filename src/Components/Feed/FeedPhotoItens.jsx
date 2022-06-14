import React from "react";
import styles from "./Styles/FeedPhotoItens.module.css";

const FeedPhotoItens = ({ itens }) => {
  return (
    <li className={styles.photo}>
      <img src={itens.src} alt={itens.title} />
      <span className={styles.visualizacao}>{itens.acessos}</span>
    </li>
  );
};

export default FeedPhotoItens;
