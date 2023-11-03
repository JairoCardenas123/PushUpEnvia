const express = require('express');
const router = express.Router();
const {obtenerRutas, deleteRutas,postRutas,putRutas} = require('../Controllers/Rutas.controllers.js')

router.get('/', obtenerRutas)

router.delete('/:id', postRutas)

router.post('/', deleteRutas)

router.put('/:id', putRutas)




module.exports = router