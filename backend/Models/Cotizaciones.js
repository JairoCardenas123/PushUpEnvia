const { Schema, model } = require('mongoose');

const cotizacionesSchema = Schema(
  {
    Costo: {
      type: Number,
      required: true,
    },
    Fecha: {
      type: String,
      required: true,
      trim: true,
    },
    Tiempo: {
      type: String,
      required: true,
      trim: true,
    },
    IdUsuario: {
      type: Schema.Types.ObjectId,
      ref: 'Usuarios', // Nombre del modelo de Usuarios si lo tienes
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Cotizaciones = model('cotizaciones', cotizacionesSchema);

module.exports = Cotizaciones;
