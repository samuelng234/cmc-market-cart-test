import { getDefaultMiddleware, configureStore } from "@reduxjs/toolkit";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import App from "../App";
import { createReducer } from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [
	...getDefaultMiddleware({
		thunk: false,
		serializableCheck: {
			isSerializable: () => true
        }
	}),
	sagaMiddleware
];

const store = configureStore({ reducer: createReducer(), middleware });

sagaMiddleware.run(rootSaga);

function ReduxRoot() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Suspense fallback={'Loading...'}>
					<App />
				</Suspense>
			</BrowserRouter>
		</Provider>
	);
}

export { store };

export default ReduxRoot;
