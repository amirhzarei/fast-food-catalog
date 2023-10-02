// This hook is for when we have several API and we want their common parts to be in one file and only the request is called in the main file.

import { useEffect, useState } from "react";
import axios from "../axios";

const instanc = axios.create({
  baseURL: "https://react-mini-projects-api.classbon.com",
});

const UseAxios = (axiosParams) => {
  const [respons, setRespons] = useState([]);
  const [error, setError] = useState("");
  const [loadin, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const results = await instanc.request(axiosParams);
      setRespons(results.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [axiosParams.url]);

  return [respons, error, loadin];
};

export default UseAxios;
