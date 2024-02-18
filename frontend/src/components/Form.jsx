import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const Form = ({ tipo, values, aoSubmit }) => {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [capacidadeMemoria, setCapacidadeMemoria] = useState(0);
  const [dataLancamento, setDataLancamento] = useState("");

  useEffect(() => {
    if (tipo === "create" || !values) return;
    setMarca(values.marca);
    setModelo(values.modelo);
    setCapacidadeMemoria(values.capacidade_memoria_gb);
    setDataLancamento(values.data_lancamento);
  }, []);

  const handleChangeMarca = (event) => setMarca(event.target.value);
  const handleChangeModelo = (event) => setModelo(event.target.value);
  const handleChangeCapacidadeMemoria = (event) =>
    setCapacidadeMemoria(event.target.value);
  const handleChangeDataLancamento = (event) =>
    setDataLancamento(event.target.value);

  const handleSubmit = () => {
    const data = {
      id: values.id,
      marca: marca,
      modelo: modelo,
      capacidade_memoria_gb: capacidadeMemoria,
      data_lancamento: dataLancamento,
    };

    aoSubmit(data);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">
            {tipo === "update" ? "Atualizar Celular" : "Novo Celular "}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="marca" className="form-label">
                Marca:
              </label>
              <input
                type="text"
                className="form-control"
                id="marca"
                value={marca}
                onChange={handleChangeMarca}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="modelo" className="form-label">
                Modelo:
              </label>
              <input
                type="text"
                className="form-control"
                id="modelo"
                value={modelo}
                onChange={handleChangeModelo}
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="capacidadeMemoria" className="form-label">
                Capacidade de memória (GB):
              </label>
              <input
                type="number"
                className="form-control"
                id="capacidadeMemoria"
                value={capacidadeMemoria}
                onChange={handleChangeCapacidadeMemoria}
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="dataLancamento" className="form-label">
                Data de lançamento:
              </label>
              <input
                type="date"
                className="form-control"
                id="dataLancamento"
                value={dataLancamento}
                onChange={handleChangeDataLancamento}
              />
            </div>
            <div className="d-flex justify-content-between">
              <NavLink to="/" className="btn btn-secondary">
                Voltar
              </NavLink>
              <button type="submit" className="btn btn-primary">
                {tipo === "update" ? "Atualizar" : "Salvar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
