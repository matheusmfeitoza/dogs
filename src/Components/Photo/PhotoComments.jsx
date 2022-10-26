import React, { useState } from "react";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import PhotoCommentsForm from "./PhotoCommentsForm";
import styles from "./styles/PhotoComment.module.css";

export const PhotoComments = ({ singlePage, idFoto, comments }) => {
  const { data } = useSelector((state) => state.user);
  const photoCommentsSection = useRef();
  const [listComments, setListComments] = useState(() => comments);

  useEffect(() => {
    photoCommentsSection.current.scrollTop =
      photoCommentsSection.current.scrollHeight;
  }, [listComments]);
  return (
    <>
      <ul
        ref={photoCommentsSection}
        className={`${styles.comments} ${singlePage ? styles.singlePage : ""}`}
      >
        {listComments.map((comment) => {
          return (
            <li key={comment.comment_ID}>
              <strong>{comment.comment_author}:</strong>
              <span>{comment.comment_content}</span>
            </li>
          );
        })}
      </ul>
      {data && (
        <PhotoCommentsForm
          singlePage={singlePage}
          idFoto={idFoto}
          setListComments={setListComments}
        />
      )}
    </>
  );
};
