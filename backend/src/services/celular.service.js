import { Celular } from "../models/Celular.js";

const create = (body) => Celular.create(body);

const findById = (id) => Celular.findById({ _id: id });

const findAll = () => Celular.find();

const update = (id, body) => Celular.findOneAndUpdate({ _id: id }, body);

export const celularService = {
  create,
  findById,
  findAll,
  update,
};
