import {
  DiscoverMoviesInput,
  MovieDiscover,
  DiscoverTvShowsInput
} from "@/generated/schema";

const Discover = {
  async movies(
    _: any,
    args: { input: DiscoverMoviesInput },
    { dataSources }
  ): Promise<MovieDiscover> {
    return dataSources.discoverAPI.fetchMovies(args.input);
  },
  async tvShows(
    _: any,
    args: { input: DiscoverTvShowsInput },
    { dataSources }
  ): Promise<MovieDiscover> {
    return dataSources.discoverAPI.fetchTvShows(args.input);
  }
};

export { Discover };
