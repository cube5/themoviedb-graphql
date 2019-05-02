import { makeBindingClass, Options } from 'graphql-binding'
import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import * as schema from  './schema.graphql'

export interface Query {
    discover: <T = Discover | null>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    search: <T = Search | null>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    movie: <T = Movie | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
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
  new(...args: any[]): T
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

export interface DiscoverMoviesInput {
  language?: String | null
  sort_by?: SortBy | null
  include_adult?: Boolean | null
  include_video?: Boolean | null
  page?: Int | null
}

export interface DiscoverTvShowsInput {
  language?: String | null
  sort_by?: SortBy | null
  include_adult?: Boolean | null
  include_video?: Boolean | null
  page?: Int | null
}

export interface SearchInput {
  query: String
  language?: String | null
  year?: Int | null
  page?: Int | null
}

export interface Discover {
  movies?: PaginatedMoviesResponse | null
  tvShows?: PaginatedTVShowsResponse | null
}

export interface Genre {
  id?: ID_Output | null
  name?: String | null
}

export interface Movie {
  id?: ID_Output | null
  adult?: Boolean | null
  backdrop_path?: String | null
  belongs_to_collection?: String | null
  budget?: Int | null
  genres?: Array<Genre | null> | null
  homepage?: String | null
  imdb_id?: String | null
  original_language?: String | null
  original_title?: String | null
  overview?: String | null
  popularity?: Float | null
  poster_path?: String | null
  production_companies?: Array<ProductionCompany | null> | null
  production_countries?: Array<ProductionCountry | null> | null
  release_date?: String | null
  revenue?: Int | null
  runtime?: Int | null
  spoken_languages?: Array<SpokenLanguage | null> | null
  status?: MovieStatus | null
  tagline?: String | null
  title?: String | null
  video?: Boolean | null
  vote_average?: Float | null
  vote_count?: Int | null
}

export interface MovieDiscover {
  id?: ID_Output | null
  adult?: Boolean | null
  backdrop_path?: String | null
  genre_ids?: Array<Int | null> | null
  original_language?: String | null
  original_title?: String | null
  overview?: String | null
  popularity?: Float | null
  poster_path?: String | null
  release_date?: String | null
  title?: String | null
  video?: Boolean | null
  vote_average?: Float | null
  vote_count?: Int | null
}

export interface PaginatedMoviesResponse {
  page?: Int | null
  results?: Array<MovieDiscover | null> | null
  total_results?: Int | null
  total_pages?: Int | null
}

export interface PaginatedTVShowsResponse {
  page?: Int | null
  results?: Array<TVShow | null> | null
  total_results?: Int | null
  total_pages?: Int | null
}

export interface ProductionCompany {
  id: ID_Output
  logo_path?: String | null
  name?: String | null
  origin_country?: String | null
}

export interface ProductionCountry {
  iso_3166_1?: String | null
  name?: String | null
}

export interface Search {
  movies?: PaginatedMoviesResponse | null
  tvShows?: PaginatedTVShowsResponse | null
}

export interface SpokenLanguage {
  iso_639_1?: String | null
  name?: String | null
}

export interface TVShow {
  id?: ID_Output | null
  backdrop_path?: String | null
  first_air_date?: String | null
  genre_ids?: Array<Int | null> | null
  name?: String | null
  overview?: String | null
  origin_country?: Array<String | null> | null
  original_language?: String | null
  original_name?: String | null
  popularity?: Float | null
  poster_path?: String | null
  vote_average?: Float | null
  vote_count?: Int | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string