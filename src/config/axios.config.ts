import { AxiosRequestConfig } from "axios";

const baseURL: string =
  process.env.REACT_APP_BASE_URL || "http://localhost:8000/api/v1";

export const axiosConfig: AxiosRequestConfig = {
  baseURL,
};
