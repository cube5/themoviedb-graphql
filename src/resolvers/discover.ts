import {
  DiscoverMoviesInput,
  DiscoverTvShowsInput,
  PaginatedMoviesResponse,
  PaginatedTVShowsResponse
} from "../generated/schema";
import { IDataSources } from "../dataSources";

export async function discoverMovies(
  _: any,
  args: { input: DiscoverMoviesInput },
  { dataSources }: { dataSources: IDataSources }
): Promise<PaginatedMoviesResponse> {
  return dataSources.discoverAPI.fetchMovies(args.input);
}

export async function discoverTvShows(
  _: any,
  args: { input: DiscoverTvShowsInput },
  { dataSources }: { dataSources: IDataSources }
): Promise<PaginatedTVShowsResponse> {
  return dataSources.discoverAPI.fetchTvShows(args.input);
}
