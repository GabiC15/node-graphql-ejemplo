import gql from "graphql-tag";

export default gql`
  type Envio {
    id: Int!
    direccion: String
    costo: Float
    entregado: Boolean
    codigoSeguimiento: String
    pedido: Pedido
  }

  extend type Query {
    envios: [Envio]
    envio(id: Int!): Envio
  }

  extend type Mutation {
    crearEnvio(input: EnvioInput!): Envio
    actualizarEnvio(id: Int!, input: EnvioInput!): Envio
    eliminarEnvio(id: Int!): Boolean
  }

  input EnvioInput {
    direccion: String
    costo: Float
    entregado: Boolean
    codigoSeguimiento: String
    pedido_id: Int
  }
`;