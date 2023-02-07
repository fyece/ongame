import axios from "axios";

const API_KEY = "d418b29a189e4419ba2c9e9f686ecbb5";

const instance = axios.create({
  baseURL: "https://api.rawg.io/api/",
  headers: {
    "Content-Type": "application/json",
    // Accept: "*",
  },
  withCredentials: false,
});

axios.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["key"] = API_KEY;
  // config.params["page_size"] = 100;
  // config.params["ordering"] = "rating";
  return config;
});

export default instance;
