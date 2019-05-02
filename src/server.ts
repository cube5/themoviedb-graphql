import { ApolloServer } from "apollo-server-micro";

import "./dotenv";
import schema from "./schema";
import dataSources from "./dataSources";

const API_KEY = process.env.API_KEY;

const server = new ApolloServer({
  schema,
  dataSources,
  playground: true,
  introspection: true,
  context: () => ({ API_KEY })
});

const handler = server.createHandler();

module.exports = handler;
