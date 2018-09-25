import * as api from "../api";
import { IDiscoverParams, IDiscoverResponse } from "../interfaces/IDiscover";

async function discover(
  _: any,
  args: IDiscoverParams
): Promise<IDiscoverResponse> {
  return api.discover(args);
}

const resolvers = {
  Query: {
    discover
  }
};

export default resolvers;
