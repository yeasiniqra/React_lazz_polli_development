import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./responsive.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import CartContextProvider from "./store/CartContextProvider";
import CheckOutContextProvider from "./store/CheckOutContextProvider";
import AppContextProvider from "./store/AppContextProvider";
import AuthContextProvider from "./store/AuthContextProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <AppContextProvider>
          <CartContextProvider>
            <CheckOutContextProvider>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                theme="light"
              />
              <App />
            </CheckOutContextProvider>
          </CartContextProvider>
        </AppContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
