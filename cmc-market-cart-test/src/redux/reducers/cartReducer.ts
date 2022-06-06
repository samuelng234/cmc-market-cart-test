import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../models/cartItem";
import { Product } from "../../models/product";

export type CartState = {
    cartItems: CartItem[]
}

export const initialState: CartState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCartItems(state, action: PayloadAction<CartItem[]>) {
            state.cartItems = action.payload;
        },
        addItemToCart(state, action: PayloadAction<Product>) {
            const cartItemIndex = state.cartItems.findIndex(item => item.product.id === action.payload.id);
            if (cartItemIndex >= 0) {
                state.cartItems[cartItemIndex].quantity += 1;
            } else {
                const newCartItem: CartItem = {
                    product: action.payload,
                    quantity: 1,
                    price: action.payload.price,
                    total: action.payload.price
                }
                state.cartItems.push(newCartItem);
            }

            
        },
        removeItemFromCart(state, action: PayloadAction<number>) {
            state.cartItems = state.cartItems.filter(item => item.product.id !== action.payload);
        }
    }
});

export const {
    setCartItems,
    addItemToCart,
    removeItemFromCart
} = cartSlice.actions;

export default cartSlice.reducer;