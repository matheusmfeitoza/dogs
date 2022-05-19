import React from "react";
import { Routes, Route } from "react-router-dom";
import Feed from "../Feed/Feed";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStatics from "./UserStatics";

const User = () => {
  return (
    <div className="container">
      <UserHeader />
      <Routes>
        <Route to="/" element={<Feed />} />
        <Route to="/postar" element={<UserPhotoPost />} />
        <Route to="/estatisticas" element={<UserStatics />} />
      </Routes>
    </div>
  );
};

export default User;
