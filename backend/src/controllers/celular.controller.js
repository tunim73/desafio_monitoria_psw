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

const findAll = async (_, res) => {
  try {
    const celulares = await celularService.findAll();

    if (celulares.length === 0) {
      res.status(200).json({ celulares: [] });
    }

    res.status(200).json({ celulares: celulares });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const update = async (req, res) => {
  try {
    const { marca, modelo, capacidade_memoria_gb, data_lancamento } = req.body;

    const { id } = req.params;

    if (
      !marca ||
      !modelo ||
      !capacidade_memoria_gb ||
      !data_lancamento ||
      !id
    ) {
      return res.status(400).json({ message: "Preencha todos os campos!" });
    }

    const response = await celularService.update(id, {
      marca,
      modelo,
      capacidade_memoria_gb,
      data_lancamento,
    });

    return res.status(200).json({ message: "Update", response });
  } catch (error) {
    console.error("error: ", error);
    res.status(400).json({ error: true, message: error });
  }
};

export const celularController = {
  create,
  test,
  findById,
  findAll,
  update,
};
