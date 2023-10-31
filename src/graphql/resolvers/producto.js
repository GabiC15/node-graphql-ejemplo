import Producto from './../../db/models/producto.js';

export default {
  Query: {
    productos: () => Producto.findAll(),
    producto: async (parent, args) =>
      Producto.findByPk(args.id, {
      include: [
        {
          model: Categoria,
          as: "categoria",
          include: [{ model: Categoria, as: "padre" }],
        },
        {
          model: ImagenProducto,
          as: "imagenes",
        },
      ],
    }),
  },

  Mutation: {
    crearProducto: (parent, args) => Producto.create(args.input),
    actualizarProducto: (parent, args) => Producto.update(args.input, { where: { id: args.id } }),
    eliminarProducto: (parent, args) => Producto.destroy({ where: { id: args.id } }),
  }
}