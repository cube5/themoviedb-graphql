import { SearchInput, PaginatedMoviesResponse } from "@/generated/schema";

const Search = {
  movies: async (
    _: any,
    args: { input: SearchInput },
    { dataSources }
  ): Promise<PaginatedMoviesResponse> =>
    dataSources.searchAPI.searchMovies(args.input),
  tvShows: async (
    _: any,
    args: { input: SearchInput },
    { dataSources }
  ): Promise<PaginatedMoviesResponse> =>
    dataSources.searchAPI.searchTvShows(args.input)
};

export { Search };
