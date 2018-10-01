import TheMovieDBAPI from "@/rest-api";
import { PaginatedMoviesResponse } from "@/generated/binding";

export default class DiscoverAPI extends TheMovieDBAPI {
  public async fetchMovies(params): Promise<PaginatedMoviesResponse> {
    return this.get("discover/movie", params);
  }

  public async fetchTvShows(params): Promise<PaginatedMoviesResponse> {
    return this.get("discover/tv", params);
  }
}
