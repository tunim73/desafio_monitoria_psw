export const DeleteButton = ({ id, fetcher }) => {
  const deleteItem = async () => {
    const options = {
      method: "DELETE",
    };
    try {
      await fetch(`http://localhost:3000/celular/${id}`, options);
      fetcher();
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <button type="button" className="btn btn-danger" onClick={deleteItem}>
      Excluir
    </button>
  );
};
