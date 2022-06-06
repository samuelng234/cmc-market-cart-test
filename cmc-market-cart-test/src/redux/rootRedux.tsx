import { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import configureStore from "./configureStore";


const store = configureStore();

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
