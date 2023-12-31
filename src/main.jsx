import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppTheme } from "./theme/AppTheme.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <Provider store={store}>
   <BrowserRouter>
    <AppTheme>
     <App />
    </AppTheme>
   </BrowserRouter>
  </Provider>
 </React.StrictMode>
);
