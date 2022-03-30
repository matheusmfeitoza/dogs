import React from "react";
import CreateUser from "./endpoints/CreateUser";
import PostPhoto from "./endpoints/PostPhoto";
import UserToken from "./endpoints/UserToken";

const Api = () => {
  return (
    <div>
      <h1>User Post</h1>
      <CreateUser />
      <h1>User Token</h1>
      <UserToken />
      <h1>Post photo</h1>
      <PostPhoto />
    </div>
  );
};

export default Api;
