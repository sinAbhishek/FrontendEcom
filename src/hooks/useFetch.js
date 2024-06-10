import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const Url = process.env.REACT_APP_Url;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await axios.get(`${Url}${url}`);
        setData(res.data);
        setLoading(false);
      } catch (err) {
        throw err;
      }
    };
    fetchData();
  }, [url]);

  return { data, loading };
};
export default useFetch;
