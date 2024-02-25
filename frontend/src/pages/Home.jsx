import { NavLink } from "react-router-dom";
import { useListCelular } from "../hooks/useListCelular";
import { DeleteButton } from "../components";
import { formatDate } from "../util/formatDate.js";
import { ToastContainer } from "../components/ToastContainer.jsx";

export const Home = () => {
  const { listCelular, fetcher } = useListCelular();

  return (
    <>
      <ToastContainer />
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
                <tr key={item._id}>
                  <td>{item.marca}</td>
                  <td>{item.modelo}</td>
                  <td>{item.capacidade_memoria_gb}</td>
                  <td>{formatDate(item.data_lancamento)}</td>
                  <td>
                    <NavLink
                      to={`/update/${item._id}`}
                      type="button"
                      className="btn btn-warning"
                    >
                      Alterar
                    </NavLink>
                  </td>
                  <td>
                    <DeleteButton id={item._id} fetcher={fetcher} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
