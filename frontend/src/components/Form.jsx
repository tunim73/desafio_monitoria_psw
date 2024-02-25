import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getDate } from "../util/formatDate.js";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  marca: yup
    .string()
    .min(2, "Digite no mínimo 2 caracteres")
    .max(20, "Digite no máximo 20 caracteres")
    .required("Campo obrigatório"),
  modelo: yup
    .string()
    .min(2, "Digite no mínimo 2 caracteres")
    .max(30, "Digite no máximo 30 caracteres")
    .required("Campo obrigatório"),
  capacidadeMemoria: yup
    .number("Campo obrigatório")
    .required("Campo obrigatório")
    .positive("Digite um inteiro positivo")
    .integer("Digite um inteiro positivo"),
  dataLancamento: yup.string().required("Campo obrigatório"),
});

export const Form = ({ type, values, aoSubmit }) => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setValue("capacidadeMemoria", 0);
    if (type === "create" || !values) return;
    setValue("marca", values.marca);
    setValue("modelo", values.modelo);
    setValue("capacidadeMemoria", values.capacidade_memoria_gb);
    setValue("dataLancamento", getDate(values.data_lancamento));
  }, [values, type, setValue]);

  const onSubmit = (data) => {
    const dataForBD = {
      marca: data.marca,
      modelo: data.modelo,
      capacidade_memoria_gb: data.capacidadeMemoria,
      data_lancamento: data.dataLancamento,
    };

    aoSubmit(dataForBD, setError);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center mb-4">
              {type === "update" ? "Atualizar Celular" : "Novo Celular "}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="marca" className="form-label">
                  Marca:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="marca"
                  {...register("marca")}
                />
                {errors.marca && (
                  <span className="text-danger">{errors.marca.message}</span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="modelo" className="form-label">
                  Modelo:
                </label>
                <input
                  type="text"
                  className="form-control"
                  {...register("modelo")}
                />
                {errors.modelo && (
                  <span className="text-danger">{errors.modelo.message}</span>
                )}
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="capacidadeMemoria" className="form-label">
                  Capacidade de memória (GB):
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="capacidadeMemoria"
                  {...register("capacidadeMemoria")}
                />
                {errors.capacidadeMemoria && (
                  <span className="text-danger">
                    {errors.capacidadeMemoria.message}
                  </span>
                )}
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="dataLancamento" className="form-label">
                  Data de lançamento:
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dataLancamento"
                  {...register("dataLancamento")}
                />
                {errors.dataLancamento && (
                  <span className="text-danger">
                    {errors.dataLancamento.message}
                  </span>
                )}
              </div>
              <div className="d-flex justify-content-between">
                <NavLink to="/" className="btn btn-secondary">
                  Voltar
                </NavLink>
                <button type="submit" className="btn btn-primary">
                  {type === "update" ? "Atualizar" : "Salvar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
