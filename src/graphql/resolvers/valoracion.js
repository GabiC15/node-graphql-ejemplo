import Valoracion from "../../db/models/valoracion.js";

export default {
  Query: {
    valoraciones: () => Valoracion.findAll(),
    valoracion: (parent, args) => Valoracion.findByPk(args.id),
  },

  Mutation: {
    crearValoracion: (parent, args) => Valoracion.create(args.input),
    actualizarValoracion: (parent, args) => Valoracion.update(args.input, { where: { id: args.id } }),
    eliminarValoracion: (parent, args) => Valoracion.destroy({ where: { id: args.id } }),
  }
}