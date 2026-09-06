const Articulo = require('../models/Articulo');
 
exports.obtenerTodos = async (req, res) => {
  try {
    const articulos = await Articulo.findAll();
    res.status(200).json(articulos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener artículos', error: error.message });
  }
};
 
exports.obtenerPorId = async (req, res) => {
  try {
    const articulo = await Articulo.findByPk(req.params.id);
    if (!articulo) return res.status(404).json({ message: 'Artículo no encontrado' });
    res.status(200).json(articulo);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el artículo', error: error.message });
  }
};
 
exports.crear = async (req, res) => {
  try {
    const nuevo = await Articulo.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el artículo', error: error.message });
  }
};
 
exports.actualizar = async (req, res) => {
  try {
    const articulo = await Articulo.findByPk(req.params.id);
    if (!articulo) return res.status(404).json({ message: 'Artículo no encontrado' });
    await articulo.update(req.body);
    res.status(200).json(articulo);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar el artículo', error: error.message });
  }
};
 
exports.eliminar = async (req, res) => {
  try {
    const articulo = await Articulo.findByPk(req.params.id);
    if (!articulo) return res.status(404).json({ message: 'Artículo no encontrado' });
    await articulo.destroy();
    res.status(200).json({ message: 'Artículo eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el artículo', error: error.message });
  }
};
