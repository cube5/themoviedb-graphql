import gql from "graphql-tag";

export default gql`
  enum SortBy {
    POPULARITY_ASC
    POPULARITY_DESC
    RELEASE_DATE_ASC
    RELEASE_DATE_DESC
    REVENUE_ASC
    REVENUE_DESC
    PRIMARY_RELEASE_DATE_ASC
    PRIMARY_RELEASE_DATE_DESC
    ORIGINAL_TITLE_ASC
    ORIGINAL_TITLE_DESC
    VOTE_AVERAGE_ASC
    VOTE_AVERAGE_DESC
    VOTE_COUNT_ASC
    VOTE_COUNT_DESC
  }

  enum MovieStatus {
    RUMORED
    PLANNED
    IN_PRODUCTION
    POST_PRODUCTION
    RELEASED
    CANCELED
  }

  type ProductionCompany {
    id: ID!
    logo_path: String
    name: String
    origin_country: String
  }

  type ProductionCountry {
    iso_3166_1: String
    name: String
  }

  type SpokenLanguage {
    iso_639_1: String
    name: String
  }

  type Genre {
    id: ID
    name: String
  }

  type TVShow {
    id: ID
    backdrop_path: String
    first_air_date: String
    genre_ids: [Int]
    name: String
    overview: String
    origin_country: [String]
    original_language: String
    original_name: String
    popularity: Float
    poster_path: String
    vote_average: Float
    vote_count: Int
  }

  type MovieDiscover {
    id: ID
    adult: Boolean
    backdrop_path: String
    genre_ids: [Int]
    original_language: String
    original_title: String
    overview: String
    popularity: Float
    poster_path: String
    release_date: String
    title: String
    video: Boolean
    vote_average: Float
    vote_count: Int
  }

  type PaginatedTVShowsResponse {
    page: Int
    results: [TVShow]
    total_results: Int
    total_pages: Int
  }

  type PaginatedMoviesResponse {
    page: Int
    results: [MovieDiscover]
    total_results: Int
    total_pages: Int
  }
`;
