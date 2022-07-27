import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import Feed from "../Feed/Feed";
import PageNotFound from "../Ui/PageNotFound/PageNotFound";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStatics from "./UserStatics";

const User = () => {
  const { data } = React.useContext(UserContext);
  return (
    <div className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStatics />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default User;
