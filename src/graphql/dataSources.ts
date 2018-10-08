import DiscoverAPI from "@/rest-datasource/discover";
import SearchAPI from "@/rest-datasource/search";
import MovieAPI from "@/rest-datasource/movie";

export interface IDataSources {
  movieAPI: MovieAPI;
  discoverAPI: DiscoverAPI;
  searchAPI: SearchAPI;
}

export default () => ({
  movieAPI: new MovieAPI(),
  discoverAPI: new DiscoverAPI(),
  searchAPI: new SearchAPI()
});
