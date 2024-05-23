import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:6000/api/v1",
});
