import axios from "axios";

export const goItAPI = axios.create({
  baseURL: "https://connections-api.goit.global/",
});
