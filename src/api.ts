import fetch from "node-fetch";
import { DiscoverParams } from "./Interfaces";

require("dotenv").config();

const API_VERSION = process.env.API_VERSION;
const API_KEY = process.env.API_KEY;
const baseUrl = `https://api.themoviedb.org/${API_VERSION}`;

export const discover = async (params: DiscoverParams) => {
  try {
    const url = `${baseUrl}/discover/movie?${queryParams(params)}`;
    console.log("url", url);
    const response = await fetch(url).then(res => res.json());
    const {
      page,
      results,
      total_results: totalResults,
      total_pages: totalPages
    } = response;
    return results;
  } catch (err) {
    console.error("Error ocurred fetching discover", err);
    return [];
  }
};

export const search = () => {};

export const find = () => {};

function queryParams(params: any): string {
  params = { ...params, api_key: API_KEY };
  return Object.keys(params)
    .filter(key => !!params[key])
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(params[key]))
    .join("&");
}
