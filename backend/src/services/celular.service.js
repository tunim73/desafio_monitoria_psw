import { Celular } from "../models/Celular.js";

const create = (body) => Celular.create(body);

export const celularService = {
  create,
};
