import { Form } from "../components";

export const Update = () => {
  return (
    <>
      <Form
        tipo={"update"}
        values={{
          id: 1,
          marca: "Samsung",
          modelo: "Galaxy S21",
          capacidade_memoria_gb: 256,
          data_lancamento: "2021-01-29",
        }}
      />
    </>
  );
};
