import gql from "graphql-tag";
import { concatenateTypeDefs } from "graphql-tools";

import types from "./types";
import movie from "./movie";
import search from "./search";
import discover from "./discover";

const schema = gql`
  type Query {
    discover: Discover
    search: Search
    movie(id: ID!): Movie
  }
`;

export default concatenateTypeDefs([types, movie, search, discover, schema]);
