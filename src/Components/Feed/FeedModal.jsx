import React from "react";
import PropType from "prop-types";
import styles from "./Styles/FeedModal.module.css";
import Error from "../Ui/Error/Error";
import Loading from "../Ui/Loading/Loading";
import { PhotoContent } from "../Photo/PhotoContent";
import { useDispatch, useSelector } from "react-redux";

import {closeModal} from "../../store/ui";

const FeedModal = () => {
    const {modal} = useSelector(state => state.ui)
  const { data, error, loading } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

React.useEffect(() => {
   dispatch(closeModal());
},[dispatch])

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) dispatch(closeModal());
  };
  if(!modal) return null;
  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};
FeedModal.PropType = {
  photo: PropType.object.isRequired,
};

export default FeedModal;
