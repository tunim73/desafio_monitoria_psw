import { celularService } from "../services/celular.service.js";

const test = (req, res) => {
  return res.status(200).json({ message: "HelloWorld" });
};

const create = async (req, res) => {
  try {
    const { marca, modelo, capacidade_memoria_gb, data_lancamento } = req.body;

    if (!marca || !modelo || !capacidade_memoria_gb || !data_lancamento) {
      return res.status(400).json({ message: "Preencha todos os campos!" });
    }

    const response = await celularService.create({
      marca,
      modelo,
      capacidade_memoria_gb,
      data_lancamento,
    });

    return res.status(200).json({ message: "Create", response });
  } catch (error) {
    console.error("error: ", error);
    res.status(400).json({ error: true, message: error });
  }
};

export const celularController = {
  create,
  test,
};
