const { Router } = require('express');
const router = Router();
const controller = require('../controller/articulos.controller');
 
router.get('/', controller.obtenerTodos);
router.get('/:id', controller.obtenerPorId);
router.post('/', controller.crear);
router.put('/:id', controller.actualizar);
router.delete('/:id', controller.eliminar);
 
module.exports = router;
