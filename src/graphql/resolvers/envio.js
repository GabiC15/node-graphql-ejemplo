import Envio from "./../../db/models/envio.js";

export default {
  Query: {
    envios: () => Envio.findAll(),
    envio: (parent, args) => Envio.findByPk(args.id, { include: "pedido" }),
  },

  Mutation: {
    crearEnvio: (parent, args) => Envio.create(args.input),
    actualizarEnvio: async (parent, args) => {
      const envio = await Envio.update(args.input, {
        where: { id: args.id },
        returning: true,
      });
      return envio[1][0];
    },
    eliminarEnvio: (parent, args) => Envio.destroy({ where: { id: args.id } }),
  },
};
