import { useNavigate, useParams } from "react-router-dom";
import { Form } from "../components";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [celular, setCelular] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/celular/${id}`)
      .then(async (res) => {
        const data = await res.json();

        setCelular(data.Celular);
      })
      .catch((error) => {
        console.error("err: ", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateSubmit = async (data) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      let res = await fetch(`http://localhost:3000/celular/${id}`, options);
      res = await res.json();

      if (res.status === false && res.message === "duplicate key") {
        toast.warn("Já existe esse modelo no sistema");
      } else if (res.status === false) {
        toast.warn(res.message);
      } else if (res.status === true) {
        toast.success("Celular atualizado com sucesso !");
        navigate(`/update/${id}`);
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <Form type={"update"} values={celular} aoSubmit={updateSubmit} />
    </>
  );
};
