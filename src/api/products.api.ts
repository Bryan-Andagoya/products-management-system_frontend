import { ProductModel, ProductsResponseModel } from "../models";
import { axiosInstance } from "./axiosInstance";

export const getAllProducts = () =>
  axiosInstance.get<ProductsResponseModel>("/products");

export const getProduct = (id: string) =>
  axiosInstance.get<ProductModel>(`/products/${id}`);

export const createProduct = (product: ProductModel) =>
  axiosInstance.post("/products", product);

export const updateProduct = (id: string, product: ProductModel) =>
  axiosInstance.put(`/products/${id}`, product);

export const deleteProduct = (id: string) =>
  axiosInstance.delete(`/products/${id}`);
