const typeDefs: string = `
  type Query {
    discover(
      language: String
      region: String
      sort_by: String
      include_adult: String
      include_video: String
      page: Int
    ): [Discover]
  }

  type Discover {
    vote_count: Int
    id: ID!
    video: Boolean
    vote_average: Float
    title: String
    popularity: Float
    poster_path: String
    original_language: String
    original_title: String
    genre_ids: [Int]
    backdrop_path: String
    adult: Boolean
    overview: String
    release_date: String
  }
`;

export default typeDefs;
