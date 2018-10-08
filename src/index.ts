import { ApolloServer } from "apollo-server";

import typeDefs from "@/generated/schema.graphql";
import resolvers from "@/graphql/resolvers";
import dataSources from "@/graphql/dataSources";

const API_KEY = process.env.API_KEY;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { API_KEY },
  dataSources
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
