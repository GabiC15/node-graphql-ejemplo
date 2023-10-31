import gql from "graphql-tag";

export default gql`
  type Valoracion {
    id: Int!
    texto: String
    fecha: Date
    cantidadEstrellas: Int
    producto: Producto
    usuario: Usuario
  }

  extend type Query {
    valoraciones: [Valoracion]
    valoracion(id: Int!): Valoracion
  }

  extend type Mutation {
    crearValoracion(input: ValoracionInput!): Valoracion
    actualizarValoracion(id: Int!, input: ValoracionInput!): Valoracion
    eliminarValoracion(id: Int!): Boolean
  }

  input ValoracionInput {
    texto: String
    fecha: String
    cantidadEstrellas: Int
    producto_id: Int
    usuario_id: Int
  }
`;