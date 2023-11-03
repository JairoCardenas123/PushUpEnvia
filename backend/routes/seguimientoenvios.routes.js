const express = require('express')
const router = express.Router()
const {obtenerSeguimientoEnvios, postSeguimientoEnvios, deleteSeguimientoEnvios,putSeguimientoEnvios} = require('../Controllers/SeguimientoEnvios.controllers.js')

router.get('/', obtenerSeguimientoEnvios)

router.post('/', postSeguimientoEnvios)

router.delete('/:id', deleteSeguimientoEnvios)

router.put('/:id', putSeguimientoEnvios)




module.exports = router