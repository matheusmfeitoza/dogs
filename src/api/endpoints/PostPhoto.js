import React from "react";

const PostPhoto = () => {
  const [token, setToken] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [peso, setPeso] = React.useState("");
  const [idade, setIdade] = React.useState("");
  const [img, setImg] = React.useState("");

  const formdata = new FormData();
  formdata.append("nome", nome);
  formdata.append("peso", peso);
  formdata.append("idade", idade);
  formdata.append("img", img);

  const handleSubmit = (e) => {
    e.preventDefault();
    postPhoto();
  };

  const postPhoto = async () => {
    const response = await fetch(
      "https://dogsapi.origamid.dev/json/api/photo",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer" + token,
        },
        body: formdata,
      }
    );
    console.log(response);
    const json = await response.json();
    console.log(json);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Token"
        type="text"
        value={token}
        onChange={({ target }) => setToken(target.value)}
      />
      <input
        placeholder="Name"
        type="text"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <input
        placeholder="Weight"
        type="text"
        value={peso}
        onChange={({ target }) => setPeso(target.value)}
      />
      <input
        placeholder="Age"
        type="text"
        value={idade}
        onChange={({ target }) => setIdade(target.value)}
      />
      <input type="file" onChange={({ target }) => setImg(target.files[0])} />
      <button>Send</button>
    </form>
  );
};

export default PostPhoto;
