# Graphql [The Movie DB API](https://www.themoviedb.org/documentation/api) wrapper example.

## Summary

This project shows how to wrap a rest API to use it as a GraphQL endpoint. This may be not the perfect implementation, but I did it the simplier I could.

Each ThMDB endpoint (examples: _/search_, _/discover_) is in its own folder (`rest-datasources/`) to avoid having one single big ass class (see [apollo-datasource-rest](https://www.apollographql.com/docs/apollo-server/features/data-sources.html#REST-Data-Source)).

The project uses Apollo Server, Typescript, Babel, graphql-cli, etc.

## Npm Tasks

### Runs development server

```bash
yarn dev
```

\* You can also use `now dev` if you have [now](https://zeit.co/now) installed.

### Generates typings from `src/generated/schema.graphql`

It generates the necesary bindings for Typescript in a `.ts` file as described in `.graphqlconfig.yaml`.
It is meant to be ran only after running `gql:prepare`

```bash
yarn gql:codegen
```

### Fetches the remote schema from a server into `src/generated/schema.graphql` using the [graphql-cli](https://github.com/graphql-cli/graphql-cli#readme)

In this case the dev server. The downside is that you have to run the dev server first and then run this task in another terminal tab.

```bash
yarn gql:get-schema
```

## Developing

1. Clone the project
2. Run `yarn install` to install dependencies
3. Run `yarn dev` to start the graphql playground
4. Open http://localhost:3000
5. Drink a beer
