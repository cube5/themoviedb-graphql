import { GraphQLServer } from "graphql-yoga";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const server = new GraphQLServer({ typeDefs, resolvers });

const options = {
  port: process.env.PORT || 4000
};

server.start(options, ({ port }) =>
  console.log(`Server is running on url http://localhost:${port}`)
);
