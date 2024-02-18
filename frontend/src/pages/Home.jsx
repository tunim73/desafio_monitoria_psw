import { NavLink } from "react-router-dom";
import { useListCelular } from "../hooks/useListCelular";

export const Home = () => {
  const { listCelular } = useListCelular();

  return (
    <div className="container mt-5">
      <NavLink to="/create" type="button" className="btn btn-success mb-3">
        Novo Celular
      </NavLink>
      <table className="table text-center table-bordered">
        <thead>
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Capacidade de memória (GB)</th>
            <th>Data de lançamento</th>
            <th>Alterar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {listCelular.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.marca}</td>
                <td>{item.modelo}</td>
                <td>{item.capacidade_memoria_gb}</td>
                <td>{item.data_lancamento}</td>
                <td>
                  <NavLink
                    to={`/update/${item.id}`}
                    type="button"
                    className="btn btn-warning"
                  >
                    Alterar
                  </NavLink>
                </td>
                <td>
                  <button type="button" className="btn btn-danger">
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
