import axios from "axios";

const configuredApiUrl = import.meta.env.VITE_API_URL?.trim();

const axiosInstance = axios.create({
  baseURL: configuredApiUrl || "/api",
  withCredentials: true, // by adding this field browser will send the cookies to server automatically, on every single req
});

export default axiosInstance;
