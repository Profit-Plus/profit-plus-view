import axios from "axios";
import { CookiesKey, CookiesStorage } from "./cookie";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    // "Content-Type": "application/json",
  },
});

http.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    config.headers = {
      ...config.headers,
      "Content-Type": "multipart/form-data",
    };
  } else {
    config.headers = {
      ...config.headers,
      "Content-Type": "application/json",
    };
  }

  config.headers = {
    ...config.headers,
    Authorization: `${CookiesStorage.get(CookiesKey.AuthToken) ? CookiesStorage.get(CookiesKey.AuthToken) : ""}`,
  };
  return config;
});

export default http;

