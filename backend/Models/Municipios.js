const { Schema, model } = require('mongoose');

const municipiosSchema = Schema(
  {
    Descripcion: {
      type: String,
      required: true,
      trim: true,
    },
    IdPais: {
      type: Schema.Types.ObjectId,
      ref: 'Paises', // Nombre del modelo de Paises si lo tienes
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Municipios = model('municipios', municipiosSchema);

module.exports = Municipios;
