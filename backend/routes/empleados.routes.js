const express = require('express');
const router = express.Router();
const {obtenerEmpleados,postEmpleado,deleteEmpleado,putEmpleado} = require('../Controllers/Empleados.controller.js'); 

// Ruta para obtener d los MetodoEmpleado
router.get('/', obtenerEmpleados);

router.delete('/:id',deleteEmpleado)

router.post('/',postEmpleado)

router.put('/:id',putEmpleado)

module.exports = router