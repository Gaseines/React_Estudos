import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 5 - Refatorando Post
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // 6- loading
  const [loading, setLoading] = useState(false);

  // 7 - Tratando Erros
  const [erro, setErro] = useState(false);

  // 8 - Desafio 6
  const [itemId, setItemId] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);

        const json = await res.json();

        setData(json);
      } catch (error) {
        console.log(error.message);

        setErro("Houve um erro ao carregar dados!");
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod(method);
    }else if(method === "DELETE"){
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        }

      });
      setMethod(method);
      setItemId(data)
    }
  };

  //POST
  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        const fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);
        const json = await res.json();

        setCallFetch(json);
      }else if(method === "DELETE"){
        const deleteUrl = `${url}/${itemId}`

        const res = await fetch(deleteUrl, config)

        const json = await res.json();

        setCallFetch(json)
      }
    };

    httpRequest();
  }, [config, method, url]);

  return { data, httpConfig, loading, erro};
};
