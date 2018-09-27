import TheMovieDBAPI from "../";
import { PaginatedMoviesResponse } from "../../generated/binding";

export default class MovieAPI extends TheMovieDBAPI {
  public async fetchMovie(id: string): Promise<PaginatedMoviesResponse> {
    return this.get(`movie/${id}`);
  }
}
