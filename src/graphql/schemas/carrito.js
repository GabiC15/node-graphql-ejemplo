import gql from "graphql-tag";

export default gql`
  type Carrito {
    id: Int!
    usuario: Usuario
    lineas_carrito: [LineaCarrito]
  }

  extend type Query {
    carrito(id: Int!): Carrito
  }

  extend type Mutation {
    crearCarrito(usuario_id: Int!): Carrito
    actualizarCarrito(id: Int!, usuario_id: Int!): Carrito
    cleanCarrito(id: Int!): Boolean
  }
`;
