import gql from "graphql-tag";

export default gql`
  type ItemPedido {
    id: Int!
    cantidad: Int
    pedido: Pedido
    producto: Producto
  }

  extend type Query {
    itemPedidos: [ItemPedido]
    itemPedido(id: Int!): ItemPedido
  }

  extend type Mutation {
    crearItemPedido(input: ItemPedidoInput!): ItemPedido
    actualizarItemPedido(id: Int!, input: ItemPedidoInput!): ItemPedido
    eliminarItemPedido(id: Int!): Boolean
  }
  
  input ItemPedidoInput {
    cantidad: Int
    pedido_id: Int
    producto_id: Int
  }
`;