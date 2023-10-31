import ItemPedido from "./../../db/models/item_pedido.js";

export default {
  Query: {
    itemPedidos: () => ItemPedido.findAll(),
    itemPedido: (parent, args) =>
      ItemPedido.findByPk(args.id, { include: "producto" }),
  },

  Mutation: {
    crearItemPedido: (parent, args) => ItemPedido.create(args.input),
    actualizarItemPedido: async (parent, args) => {
      const itemPedido = await ItemPedido.update(args.input, {
        where: { id: args.id },
        returning: true,
      });
      return itemPedido[1][0];
    },
    eliminarItemPedido: (parent, args) =>
      ItemPedido.destroy({ where: { id: args.id } }),
  },
};
