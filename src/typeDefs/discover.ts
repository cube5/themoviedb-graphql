import gql from "graphql-tag";

export default gql`
  input DiscoverMoviesInput {
    language: String
    sort_by: SortBy
    include_adult: Boolean
    include_video: Boolean
    page: Int
  }

  input DiscoverTvShowsInput {
    language: String
    sort_by: SortBy
    include_adult: Boolean
    include_video: Boolean
    page: Int
  }

  type Discover {
    movies(input: DiscoverMoviesInput): PaginatedMoviesResponse
    tvShows(input: DiscoverTvShowsInput): PaginatedTVShowsResponse
  }
`;
