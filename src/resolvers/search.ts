import { SearchInput, PaginatedMoviesResponse } from "../generated/schema";

export async function searchMovies(
  _: any,
  args: { input: SearchInput },
  { dataSources }
): Promise<PaginatedMoviesResponse> {
  return dataSources.searchAPI.searchMovies(args.input);
}

export async function searchTvShows(
  _: any,
  args: { input: SearchInput },
  { dataSources }
): Promise<PaginatedMoviesResponse> {
  return dataSources.searchAPI.searchTvShows(args.input);
}
