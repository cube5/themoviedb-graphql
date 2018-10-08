import TheMovieDBAPI from "@/rest-datasource";
import {
  PaginatedMoviesResponse,
  PaginatedTVShowsResponse
} from "@/generated/schema";

export default class DiscoverAPI extends TheMovieDBAPI {
  public async fetchMovies(params): Promise<PaginatedMoviesResponse> {
    return this.get("discover/movie", params);
  }

  public async fetchTvShows(params): Promise<PaginatedTVShowsResponse> {
    return this.get("discover/tv", params);
  }
}
