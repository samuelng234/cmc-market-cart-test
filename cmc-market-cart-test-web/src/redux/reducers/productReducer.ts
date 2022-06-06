import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models/product";

export type ProductsState = {
    productList: Product[]
}

export const initialState: ProductsState = {
    productList: []
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProductList(state, action: PayloadAction<Product[]>) {
            state.productList = action.payload;
        }
    }
});

export const {
    setProductList
} = productSlice.actions;

export default productSlice.reducer;