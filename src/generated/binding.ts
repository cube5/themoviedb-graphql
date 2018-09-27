import { makeBindingClass, Options } from 'graphql-binding'
import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import schema from  '../graphql/schema'

export interface Query {
    movie: <T = MovieDetail | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    discover: <T = PaginatedMoviesResponse>(args: { language?: String, sort_by?: SortBy, include_adult?: Boolean, include_video?: Boolean, page?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    search: <T = PaginatedMoviesResponse>(args: { query: String, year?: Int, include_adult?: Boolean, page?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {}

export interface Subscription {}

export interface Binding {
  query: Query
  mutation: Mutation
  subscription: Subscription
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
      [key: string]: any;
  }, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
  delegateSubscription(fieldName: string, args?: {
      [key: string]: any;
  }, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
  getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(...args): T
}

export const Binding = makeBindingClass<BindingConstructor<Binding>>({ schema })

/**
 * Types
*/

export type MovieStatus =   'RUMORED' |
  'PLANNED' |
  'IN_PRODUCTION' |
  'POST_PRODUCTION' |
  'RELEASED' |
  'CANCELED'

export type SortBy =   'POPULARITY_ASC' |
  'POPULARITY_DESC' |
  'RELEASE_DATE_ASC' |
  'RELEASE_DATE_DESC' |
  'REVENUE_ASC' |
  'REVENUE_DESC' |
  'PRIMARY_RELEASE_DATE_ASC' |
  'PRIMARY_RELEASE_DATE_DESC' |
  'ORIGINAL_TITLE_ASC' |
  'ORIGINAL_TITLE_DESC' |
  'VOTE_AVERAGE_ASC' |
  'VOTE_AVERAGE_DESC' |
  'VOTE_COUNT_ASC' |
  'VOTE_COUNT_DESC'

export interface ProductionCompany {
  id: ID_Output
  logo_path?: String
  name?: String
  origin_country?: String
}

export interface Movie {
  id?: ID_Output
  adult?: Boolean
  backdrop_path?: String
  genre_ids?: Int[]
  original_language?: String
  original_title?: String
  overview?: String
  popularity?: Float
  poster_path?: String
  vote_count?: Int
  release_date?: String
  title?: String
  video?: Boolean
  vote_average?: Float
}

export interface PaginatedMoviesResponse {
  page?: Int
  results?: Movie[]
  total_results?: Int
  total_pages?: Int
}

export interface SpokenLanguage {
  iso_639_1?: String
  name?: String
}

export interface ProductionCountry {
  iso_3166_1?: String
  name?: String
}

export interface MovieDetail {
  id?: ID_Output
  adult?: Boolean
  backdrop_path?: String
  belongs_to_collection?: String
  budget?: Int
  genres?: Genre[]
  homepage?: String
  imdb_id?: String
  original_language?: String
  original_title?: String
  overview?: String
  popularity?: Float
  poster_path?: String
  production_companies?: ProductionCompany[]
  production_countries?: ProductionCountry[]
  release_date?: String
  revenue?: Int
  runtime?: Int
  spoken_languages?: SpokenLanguage[]
  status?: MovieStatus
  tagline?: String
  title?: String
  video?: Boolean
  vote_average?: Float
  vote_count?: Int
}

export interface Genre {
  id?: ID_Output
  name?: String
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number