import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../Feed/Feed";
import styles from "./Styles/UserProfile.module.css";

const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className={`container midContainer ${styles.profile}`}>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
