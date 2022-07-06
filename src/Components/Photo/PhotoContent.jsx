import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import Image from "../Ui/Image/Image";
import { PhotoComments } from "./PhotoComments";
import PhotoDelete from "./PhotoDelete";
import styles from "./styles/PhotoContent.module.css";

export const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  const user = useContext(UserContext);
  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <div className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.acessos}>{photo.acessos}</span>
          </div>
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
