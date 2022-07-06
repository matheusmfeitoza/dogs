import React from "react";
import { PHOTO_DELETE } from "../../api";
import useFetch from "../../Hooks/useFetch";
import styles from "./styles/PhotoDelete.module.css";
import Error from "../Ui/Error/Error";

const PhotoDelete = ({ id }) => {
  const token = window.localStorage.getItem("token");
  const { erro, loading, request } = useFetch();
  const { url, options } = PHOTO_DELETE(id, token);

  const handleClick = async () => {
    const confirmation = window.confirm();
    if (confirmation) {
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  };
  return erro ? (
    <div>
      {" "}
      <Error error={erro} />
    </div>
  ) : (
    <div>
      {loading ? (
        <button>Deletando...</button>
      ) : (
        <button onClick={handleClick}>Deletar</button>
      )}
    </div>
  );
};

export default PhotoDelete;
