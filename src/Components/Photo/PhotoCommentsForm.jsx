import React from "react";
import styles from "./styles/PhotoCommentForm.module.css";
import { useState } from "react";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";
import useFetch from "../../Hooks/useFetch";
import { COMMENT_POST } from "../../api";
import Error from "../Ui/Error/Error";

const PhotoCommentsForm = ({ singlePage, idFoto, setListComments }) => {
  const [comment, setComment] = useState("");
  const { request, erro } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = window.localStorage.getItem("token");
    const { url, options } = COMMENT_POST(idFoto, { comment }, token);
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setListComments((comments) => [...comments, json]);
    }
  };
  return (
    <form
      className={`${styles.form} ${singlePage ? styles.singlePage : ""}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.allComments}
        name="comment"
        value={comment}
        id="comment"
        placeholder="Insira seu comentário"
        onChange={({ target }) => {
          setComment(target.value);
        }}
      />
      <button className={styles.sendComment}>
        <Enviar />
      </button>
      {erro && <Error error={erro} />}
    </form>
  );
};

export default PhotoCommentsForm;
