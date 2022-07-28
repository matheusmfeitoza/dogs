import React from "react";
import Feed from "../Feed/Feed";
import Head from "../Ui/Head/Head";
const Home = () => {
  return (
    <div className="container mainContainer">
      <Head title={"Fotos"} description={"Feed de fotos"} />
      <Feed />
    </div>
  );
};

export default Home;
