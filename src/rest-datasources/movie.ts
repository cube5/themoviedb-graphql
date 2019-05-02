import TheMovieDBAPI from "./";
import { MovieDiscover } from "../generated/schema";

export default class MovieAPI extends TheMovieDBAPI {
  public async fetchMovie(id: string): Promise<MovieDiscover> {
    return this.get(`movie/${id}`);
  }
}
