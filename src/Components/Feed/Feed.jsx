import React from "react";
import FeedPhotos from "./FeedPhotos";
import FeedModal from "./FeedModal";
const Feed = () => {
  return (
    <section className="container mid-container">
      <FeedModal />
      <FeedPhotos />
    </section>
  );
};

export default Feed;
