import axios from "axios";

const configuredApiUrl = import.meta.env.VITE_API_URL?.trim();
const fallbackApiUrl = import.meta.env.DEV ? "http://localhost:3000/api" : "/api";

const axiosInstance = axios.create({
  baseURL: configuredApiUrl || fallbackApiUrl,
  withCredentials: true, // by adding this field browser will send the cookies to server automatically, on every single req
});

export default axiosInstance;
