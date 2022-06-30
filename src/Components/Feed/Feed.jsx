import React from "react";
import FeedPhotos from "./FeedPhotos";
import FeedModal from "./FeedModal";
import { useState } from "react";
const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState(null);
  return (
    <section className="container mid-container">
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </section>
  );
};

export default Feed;
