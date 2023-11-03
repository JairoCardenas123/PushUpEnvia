const { Schema, model } = require('mongoose');

const continentesSchema = Schema(
  {
    Descripcion: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Continentes = model('Continentes', continentesSchema);

module.exports = Continentes;
