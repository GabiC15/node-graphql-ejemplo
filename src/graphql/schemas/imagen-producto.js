import gql from "graphql-tag";

export default gql`
  type ImagenProducto {
    id: Int!
    path: String
    producto: Producto
  }

  extend type Query {
    imagenesProducto: [ImagenProducto]
    imagenProducto(id: Int!): ImagenProducto
  }

  extend type Mutation {
    crearImagenProducto(input: ImagenProductoInput!): ImagenProducto
    actualizarImagenProducto(id: Int!, input: ImagenProductoInput!): ImagenProducto
    eliminarImagenProducto(id: Int!): Boolean
  }

  input ImagenProductoInput {
    path: String
    producto_id: Int
  }
`;