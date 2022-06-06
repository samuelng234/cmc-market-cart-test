import { Reducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import globalisationReducer from "./reducers/globalisationReducer";
import productReducer from "./reducers/productReducer";

export const createReducer = (reducers?: Reducer) => {
	return combineReducers({
		products: productReducer,
		shoppingCart: cartReducer,
		globalisation: globalisationReducer,
		...reducers
	});
}

const rootReducer = createReducer();

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
