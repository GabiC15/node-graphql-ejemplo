import gql from "graphql-tag";

export default gql`
  type LineaCarrito {
    id: Int!
    cantidad: Int
    carrito: Carrito
    producto: Producto
  }

  extend type Query {
    lineasCarrito: [LineaCarrito]
    lineaCarrito(id: Int!): LineaCarrito
  }

  extend type Mutation {
    crearLineaCarrito(input: LineaCarritoInput!): LineaCarrito
    actualizarLineaCarrito(id: Int!, input: LineaCarritoInput!): LineaCarrito
    eliminarLineaCarrito(id: Int!): Boolean
  }

  input LineaCarritoInput {
    cantidad: Int
    carrito_id: Int
    producto_id: Int
  }
`;