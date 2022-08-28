import { createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../../models";

interface Action {
  payload: ProductModel;
}

interface State {
  products: ProductModel[];
}

const initialState: State = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, { payload }: Action) => {
      state.products.push(payload);
    },
  },
});

export const { addProduct } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
