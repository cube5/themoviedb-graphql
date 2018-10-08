import {
  DiscoverMoviesInput,
  DiscoverTvShowsInput,
  PaginatedMoviesResponse,
  PaginatedTVShowsResponse
} from "@/generated/schema";
import { IDataSources } from "@/graphql/dataSources";

const Discover = {
  async movies(
    _: any,
    args: { input: DiscoverMoviesInput },
    { dataSources }: { dataSources: IDataSources }
  ): Promise<PaginatedMoviesResponse> {
    return dataSources.discoverAPI.fetchMovies(args.input);
  },
  async tvShows(
    _: any,
    args: { input: DiscoverTvShowsInput },
    { dataSources }
  ): Promise<PaginatedTVShowsResponse> {
    return dataSources.discoverAPI.fetchTvShows(args.input);
  }
};

export { Discover };
