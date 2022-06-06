import { Reducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import productReducer from "./reducers/productReducer";

export const createReducer = (reducers?: Reducer) => {
	return combineReducers({
		products: productReducer,
		...reducers
	});
}

const rootReducer = createReducer();

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
