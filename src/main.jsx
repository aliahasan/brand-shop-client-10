import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider";
import ProductProvider from "./Context/ProductProvider";
import Routes from "./Router/Routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ProductProvider>
        <RouterProvider router={Routes} />
      </ProductProvider>
    </AuthProvider>
  </React.StrictMode>
);
