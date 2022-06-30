import React from "react";
import { Link } from "react-router-dom";
import { PhotoComments } from "./PhotoComments";
import styles from "./styles/PhotoContent.module.css";

export const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className={styles.acessos}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} KG</li>
            {photo.idade > 1 ? (
              <li>{photo.idade} anos</li>
            ) : (
              <li>{photo.idade} ano</li>
            )}
          </ul>
        </div>
      </div>
      <PhotoComments idFoto={photo.id} comments={comments} />
    </div>
  );
};
