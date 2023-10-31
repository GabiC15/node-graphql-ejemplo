import Pedido from "./../../db/models/pedido.js";

export default {
  Query: {
    pedidos: () => Pedido.findAll({ include: "item_pedidos" }),
    pedido: (parent, args) => Pedido.findByPk(args.id),
  },

  Mutation: {
    crearPedido: (parent, args) => Pedido.create(args.input),
    actualizarPedido: (parent, args) =>
      Pedido.update(args.input, { where: { id: args.id } }),
    eliminarPedido: (parent, args) =>
      Pedido.destroy({ where: { id: args.id } }),
  },
};
