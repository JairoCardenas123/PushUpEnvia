const express = require('express');
const router = express.Router();
const {obtenerEnvios,postEnvio,deleteEnvio,putEnvio} = require('../Controllers/Envios.controllers.js'); 

// Ruta para obtener d los dMetodoEnvio
router.get('/', obtenerEnvios);

router.delete('/:id',deleteEnvio)

router.post('/',postEnvio)

router.put('/:id',putEnvio)

module.exports = router