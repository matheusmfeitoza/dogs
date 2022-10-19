import React from "react";
import { useParams } from "react-router-dom";
import Error from "../Ui/Error/Error";
import Loading from "../Ui/Loading/Loading";
import { PhotoContent } from "./PhotoContent";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "../../store/photo";
const Photo = () => {
  const { id } = useParams();
  const { data, error, loading } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPhoto(id));
  }, [id, dispatch]);
  if (error) return <Error erro={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <div className="container mainContainer">
        <PhotoContent singlePage={true} />
      </div>
    );
  else {
    return null;
  }
};

export default Photo;
