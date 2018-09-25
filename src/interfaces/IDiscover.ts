import IMovie from "./IMovie";
import IAPIResponse from "./IAPIResponse";

type SortBy =
  | "popularity.asc"
  | "popularity.desc"
  | "release_date.asc"
  | "release_date.desc"
  | "revenue.asc"
  | "revenue.desc"
  | "primary_release_date.asc"
  | "primary_release_date.desc"
  | "original_title.asc"
  | "original_title.desc"
  | "vote_average.asc"
  | "vote_average.desc"
  | "vote_count.asc"
  | "vote_count.desc";

export interface IDiscoverParams {
  language: string; // "en-US"
  sort_by: SortBy;
  include_adult: boolean;
  include_video: boolean;
  page: number;
  api_key: string;
}

export interface IDiscoverResponse extends IAPIResponse<IMovie> {}
