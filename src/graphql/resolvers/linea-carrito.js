import LineaCarrito from "./../../db/models/linea_carrito.js";

export default {
  Query: {
    lineasCarrito: () => LineaCarrito.findAll(),
    lineaCarrito: (parent, args, contextValue, info) => {
      return LineaCarrito.findByPk(args.id, { include: "producto" });
    },
  },

  Mutation: {
    crearLineaCarrito: (parent, args) => LineaCarrito.create(args.input),
    actualizarLineaCarrito: (parent, args) =>
      LineaCarrito.update(args.input, { where: { id: args.id } }),
    eliminarLineaCarrito: (parent, args) =>
      LineaCarrito.destroy({ where: { id: args.id } }),
  },
};
