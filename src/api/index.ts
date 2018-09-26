require("dotenv").config();
import discover from "./discover";

export const API_KEY = process.env.API_KEY;
export const baseUrl = `https://api.themoviedb.org/3`;

export { discover };
