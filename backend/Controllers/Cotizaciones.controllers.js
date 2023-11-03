const Cotizaciones = require('../Models/Cotizaciones.js');

const postCotizacion = async (req, res) => {
  try {
    const { Costo, Fecha, Tiempo, IdUsuario } = req.body;
    const cotizacion = new Cotizaciones({ Costo, Fecha, Tiempo, IdUsuario });

    // Guardar en MongoDB
    await cotizacion.save();
    res.json({
      message: 'Cotización creada con éxito',
      cotizacion,
    });
  } catch (error) {
    console.error('Error al crear una cotización:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const putCotizacion = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const cotizacion = await Cotizaciones.findByIdAndUpdate(id, resto, { new: true });

    if (!cotizacion) {
      return res.status(404).json({ message: 'No se encontró la cotización' });
    }

    res.json({
      message: 'Cotización actualizada con éxito',
      cotizacion,
    });
  } catch (error) {
    console.error('Error al actualizar una cotización:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const deleteCotizacion = async (req, res) => {
  try {
    const { id } = req.params;
    const cotizacion = await Cotizaciones.findByIdAndRemove(id);

    if (!cotizacion) {
      return res.status(404).json({ message: 'No se encontró la cotización' });
    }

    res.json({ message: 'Cotización borrada correctamente' });
  } catch (error) {
    console.error('Error al borrar una cotización:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const obtenerCotizaciones = async (req, res) => {
  try {
    const cotizaciones = await Cotizaciones.find().limit(100); // Limita a 100 resultados
    res.json(cotizaciones);
  } catch (error) {
    console.error('Error al obtener las cotizaciones:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = { obtenerCotizaciones, postCotizacion, deleteCotizacion, putCotizacion };
