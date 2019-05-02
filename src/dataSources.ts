import MovieAPI from "./rest-datasources/movie";
import SearchAPI from "./rest-datasources/search";
import DiscoverAPI from "./rest-datasources/discover";

export interface IDataSources {
  movieAPI: MovieAPI;
  searchAPI: SearchAPI;
  discoverAPI: DiscoverAPI;
}

export default function dataSources() {
  return {
    movieAPI: new MovieAPI(),
    searchAPI: new SearchAPI(),
    discoverAPI: new DiscoverAPI()
  };
}
