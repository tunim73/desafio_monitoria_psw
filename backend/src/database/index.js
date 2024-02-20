import mongoose from "mongoose";

export const connectDatabase = async () => {
  console.log("Estamos connectando");

  mongoose
    .connect(
      "mongodb+srv://root:mynewpassword@desafios.bcsptvw.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("___Banco de dados connectado___");
    })
    .catch((error) => {
      console.log("Falha na conexão com o banco de dados: ", error);
    });
};
