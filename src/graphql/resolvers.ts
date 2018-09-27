import { PaginatedMoviesResponse, MovieDetail } from "../generated/binding";

const resolvers = {
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
  MovieStatus: {
    RUMORED: "Rumored",
    PLANNED: "Planned",
    IN_PRODUCTION: "In Production",
    POST_PRODUCTION: "Post Production",
    RELEASED: "Released",
    CANCELED: "Canceled"
  },
  Query: {
    async movie(_: any, args: any, { dataSources }): Promise<MovieDetail> {
      return dataSources.movieAPI.fetchMovie(args.id);
    },
    async discover(
      _: any,
      args: any,
      { dataSources } // apollo server context
    ): Promise<PaginatedMoviesResponse> {
      return dataSources.discoverAPI.fetchMovies(args);
    },
    async search(
      _: any,
      args: any,
      { dataSources }
    ): Promise<PaginatedMoviesResponse> {
      return dataSources.searchAPI.searchMovies(args);
    }
  }
};

export default resolvers;
