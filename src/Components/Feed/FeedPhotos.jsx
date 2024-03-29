import React from "react";
import FeedPhotoItens from "./FeedPhotoItens";
import styles from "./Styles/FeedPhoto.module.css";
import { useSelector } from "react-redux";

const FeedPhotos = () => {
  const { list } = useSelector((state) => state.feed);

  return (
    <ul className={`${styles.feed} animeLeft`}>
      {list?.map((photo) => (
        <FeedPhotoItens
          key={photo.id}
          itens={photo}
        />
      ))}
    </ul>
  );
};

export default FeedPhotos;
