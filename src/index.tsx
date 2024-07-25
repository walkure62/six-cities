
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './components/App';

const NUMBER_OF_OFFERS = 666;

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App offers = {NUMBER_OF_OFFERS}/>
  </React.StrictMode>
);

