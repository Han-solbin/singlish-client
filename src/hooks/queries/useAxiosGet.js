import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosGet = (url) => {
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
  return { loading, data, error };
};

export default useAxiosGet;
