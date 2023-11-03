const { Schema, model } = require('mongoose');

const enviosSchema = Schema(
  {
    FechaEnvio: {
      type: String,
      required: true,
      trim: true,
    },
    Destino: {
      type: String,
      required: true,
      trim: true,
    },
    Peso: {
      type: String,
      required: true,
      trim: true,
    },
    Estado: {
      type: String,
      required: true,
      trim: true,
    },
    IdUsuario: {
      type: Schema.Types.ObjectId,
      ref: 'Usuarios', // Nombre del modelo de Usuarios si lo tienes
      required: true,
    },
    IdRuta: {
      type: Schema.Types.ObjectId,
      ref: 'Rutas', // Nombre del modelo de Rutas si lo tienes
      required: true,
    },
    IdMetodoEnvio: {
      type: Schema.Types.ObjectId,
      ref: 'MetodoEnvio', // Nombre del modelo de MetodoEnvio si lo tienes
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Envios = model('envios', enviosSchema);

module.exports = Envios;
