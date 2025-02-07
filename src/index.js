import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

const container = document.getElementById("root");
const isEnergySuppliersPage = !!container.getAttribute("data-suppliers");

ReactDOM.render(<App isEnergySuppliersPage={isEnergySuppliersPage} />, container);
