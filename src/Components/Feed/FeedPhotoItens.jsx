import React from "react";
import Image from "../Ui/Image/Image";
import styles from "./Styles/FeedPhotoItens.module.css";

const FeedPhotoItens = ({ itens, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(itens);
  }
  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={itens.src} alt={itens.title} />
      <span className={styles.visualizacao}>{itens.acessos}</span>
    </li>
  );
};

export default FeedPhotoItens;
