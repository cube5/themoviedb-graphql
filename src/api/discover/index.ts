import fetch from "node-fetch";
import { baseUrl } from "../../api";
import { queryParams } from "../utils";
import { DiscoverResponse } from "../../generated/binding";

export default async function(input): Promise<DiscoverResponse> {
  try {
    const url = `${baseUrl}/discover/movie?${queryParams(input)}`;
    console.log("url", url);
    const response: DiscoverResponse = await fetch(url).then((res) => res.json());
    return response;
  } catch (err) {
    console.error("Error ocurred fetching discover", err);
    throw err;
  }
}
