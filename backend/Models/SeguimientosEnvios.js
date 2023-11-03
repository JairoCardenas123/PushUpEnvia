const { Schema, model } = require('mongoose');

const seguimientoEnviosSchema = Schema(
  {
    Descripcion: {
      type: String,
      required: true,
      trim: true,
    },
    IdEnvio: {
      type: Schema.Types.ObjectId,
      ref: 'Envio', // Nombre del modelo de Envio si lo tienes
      required: true,
    },
    IdEmpleado: {
      type: Schema.Types.ObjectId,
      ref: 'Empleado', // Nombre del modelo de Empleado si lo tienes
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const SeguimientoEnvios = model('seguimientoenvios', seguimientoEnviosSchema);

module.exports = SeguimientoEnvios;
