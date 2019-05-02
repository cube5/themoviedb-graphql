import gql from "graphql-tag";

export default gql`
  input SearchInput {
    query: String!
    language: String
    year: Int
    page: Int
  }

  type Search {
    movies(input: SearchInput): PaginatedMoviesResponse
    tvShows(input: SearchInput): PaginatedTVShowsResponse
  }
`;
