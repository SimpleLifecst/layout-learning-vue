import axios from "axios";
const BASE_URL = "/api";

export default function request(config: any) {

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    }
  });

  return axiosInstance(config)
}
