import { useToastStore } from "../store/useStoreToast";

export const DeleteButton = ({ id, fetcher }) => {
  const [success, danger] = useToastStore((state) => [
    state.success,
    state.danger,
  ]);

  const deleteItem = async () => {
    const options = {
      method: "DELETE",
    };
    try {
      await fetch(`http://localhost:3000/celular/${id}`, options);
      fetcher();
      success("Celular removido com sucesso !");
    } catch (error) {
      danger("Erro na requsição !");
      console.error("error: ", error);
    }
  };

  return (
    <button type="button" className="btn btn-danger" onClick={deleteItem}>
      Excluir
    </button>
  );
};
