import React from "react";

const CreateUser = () => {
  const [username, setUserName] = React.useState("");
  const [email, setUserMail] = React.useState("");
  const [password, setUserPassword] = React.useState("");
  const [responseApi, setresponseApi] = React.useState("");
  const [responseApi1, setresponseApi1] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    })
      .then((response) => {
        setresponseApi1(response.status);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return setresponseApi(json);
      });
    console.log(responseApi);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          value={username}
          onChange={({ target }) => setUserName(target.value)}
        />
        <input
          placeholder="Mail"
          value={email}
          onChange={({ target }) => setUserMail(target.value)}
        />
        <input
          placeholder="Password"
          value={password}
          onChange={({ target }) => setUserPassword(target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default CreateUser;
