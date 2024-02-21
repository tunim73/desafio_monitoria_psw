import { useNavigate } from "react-router-dom";
import { Form } from "../components";
import { ToastContainer, toast } from "react-toastify";

export const Create = () => {
  const navigate = useNavigate();

  const createSubmit = async (data) => {
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
        toast.warn("Já existe esse modelo no sistema");
      } else if (res.status === false) {
        toast.warn(res.message);
      } else if (res.status === true) {
        toast.success("Celular adicionado com sucesso !");
        navigate("/");
      }
    } catch (error) {
      toast.error("Problema no servidor");
      console.error("Error: ", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <Form type={"create"} values={null} aoSubmit={createSubmit} />
    </>
  );
};
