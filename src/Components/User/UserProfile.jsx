import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../Feed/Feed";
import styles from "./Styles/UserProfile.module.css";
import Head from "../Ui/Head/Head";

const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className={`container midContainer ${styles.profile}`}>
      <h1 className="title">{user}</h1>
      <Feed user={user} />
      <Head title={user} description={"Página do usuário"} />
    </section>
  );
};

export default UserProfile;
