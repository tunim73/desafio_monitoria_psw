import { useNavigate } from "react-router-dom";
import { Form } from "../components";
import { ToastContainer } from "../components/ToastContainer";
import { useToastStore } from "../store/useStoreToast";
import { useEffect } from "react";

export const Create = () => {
  const navigate = useNavigate();
  const [success, danger, clear] = useToastStore((state) => [
    state.success,
    state.danger,
    state.clear,
  ]);

  useEffect(() => {
    clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createSubmit = async (data, setError) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      let res = await fetch("http://localhost:3000/celular", options);
      res = await res.json();

      if (res.status === false && res.message === "duplicate key") {
        setError("modelo", {
          type: "modeloExiste",
          message: "Já existe esse modelo no sistema",
        });
      } else if (res.status === false) {
        danger(res.message);
      } else if (res.status === true) {
        success("Celular adicionado com sucesso !");
        navigate("/create");
      }
    } catch (error) {
      danger("Erro na requsição !");
      console.error("error: ", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <Form type={"create"} values={null} aoSubmit={createSubmit} />
    </>
  );
};
