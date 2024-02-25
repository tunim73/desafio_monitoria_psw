import { useCallback, useEffect, useState } from "react";
import { useToastStore } from "../store/useStoreToast";

export const useListCelular = () => {
  const [listCelular, setListCelular] = useState([]);
  const [clear] = useToastStore((state) => [state.clear]);

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
    clear();
  }, [clear, fetcher]);

  return { listCelular, fetcher };
};
