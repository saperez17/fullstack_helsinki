import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
