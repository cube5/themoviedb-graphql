# Graphql [The Movie DB API](https://www.themoviedb.org/documentation/api) wrapper example.

## Summary

This project shows how to wrap a rest API to use it as a GraphQL endpoint. This may be not the perfect implementation, but I did it the simplier I could.

The project uses Apollo Server, Typescript, Babel, graphql-cli, etc.

## Npm Tasks

### Runs development server

Uses webpack to compile and nodemon to run the server.

```bash
npm start
```

### Generates typings from schema.graphql

It generates the necesary bindings for Typescript in a `.ts` file as described in `.graphqlconfig.yaml`.

```bash
npm run graphql:codegen
```

### Tests

Not yet implemented.
