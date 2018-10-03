# Graphql [The Movie DB API](https://www.themoviedb.org/documentation/api) wrapper example.

## Summary

This project shows how to wrap a rest API to use it as a GraphQL endpoint. This may be not the perfect implementation, but I did it the simplier I could.

Each ThMDB endpoint (examples: _/search, /discover_) is in its own folder to avoid having one single big ass class (see [apollo-datasource-rest](https://www.apollographql.com/docs/apollo-server/features/data-sources.html#REST-Data-Source)).

The project uses Apollo Server, Typescript, Babel, graphql-cli, etc.

## Npm Tasks

### Runs development server

Runs `gql:codegen` and `gql:prepare` to generate necessary files and then runs webpack in watch mode with the nodemon plugin to start the server.

```bash
npm run develop
```

### Generates typings from schema.graphql using the `codegen` cmd from [graphql-cli](https://github.com/graphql-cli/graphql-cli#readme)

It generates the necesary bindings for Typescript in a `.ts` file as described in `.graphqlconfig.yaml`.

```bash
npm run gql:codegen
```

### Bundles the `*.graphql` files into one using the `prepare` cmd from [graphql-cli](https://github.com/graphql-cli/graphql-cli#readme)

It generates the necesary bindings for Typescript in a `.ts` file as described in `.graphqlconfig.yaml`.

```bash
npm run gql:prepare
```

### Tests (in watch mode)

Not yet implemented, but it is supposed to run the tests using [ava][https://github.com/avajs/ava] and [nyc](https://github.com/istanbuljs/nyc) for code coverage.

```bash
npm t
```

## Developing

1. Clone the project
2. Run `npm i` to install dependencies
3. Run `npm run develop` to start the graphql playground
4. Open http://localhost:4000
5. Drink a beer
