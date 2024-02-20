import { useCallback, useEffect, useState } from "react";

export const useListCelular = () => {
  const [listCelular, setListCelular] = useState([]);

  const fetcher = useCallback(() => {
    fetch("http://localhost:3000/celulares")
      .then(async (res) => {
        const data = await res.json();
        setListCelular(data.celulares);
      })
      .catch((error) => {
        console.error("err: ", error);
      });
  }, []);

  useEffect(() => {
    fetcher();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { listCelular };
};
