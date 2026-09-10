const { Router } = require('express');
const router = Router();
const controller = require('../controller/articulos.controller');
 
router.get('/', controller.obtenerTodos);//"controller" es para traernos la libreria de arriba digamos(el archivo completo de articulos.controller)
//"obtenerTodos" es el metodo del archivo (articulos.controller)

router.get('/:id', controller.obtenerPorId);
router.post('/', controller.crear);
router.put('/:id', controller.actualizar);
router.delete('/:id', controller.eliminar);
 
module.exports = router;
