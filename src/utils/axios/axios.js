import axios from "axios";

export const myFetch = axios.create({
  baseURL: "https://api.github.com/users/google/repos",
});
