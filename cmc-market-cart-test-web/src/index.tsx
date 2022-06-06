import * as ReactDOM from "react-dom";
import ReduxRoot from "./redux/rootRedux";
import reportWebVitals from './reportWebVitals';

const rootEl = document.getElementById("root");
ReactDOM.render(<ReduxRoot />, rootEl);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
