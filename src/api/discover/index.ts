import fetch from "node-fetch";
import { baseUrl } from "../../api";
import { queryParams } from "../utils";
import { PaginatedMoviesResponse } from "../../generated/binding";

export default async function(input): Promise<PaginatedMoviesResponse> {
  try {
    const url = `${baseUrl}/discover/movie?${queryParams(input)}`;
    console.log("url", url);
    const response: PaginatedMoviesResponse = await fetch(url).then((res) =>
      res.json()
    );
    return response;
  } catch (err) {
    console.error("Error ocurred fetching discover", err);
    throw err;
  }
}
