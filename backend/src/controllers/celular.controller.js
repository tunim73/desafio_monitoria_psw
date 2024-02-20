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

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const Celular = await celularService.findById(id);
    if (!Celular) {
      return res.status(400).send({ message: "User não encontrado" });
    }
    return res.status(201).json({
      Celular,
    });
  } catch (error) {
    console.error("error: ", error);
    res.status(400).json({ error: true, message: error });
  }
};

const findAll = async (req, res) => {
  try {
    const celulares = await celularService.findAll();

    if (celulares.length === 0) {
      return res.status(200).json({
        message: "Não há registros",
      });
    }

    res.status(200).json(celulares);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const celularController = {
  create,
  test,
  findById,
  findAll,
};
