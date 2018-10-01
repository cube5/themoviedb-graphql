import { ApolloServer } from "apollo-server";

import typeDefs from "@/graphql/schema.graphql";
import resolvers from "@/graphql/resolvers";
import DiscoverAPI from "@/rest-api/discover";
import SearchAPI from "@/rest-api/search";
import MovieAPI from "@/rest-api/movie";

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
