import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Feed from "../Feed/Feed";
import PageNotFound from "../Ui/PageNotFound/PageNotFound";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStatics from "./UserStatics";

const User = () => {
  const { data } = useSelector((state) => state.user);
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
