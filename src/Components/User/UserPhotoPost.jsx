import React from "react";
import styles from "./Styles/UserPhotoPost.module.css";
import Input from "../../Components/Form/Input/Input";
import Button from "../../Components/Form/Button/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_POST } from "../../api";
import Error from "../Ui/Error/Error";
import { useNavigate } from "react-router-dom";

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const { data, error, loading, request } = useFetch();
  const [img, setImg] = React.useState({});
  const token = window.localStorage.getItem("token");
  const formData = new FormData();
  formData.append("img", img.raw);
  formData.append("nome", nome.value);
  formData.append("peso", peso.value);
  formData.append("idade", idade.value);
  const navigate = useNavigate();

  const { url, options } = PHOTO_POST(formData, token);

  const handleSubmit = (event) => {
    event.preventDefault();
    request(url, options);
  };

  const handleImgChange = (event) => {
    setImg({
      preview: URL.createObjectURL(event.target.files[0]),
      raw: event.target.files[0],
    });
  };

  React.useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  return (
    <section className={`${styles.photoPost} animaLeft`}>
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Nome" name="nome" {...nome} />
        <Input type="number" label="Peso" name="peso" {...peso} />
        <Input type="number" label="Idade" name="idade" {...idade} />
        <input
          className={styles.upload}
          type="file"
          id="img"
          name="img"
          onChange={handleImgChange}
          accept="image/jpg, image/png, image/jpeg"
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
      <Error erro={error} />
    </section>
  );
};

export default UserPhotoPost;
