const Continentes = require('../Models/Continentes.js');

const postContinente = async (req, res) => {
  try {
    const { Descripcion } = req.body;
    const continente = new Continentes({ Descripcion });

    // Guardar en MongoDB
    await continente.save();
    res.json({
      message: 'Continente creado con éxito',
      continente,
    });
  } catch (error) {
    console.error('Error al crear un continente:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const putContinente = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const continente = await Continentes.findByIdAndUpdate(id, resto, { new: true });

    if (!continente) {
      return res.status(404).json({ message: 'No se encontró el continente' });
    }

    res.json({
      message: 'Continente actualizado con éxito',
      continente,
    });
  } catch (error) {
    console.error('Error al actualizar un continente:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const deleteContinente = async (req, res) => {
  try {
    const { id } = req.params;
    const continente = await Continentes.findByIdAndRemove(id);

    if (!continente) {
      return res.status(404).json({ message: 'No se encontró el continente' });
    }

    res.json({ message: 'Continente borrado correctamente' });
  } catch (error) {
    console.error('Error al borrar un continente:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const obtenerContinentes = async (req, res) => {
    try {
      const continentes = await Continentes.find().limit(100); // Limita a 100 resultados
      res.json(continentes);
    } catch (error) {
      console.error('Error al obtener las continentes:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };

  module.exports = {
    postContinente,
    putContinente,
    deleteContinente,
    obtenerContinentes
  }