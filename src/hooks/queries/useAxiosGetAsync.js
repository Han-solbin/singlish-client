import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosGetAsync = async (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  console.log(data);
  return { loading, data, error };
};

export default useAxiosGetAsync;
