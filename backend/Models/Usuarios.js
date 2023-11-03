const { Schema, model } = require('mongoose');

const usuarioSchema = Schema(
  {
    Nombre: {
      type: String,
      required: true,
      trim: true,
    },
    Apellido: {
      type: String,
      required: true,
      trim: true,
    },
    Edad: {
      type: Number,
      required: true,
    },
    Direccion: {
      type: String,
      required: true,
      trim: true,
    },
    Cedula: {
      type: String,
      required: true,
      trim: true,
    },
    IdMunicipio: {
      type: Schema.Types.ObjectId,
      ref: 'Municipio', // Nombre del modelo de Municipio si lo tienes
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Usuarios = model('usuarios', usuarioSchema);

module.exports = Usuarios;
