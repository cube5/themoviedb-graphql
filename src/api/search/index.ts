import TheMovieDBAPI from "../../api";
import { PaginatedMoviesResponse } from "../../generated/binding";

export default class SearchAPI extends TheMovieDBAPI {
  public async searchMovies(params): Promise<PaginatedMoviesResponse> {
    return this.get("search/movie", params);
  }
}
