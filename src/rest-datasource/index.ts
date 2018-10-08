import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

export default class TheMovieDBAPI extends RESTDataSource {
  public baseURL = "https://api.themoviedb.org/3/";

  public willSendRequest(request: RequestOptions) {
    request.params.set("api_key", this.context.API_KEY);
    console.log("request", request);
  }
}
