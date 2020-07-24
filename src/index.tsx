import React from "react";
import ReactDOM from "react-dom";
import "./styles/tailwind.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <div className='bg-primary-200 p-0 m-0 box-border font-Spartan'>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
