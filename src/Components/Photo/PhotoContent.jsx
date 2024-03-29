import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Image from "../Ui/Image/Image";
import { PhotoComments } from "./PhotoComments";
import PhotoDelete from "./PhotoDelete";
import styles from "./styles/PhotoContent.module.css";

export const PhotoContent = ({ singlePage }) => {
  const { photo, comments } = useSelector((state) => state.photo.data);
  const user = useSelector((state) => state);
  return (
    <div className={`${styles.photo} ${singlePage ? styles.singlePage : ""}`}>
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
      <PhotoComments
        singlePage={singlePage}
        idFoto={photo.id}
        comments={comments}
      />
    </div>
  );
};
