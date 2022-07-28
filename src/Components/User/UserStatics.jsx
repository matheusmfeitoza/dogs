import React from "react";
import Loading from "../Ui/Loading/Loading";
import Error from "../Ui/Error/Error";
import useFecth from "../../Hooks/useFetch";
import UserStatisGraph from "./UserStatisGraph";
import { STATS_GET } from "../../api";

const UserStatics = () => {
  const { data, erro, loading, request } = useFecth();

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    const { url, options } = STATS_GET(token);
    async function getStatisData() {
      await request(url, options);
    }
    getStatisData();
  }, [request]);
  if (erro) return <Error error={erro} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section>
        <UserStatisGraph data={data} />
      </section>
    );
  else return null;
};

export default UserStatics;
