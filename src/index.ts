import { ApolloServer } from "apollo-server";

import resolvers from "@/graphql/resolvers";
import typeDefs from "@/generated/schema.graphql";
import DiscoverAPI from "@/rest-datasource/discover";
import SearchAPI from "@/rest-datasource/search";
import MovieAPI from "@/rest-datasource/movie";

const API_KEY = process.env.API_KEY;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { API_KEY },
  dataSources: () => ({
    movieAPI: new MovieAPI(),
    discoverAPI: new DiscoverAPI(),
    searchAPI: new SearchAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
