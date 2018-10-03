import TheMovieDBAPI from "@/rest-datasource";
import { PaginatedMoviesResponse } from "@/generated/schema";

export default class MovieAPI extends TheMovieDBAPI {
  public async fetchMovie(id: string): Promise<PaginatedMoviesResponse> {
    return this.get(`movie/${id}`);
  }
}
