import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Cartprovider from "./Context/CartContext";
import ProductProvider from "./Context/ProductContext";
import SideBarProvider from "./Context/SideBarContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Cartprovider>
      <SideBarProvider>
        <ProductProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ProductProvider>
      </SideBarProvider>
    </Cartprovider>
  </BrowserRouter>
);
