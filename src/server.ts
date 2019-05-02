import { ApolloServer } from "apollo-server";

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

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url} 🚀`);
});
