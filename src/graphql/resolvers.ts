import {
  PaginatedMoviesResponse,
  MovieDetail,
  DiscoverMoviesInput,
  DiscoverTvShowsInput
} from "@/generated/binding";

const resolvers = {
  // Enum map to handle internal values
  SortBy: {
    POPULARITY_ASC: "popularity.asc",
    POPULARITY_DESC: "popularity.desc",
    RELEASE_DATE_ASC: "release_date.asc",
    RELEASE_DATE_DESC: "release_date.desc",
    REVENUE_ASC: "revenue.asc",
    REVENUE_DESC: "revenue.desc",
    PRIMARY_RELEASE_DATE_ASC: "primary_release_date.asc",
    PRIMARY_RELEASE_DATE_DESC: "primary_release_date.desc",
    ORIGINAL_TITLE_ASC: "original_title.asc",
    ORIGINAL_TITLE_DESC: "original_title.desc",
    VOTE_AVERAGE_ASC: "vote_average.asc",
    VOTE_AVERAGE_DESC: "vote_average.desc",
    VOTE_COUNT_ASC: "vote_count.asc",
    VOTE_COUNT_DESC: "vote_count.desc"
  },
  // Enum map to handle internal values
  MovieStatus: {
    RUMORED: "Rumored",
    PLANNED: "Planned",
    IN_PRODUCTION: "In Production",
    POST_PRODUCTION: "Post Production",
    RELEASED: "Released",
    CANCELED: "Canceled"
  },
  // When the graphql type 'Discover' is requested, this will be executed
  Discover: {
    async movies(
      _: any,
      args: { input: DiscoverMoviesInput },
      { dataSources }
    ): Promise<MovieDetail> {
      return dataSources.discoverAPI.fetchMovies(args.input);
    },
    async tvShows(
      _: any,
      args: { input: DiscoverTvShowsInput },
      { dataSources }
    ): Promise<MovieDetail> {
      return dataSources.discoverAPI.fetchTvShows(args.input);
    }
  },
  Query: {
    discover: async () => ({}),
    movie: async (_: any, args: any, { dataSources }): Promise<MovieDetail> =>
      dataSources.movieAPI.fetchMovie(args.id),
    search: async (
      _: any,
      args: any,
      { dataSources }
    ): Promise<PaginatedMoviesResponse> =>
      dataSources.searchAPI.searchMovies(args)
  }
};

export default resolvers;
