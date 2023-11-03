const express = require('express');
const router = express.Router();
const {obtenerContinentes,postContinente,deleteContinente,putContinente} = require('../Controllers/Continentes.controllers.js'); 

// Ruta para obtener d los MetododContinentes
router.get('/', obtenerContinentes);

router.delete('/:id',deleteContinente)

router.post('/',postContinente)

router.put('/:id',putContinente)

module.exports = router