import React from "react";
import Image from "../Ui/Image/Image";
import styles from "./Styles/FeedPhotoItens.module.css";
import PropType from "prop-types";
import {useDispatch} from "react-redux";
import {openModal} from "../../store/ui";
import {fetchPhoto} from "../../store/photo";

const FeedPhotoItens = ({ itens, }) => {
    const dispatch = useDispatch();
  function handleClick() {
    dispatch(openModal());
    dispatch(fetchPhoto(itens.id));
  }
  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={itens.src} alt={itens.title} />
      <span className={styles.visualizacao}>{itens.acessos}</span>
    </li>
  );
};

FeedPhotoItens.PropType = {
  itens: PropType.object.isRequired,
};

export default FeedPhotoItens;
