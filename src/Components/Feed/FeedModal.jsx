import React from "react";
import PropType from "prop-types";
import styles from "./Styles/FeedModal.module.css";
import Error from "../Ui/Error/Error";
import Loading from "../Ui/Loading/Loading";
import { PhotoContent } from "../Photo/PhotoContent";
import { useEffect } from "react";
import Head from "../Ui/Head/Head";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "../../store/photo";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhoto(photo.id));
  }, [photo, dispatch]);

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
      document.title = "Fotos | Dog";
    }
  };
  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <Head title={photo.title} description={`Foto de ${photo.author}`} />
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};
FeedModal.PropType = {
  photo: PropType.object.isRequired,
  setModalPhoto: PropType.func.isRequired,
};

export default FeedModal;
