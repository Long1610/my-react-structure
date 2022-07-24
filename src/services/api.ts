import axios from "axios";
import TokenService from "./token.service";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// instance.interceptors.request.use(
//   (config) => {
//     const token = TokenService.getLocalAccessToken();
//     if (token) {
//       config.headers!["Authorization"] = "Bearer " + token;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default instance;
