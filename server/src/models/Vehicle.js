import mongoose, { Schema } from "mongoose";

export const Vehicle = mongoose.model(
  "Vehicle",
  new Schema(
    {
      vehicle: { type: String, required: true },
      brand: { type: String, required: true },
      year: { type: Number, required: true },
      description: { type: String, required: true },
      sold: { type: Boolean, required: true },
    },
    { timestamps: true }
  )
);
