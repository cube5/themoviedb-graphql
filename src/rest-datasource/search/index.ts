import TheMovieDBAPI from "@/rest-datasource";
import { PaginatedMoviesResponse } from "@/generated/schema";

export default class SearchAPI extends TheMovieDBAPI {
  public async searchMovies(params): Promise<PaginatedMoviesResponse> {
    return this.get("search/movie", params);
  }

  public async searchTvShows(params): Promise<PaginatedMoviesResponse> {
    return this.get("search/tv", params);
  }
}
