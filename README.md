# Graphql [The Movie DB API](https://www.themoviedb.org/documentation/api) wrapper example.

## Summary

This project shows how to wrap a rest API to use it as a GraphQL endpoint. This may be not the perfect implementation, but I did it the simplier I could.

Each ThMDB endpoint (examples: _/search, /discover_) is in its own folder to avoid having one single big ass class (extending `apollo-datasource-rest`'s `RESTDataSource`).

The project uses Apollo Server, Typescript, Babel, graphql-cli, etc.

## Npm Tasks

### Runs development server

Uses webpack to compile and nodemon to run the server.

```bash
npm start
```

### Generates typings from schema.graphql using [graphql-cli](https://github.com/graphql-cli/graphql-cli#readme)

It generates the necesary bindings for Typescript in a `.ts` file as described in `.graphqlconfig.yaml`.

```bash
npm run graphql:codegen
```

### Tests (in watch mode)

Not yet implemented, but it is supposed to run the tests using [ava][https://github.com/avajs/ava] and [nyc](https://github.com/istanbuljs/nyc) for code coverage.

```bash
npm t
```
