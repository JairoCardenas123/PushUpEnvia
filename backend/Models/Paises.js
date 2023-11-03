const { Schema, model } = require('mongoose');

const paisesSchema = Schema(
  {
    Descripcion: {
      type: String,
      required: true,
      trim: true,
    },
    IdContinente: {
      type: Schema.Types.ObjectId,
      ref: 'Continentes', // Nombre del modelo de Continentes si lo tienes
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Paises = model('paises', paisesSchema);

module.exports = Paises;
