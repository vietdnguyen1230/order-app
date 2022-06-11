import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://order-app-bay.vercel.app/api/",
});
