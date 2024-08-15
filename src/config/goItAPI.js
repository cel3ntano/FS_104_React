import axios from "axios";

export const goItAPI = axios.create({
  baseURL: "https://task-manager-api.goit.global/",
});

export const setToken = token => {
  goItAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  goItAPI.defaults.headers.common.Authorization = "";
};
