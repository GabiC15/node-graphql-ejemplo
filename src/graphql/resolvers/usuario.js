import Usuario from './../../db/models/usuario.js';

export default {
  Query: {
    usuarios: () => Usuario.findAll(),
    usuario: (parent, args) => Usuario.findByPk(args.id),
  },

  Mutation: {
    crearUsuario: (parent, args) => Usuario.create(args.input),
    actualizarUsuario: (parent, args) => Usuario.update(args.input, { where: { id: args.id } }),
    eliminarUsuario: (parent, args) => Usuario.destroy({ where: { id: args.id } }),
  }
}