const express = require('express')
const router = express.Router()
const {obtenerMunicipios,deleteMunicipio,postMunicipio,putMunicipios}  = require('../Controllers/Municipios.controllers.js')

router.get('/', obtenerMunicipios)

router.delete('/:id',postMunicipio)

router.post('/',deleteMunicipio)

router.put('/:id',putMunicipios)



module.exports = router