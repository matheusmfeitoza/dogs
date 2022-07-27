import React from "react";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../api";
import { useParams } from "react-router-dom";
import Error from "../Ui/Error/Error";
import Loading from "../Ui/Loading/Loading";
import { PhotoContent } from "./PhotoContent";
const Photo = () => {
  const { id } = useParams();
  const { data, erro, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);
  if (erro) return <Error erro={erro} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <div className="container mainContainer">
        <PhotoContent singlePage={true} data={data} />
      </div>
    );
  else {
    return null;
  }
};

export default Photo;
