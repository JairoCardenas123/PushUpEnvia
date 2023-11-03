const express = require('express');
const router = express.Router();
const {obtenerMetodoEnvio,postMetodoEnvio,deleteMetodoEnvio,putMetodoEnvio} = require('../Controllers/MetodoEnvios.controllers.js'); 

// Ruta para obtener d los dMetodoEnvio
router.get('/', obtenerMetodoEnvio);

router.delete('/:id',deleteMetodoEnvio)

router.post('/',postMetodoEnvio)

router.put('/:id',putMetodoEnvio)




module.exports = router;
