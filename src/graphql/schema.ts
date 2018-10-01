import { readFileSync } from "fs";
import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: readFileSync(__dirname + "/schema.graphql", "utf-8"),
  resolverValidationOptions: {
    requireResolversForResolveType: false
  }
});

export default schema;
