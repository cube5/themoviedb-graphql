/**
 * This file is to be used by the graphql-cli codegen command,
 * as described in the .graphqlconfig.yaml file.
 *
 * It breaks if imported as a `js` module.
 */

import { readFileSync } from "fs";
import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: readFileSync(__dirname + "/generated/schema.graphql", "utf-8"),
  resolverValidationOptions: {
    requireResolversForResolveType: false
  }
});

export default schema;
