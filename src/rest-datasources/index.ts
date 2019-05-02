import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

export default class TheMovieDBAPI extends RESTDataSource {
  public baseURL = "https://api.themoviedb.org/3/";

  public willSendRequest(req: RequestOptions) {
    console.log("request", req);
    req.params.set("api_key", this.context.API_KEY);
  }
}
