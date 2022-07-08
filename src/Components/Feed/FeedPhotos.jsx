import React from "react";
import useFetch from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../api";
import FeedPhotoItens from "./FeedPhotoItens";
import Error from "../Ui/Error/Error";
import Loading from "../Ui/Loading/Loading";
import styles from "./Styles/FeedPhoto.module.css";

const FeedPhotos = ({
  total,
  user,
  page,
  setInfinity,
  setModalPhoto,
  setHaveMorePhotos,
}) => {
  const { data, erro, loading, request } = useFetch();

  React.useEffect(() => {
    const fetchPhotos = async () => {
      const { url, options } = PHOTOS_GET({ total: total, page: page, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) {
        setInfinity(false);
        setHaveMorePhotos(true);
      }
    };
    fetchPhotos();
  }, [request, user, page, setInfinity, total, setHaveMorePhotos]);
  if (erro) return <Error error={erro} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotoItens
            key={photo.id}
            itens={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
