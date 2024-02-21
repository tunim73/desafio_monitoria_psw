import { celularService } from "../services/celular.service.js";

const test = (req, res) => {
  return res.status(200).json({ message: "HelloWorld" });
};

const create = async (req, res) => {
  try {
    const { marca, modelo, capacidade_memoria_gb, data_lancamento } = req.body;

    if (!marca || !modelo || !capacidade_memoria_gb || !data_lancamento) {
      return res
        .status(200)
        .json({ status: false, message: "Preencha todos os campos!" });
    }

    const response = await celularService.create({
      marca,
      modelo,
      capacidade_memoria_gb,
      data_lancamento,
    });

    return res.status(200).json({ status: true, celular: response });
  } catch (error) {
    if (error.message.slice(0, 20) === "E11000 duplicate key") {
      return res.status(200).json({ status: false, message: "duplicate key" });
    }
    res.status(200).json({ status: false, message: error.message });
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const Celular = await celularService.findById(id);
    if (!Celular) {
      return res.status(200).send({ message: "User não encontrado" });
    }
    return res.status(201).json({
      Celular,
    });
  } catch (error) {
    console.error("error: ", error);
    res.status(200).json({ error: true, message: error.message });
  }
};

const findAll = async (_, res) => {
  try {
    const celulares = await celularService.findAll();

    if (celulares.length === 0) {
      return res.status(200).json({ celulares: [] });
    }

    return res.status(200).json({ celulares: celulares });
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
      return res
        .status(200)
        .json({ status: false, message: "Preencha todos os campos!" });
    }

    const response = await celularService.update(id, {
      marca,
      modelo,
      capacidade_memoria_gb,
      data_lancamento,
    });

    return res.status(200).json({ status: true, celular: response });
  } catch (error) {
    if (
      error.message.slice(0, 77) ===
      "Plan executor error during findAndModify :: caused by :: E11000 duplicate key"
    ) {
      return res.status(200).json({ status: false, message: "duplicate key" });
    }
    res.status(200).json({ status: false, message: error.message });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    await celularService.destroy(id);
    return res.status(201).json({
      message: "Deletado com sucesso",
    });
  } catch (error) {
    console.error("error: ", error);
    res.status(200).json({ error: true, message: error.message });
  }
};

export const celularController = {
  create,
  test,
  findById,
  findAll,
  update,
  destroy,
};
