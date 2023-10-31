import ImagenProducto from './../../db/models/imagen_producto.js';

export default {
  Query: {
    imagenesProducto: () => ImagenProducto.findAll(),
    imagenProducto: (parent, args) => ImagenProducto.findByPk(args.id),
  },

  Mutation: {
    crearImagenProducto: (parent, args) => ImagenProducto.create(args.input),
    actualizarImagenProducto: (parent, args) => ImagenProducto.update(args.input, { where: { id: args.id } }),
    eliminarImagenProducto: (parent, args) => ImagenProducto.destroy({ where: { id: args.id } }),
  }
}