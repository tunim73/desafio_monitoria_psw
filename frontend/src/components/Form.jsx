import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getDate } from "../util/formatDate.js";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  marca: yup.string().min(2).max(20).required("campo obrigatório"),
  modelo: yup.string().min(2).max(30).required("campo obrigatório"),
  capacidadeMemoria: yup
    .number()
    .required("campo obrigatório")
    .positive("digite um número positivo")
    .integer(),
  dataLancamento: yup.date().required("campo obrigatório").getDate,
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
                min={1}
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
  );
};
