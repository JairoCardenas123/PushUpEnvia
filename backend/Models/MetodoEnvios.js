const { Schema, model } = require('mongoose');

const metodoEnvioSchema = Schema(
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

const MetodoEnvio = model('metodoenvio', metodoEnvioSchema);

module.exports = MetodoEnvio;
