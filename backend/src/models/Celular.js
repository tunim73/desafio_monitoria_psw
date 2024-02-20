import mongoose from "mongoose";

const CelularSchema = new mongoose.Schema({
  marca: {
    type: String,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
    unique: true,
  },
  capacidade_memoria_gb: {
    type: Number,
    required: true,
  },
  data_lancamento: {
    type: Date,
    required: true,
  },
});

export const Celular = mongoose.model("Celular", CelularSchema);
