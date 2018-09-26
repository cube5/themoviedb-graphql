import { makeBindingClass, Options } from 'graphql-binding'
import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import schema from  '../graphql/schema'

export interface Query {
    discover: <T = DiscoverResponse>(args: { language?: String, sort_by?: SortBy, include_adult?: Boolean, include_video?: Boolean, page?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
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

export interface Movie {
  vote_count?: Int
  id: ID_Output
  video?: Boolean
  vote_average?: Float
  title?: String
  popularity?: Float
  poster_path?: String
  original_language?: String
  original_title?: String
  genre_ids?: Int[]
  backdrop_path?: String
  adult?: Boolean
  overview?: String
  release_date?: String
}

export interface DiscoverResponse {
  page?: Int
  results?: Movie[]
  total_results?: Int
  total_pages?: Int
  status_message?: String
  status_code?: Int
}

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
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
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string