import TheMovieDBAPI from "../";
import { PaginatedMoviesResponse } from "../../generated/binding";

export default class DiscoverAPI extends TheMovieDBAPI {
  public async fetchMovies(params): Promise<PaginatedMoviesResponse> {
    return this.get("discover/movie", params);
  }
}
