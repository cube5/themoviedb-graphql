import { API_KEY } from ".";

export function queryParams(params: any): string {
  params = { ...params, api_key: API_KEY };
  return Object.keys(params)
    .filter((key) => !!params[key])
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key]))
    .join("&");
}
