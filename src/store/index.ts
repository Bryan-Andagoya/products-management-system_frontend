import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./products/products.slice";

export const store = configureStore({
  reducer: productsReducer,
});

export * from "./products/products.slice";
