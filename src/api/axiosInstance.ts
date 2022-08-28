import axios from "axios";
import { axiosConfig } from "../config";

export const axiosInstance = axios.create(axiosConfig);
