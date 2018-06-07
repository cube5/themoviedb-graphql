import fetch from "node-fetch";

const API_VERSION = process.env.API_VERSION;
const API_KEY = process.env.API_KEY;
const baseUrl = `https://api.themoviedb.org/${API_VERSION}/?API_KEY=${API_KEY}`;

export const search = ({
  language,
  region,
  sort_by,
  include_adult,
  include_video,
  page
}) => {};

export const discover = () => {};

export const find = () => {};
