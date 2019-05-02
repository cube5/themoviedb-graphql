import { movie } from "./movie";
import { searchMovies, searchTvShows } from "./search";
import { discoverMovies, discoverTvShows } from "./discover";

/**
 * Enums map to handle internal values
 *
 * @see https://www.apollographql.com/docs/apollo-server/v2/features/scalars-enums.html#internal-values
 */
const Enums = {
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
  }
};

/**
 * Using resolver map for graphql types defined in the schema.
 *
 * @see https://www.apollographql.com/docs/apollo-server/v2/essentials/data.html#resolver-map
 */
const resolvers = {
  ...Enums,
  Search: {
    movies: searchMovies,
    tvShows: searchTvShows
  },
  Discover: {
    movies: discoverMovies,
    tvShows: discoverTvShows
  },
  Query: {
    discover: async () => ({}), // empty but needed since it's resolved by Discover
    search: async () => ({}), // empty but needed since it's resolved by Search
    movie
  }
};

export default resolvers;
