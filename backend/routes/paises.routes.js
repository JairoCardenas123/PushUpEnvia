const express = require('express')
const router = express.Router()
const {obtenerPaises,deletePaises,postPaises,putPaises} = require('../Controllers/Paises.controllers.js')

router.get('/', obtenerPaises)

router.delete('/:id',deletePaises)

router.post('/',postPaises)

router.put('/:id',putPaises)




module.exports = router