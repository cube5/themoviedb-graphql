import { ApolloServer } from "apollo-server";
import typeDefs from "./graphql/schema.graphql";
import resolvers from "./graphql/resolvers";
import DiscoverAPI from "./api/discover";
import SearchAPI from "./api/search";
import MovieAPI from "./api/movie";

const API_KEY = process.env.API_KEY;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      movieAPI: new MovieAPI(),
      discoverAPI: new DiscoverAPI(),
      searchAPI: new SearchAPI()
    };
  },
  context: { API_KEY },
  debug: true
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
