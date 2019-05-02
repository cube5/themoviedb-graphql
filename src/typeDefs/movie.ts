import gql from "graphql-tag";

export default gql`
  type Movie {
    id: ID
    adult: Boolean
    backdrop_path: String
    belongs_to_collection: String
    budget: Int
    genres: [Genre]
    homepage: String
    imdb_id: String # validate
    original_language: String
    original_title: String
    overview: String
    popularity: Float
    poster_path: String
    production_companies: [ProductionCompany]
    production_countries: [ProductionCountry]
    release_date: String #validate format yyyy-mm-dd
    revenue: Int
    runtime: Int
    spoken_languages: [SpokenLanguage]
    status: MovieStatus
    tagline: String
    title: String
    video: Boolean
    vote_average: Float
    vote_count: Int
  }
`;
