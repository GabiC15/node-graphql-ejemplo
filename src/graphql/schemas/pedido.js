import gql from "graphql-tag";

export default gql`
  type Pedido {
    id: Int!
    fecha: Date
    total: Float
    pagado: Boolean
    usuario: Usuario
    envio: Envio
  }

  extend type Query {
    pedidos: [Pedido]
    pedido(id: Int!): Pedido
  }

  extend type Mutation {
    crearPedido(input: PedidoInput!): Pedido
    actualizarPedido(id: Int!, input: PedidoInput!): Pedido
    eliminarPedido(id: Int!): Boolean
  }

  input PedidoInput {
    fecha: String
    total: Float
    pagado: Boolean
    usuario_id: Int
    envio_id: Int
  }
`;