import { Celular } from "../models/Celular.js";

const create = (body) => Celular.create(body);

const findById = (id) => Celular.findById({ _id: id });

const findAll = () => Celular.find();

export const celularService = {
  create,
  findById,
  findAll,
};
