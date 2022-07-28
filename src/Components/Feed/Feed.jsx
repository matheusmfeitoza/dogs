import React from "react";
import PropType from "prop-types";
import FeedPhotos from "./FeedPhotos";
import FeedModal from "./FeedModal";
import { useState } from "react";
import styles from "./Styles/Feed.module.css";
import Head from "../Ui/Head/Head";
const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinity, setInfinity] = React.useState(true);
  const [haveMorePhotos, setHaveMorePhotos] = React.useState(false);

  React.useEffect(() => {
    let wait = false;
    const infiniteScroll = () => {
      if (infinity) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          wait = true;
          setPages((pages) => [...pages, pages.length + 1]);
          setTimeout(() => {
            wait = true;
          }, 500);
        }
      }
    };
    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [pages, infinity]);
  return (
    <section className="container mid-container">
      <Head title={"Feed"} description={"Acompanhe o feed de fotos"} />
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((item, index) => {
        return (
          <FeedPhotos
            key={index}
            user={user}
            page={item}
            setModalPhoto={setModalPhoto}
            setInfinity={setInfinity}
            total="6"
            setHaveMorePhotos={setHaveMorePhotos}
          />
        );
      })}
      {haveMorePhotos && (
        <span className={styles.noPhotos}>Não existem mais fotos</span>
      )}
    </section>
  );
};

Feed.defaultProps = {
  user: 0,
};

Feed.PropType = {
  user: PropType.oneOfType([
    PropType.string.isRequired,
    PropType.number.isRequired,
  ]),
};
export default Feed;
