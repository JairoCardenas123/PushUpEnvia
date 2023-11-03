const { Schema, model } = require('mongoose');

const rutasSchema = Schema(
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

const Rutas = model('rutas', rutasSchema);

module.exports = Rutas;
