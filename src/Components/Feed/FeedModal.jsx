import React from "react";
import PropType from "prop-types";
import styles from "./Styles/FeedModal.module.css";
import useFetch from "../../Hooks/useFetch";
import Error from "../Ui/Error/Error";
import Loading from "../Ui/Loading/Loading";
import { PhotoContent } from "../Photo/PhotoContent";
import { useEffect } from "react";
import { PHOTO_GET } from "../../api";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, erro, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  };
  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {erro && <Error error={erro} />}
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
