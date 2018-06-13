import { discover } from "./api";
import { DiscoverParams } from "./Interfaces";

const resolvers = {
  Query: {
    discover: async (_: any, args: DiscoverParams) => await discover(args)
  }
};

export default resolvers;
