import mongoose, { Schema } from "mongoose";

export const Vehicle = mongoose.model(
  "Vehicle",
  new Schema(
    {
      veiculo: { type: String, required: true },
      marca: { type: String, required: true },
      ano: { type: Number, required: true },
      descricao: { type: String, required: true },
      vendido: { type: Boolean, required: true },
    },
    { timestamps: true }
  )
);
