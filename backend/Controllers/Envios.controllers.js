const Envios = require('../Models/Envios.js');

const postEnvio = async (req, res) => {
  try {
    const {
      FechaEnvio,
      Destino,
      Peso,
      Estado,
      IdUsuario,
      IdRuta,
      IdMetodoEnvio,
    } = req.body;

    const envio = new Envios({
      FechaEnvio,
      Destino,
      Peso,
      Estado,
      IdUsuario,
      IdRuta,
      IdMetodoEnvio,
    });

    // Guardar en MongoDB
    await envio.save();
    res.json({
      message: 'Envío creado con éxito',
      envio,
    });
  } catch (error) {
    console.error('Error al crear un envío:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const putEnvio = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const envio = await Envios.findByIdAndUpdate(id, resto, { new: true });

    if (!envio) {
      return res.status(404).json({ message: 'No se encontró el envío' });
    }

    res.json({
      message: 'Envío actualizado con éxito',
      envio,
    });
  } catch (error) {
    console.error('Error al actualizar un envío:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const deleteEnvio = async (req, res) => {
  try {
    const { id } = req.params;
    const envio = await Envios.findByIdAndRemove(id);

    if (!envio) {
      return res.status(404).json({ message: 'No se encontró el envío' });
    }

    res.json({ message: 'Envío borrado correctamente' });
  } catch (error) {
    console.error('Error al borrar un envío:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const obtenerEnvios = async (req, res) => {
  try {
    const envios = await Envios.find().limit(100); // Limita a 100 resultados
    res.json(envios);
  } catch (error) {
    console.error('Error al obtener los envíos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = { obtenerEnvios, postEnvio, deleteEnvio, putEnvio };
