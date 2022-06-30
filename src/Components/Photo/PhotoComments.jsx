import React, { useState } from "react";
import { useRef, useContext, useEffect } from "react";
import { UserContext } from "../../Context/UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import styles from "./styles/PhotoComment.module.css";

export const PhotoComments = ({ idFoto, comments }) => {
  const { login } = useContext(UserContext);
  const photoCommentsSection = useRef();
  const [listComments, setListComments] = useState(() => comments);

  useEffect(() => {
    photoCommentsSection.current.scrollTop =
      photoCommentsSection.current.scrollHeight;
  }, [listComments]);
  return (
    <>
      <ul ref={photoCommentsSection} className={styles.comments}>
        {listComments.map((comment) => {
          return (
            <li key={comment.comment_ID}>
              <strong>{comment.comment_author}:</strong>
              <span>{comment.comment_content}</span>
            </li>
          );
        })}
      </ul>
      {login && (
        <PhotoCommentsForm idFoto={idFoto} setListComments={setListComments} />
      )}
    </>
  );
};
