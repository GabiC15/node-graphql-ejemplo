import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import typeDefs from "./graphql/schemas/index.js"
import resolvers from "./graphql/resolvers/index.js"
import "../src/db/config/sequelize.js"

const server = new ApolloServer({ typeDefs: typeDefs, resolvers });

await server.start();

const app = express();

app.use(express.json())

app.use("/graphql", expressMiddleware(server))

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000/graphql`)
);
