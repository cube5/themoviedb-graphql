import { fetchById } from "./api";

const resolvers = {
  Query: {
    movie: async (_, { imdbID, t, type, y, plot, r }) =>
      await fetchById({ i: imdbID, t, type, y, plot, r })
  }
};

export default resolvers;
