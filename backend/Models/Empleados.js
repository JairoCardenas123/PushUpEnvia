const { Schema, model } = require('mongoose');

const empleadosSchema = Schema(
  {
    Nombre: {
      type: String,
      required: true,
      trim: true,
    },
    Puesto: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Empleados = model('empleados', empleadosSchema);

module.exports = Empleados;
