import React from "react";
import Loading from "../Ui/Loading/Loading";
import Error from "../Ui/Error/Error";
import useFecth from "../../Hooks/useFetch";
import { STATS_GET } from "../../api";
const UserStatisGraph = React.lazy(() => import("./UserStatisGraph"));

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
      <React.Suspense fallback={<div></div>}>
        <UserStatisGraph data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStatics;
