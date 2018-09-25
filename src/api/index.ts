require("dotenv").config();
import discover from "./discover";

const API_VERSION = process.env.API_VERSION;
export const API_KEY = process.env.API_KEY;
export const baseUrl = `https://api.themoviedb.org/${API_VERSION}`;

export { discover };
