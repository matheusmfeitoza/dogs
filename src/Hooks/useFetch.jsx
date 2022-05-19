import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [erro, setErro] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) {
        throw new Error(json.message);
      }
    } catch (err) {
      json = null;
      setErro(err.message);
    } finally {
      setData(json);
      setLoading(false);
      return { json, response };
    }
  }, []);
  return {
    data,
    erro,
    loading,
    request,
  };
};

export default useFetch;
