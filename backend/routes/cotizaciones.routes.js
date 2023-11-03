const express = require('express');
const router = express.Router();
const {obtenerCotizaciones,postCotizacion,deleteCotizacion,putCotizacion} = require('../Controllers/Cotizaciones.controllers.js'); 

// Ruta para obtener d los MetododCotizaciones
router.get('/', obtenerCotizaciones);

router.delete('/:id',deleteCotizacion)

router.post('/',postCotizacion)

router.put('/:id',putCotizacion)

module.exports = router