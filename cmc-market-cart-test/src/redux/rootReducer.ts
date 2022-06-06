import { combineReducers } from "redux";
import { routerReducer, RouterState } from 'react-router-redux'

export interface RootState {
	routerReducer: RouterState
}

export default () =>
	combineReducers({
		routerReducer
	});
