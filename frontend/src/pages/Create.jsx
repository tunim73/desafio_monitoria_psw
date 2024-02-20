import { useNavigate } from "react-router-dom";
import { Form } from "../components";

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
      await fetch("http://localhost:3000/celular", options);
      navigate("/");
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return <Form type={"create"} values={null} aoSubmit={createSubmit} />;
};
