import fetch from "node-fetch";
import { baseUrl } from "../../api";
import { queryParams } from "../utils";
import { IDiscoverParams, IDiscoverResponse } from "../../interfaces/IDiscover";

export default async function(
  params: IDiscoverParams
): Promise<IDiscoverResponse> {
  try {
    const url = `${baseUrl}/discover/movie?${queryParams(params)}`;
    console.log("url", url);
    const response: IDiscoverResponse = await fetch(url).then((res) =>
      res.json()
    );
    return response;
  } catch (err) {
    console.error("Error ocurred fetching discover", err);
    throw err;
  }
}
