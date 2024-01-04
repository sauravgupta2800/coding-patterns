import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";
import App from "./App";
import { inject } from "@vercel/analytics";
inject();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
