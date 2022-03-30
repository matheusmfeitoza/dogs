import React from "react";

const UserToken = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [token, setToken] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    getUserToken();
  };

  const getUserToken = async () => {
    const response = await fetch(
      "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    );
    console.log(response);
    const json = await response.json();
    console.log(json);
    setToken(json);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        placeholder="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button>Send</button>
      {token && (
        <p style={{ wordWrap: "break-word", wordWrap: "break-word" }}>
          {token.token}
        </p>
      )}
    </form>
  );
};

export default UserToken;
