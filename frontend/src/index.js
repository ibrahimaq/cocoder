import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Context Providers //
import { AuthContextProvider } from "./context/AuthContext";
// import { ErrLoadProvider } from "./context/ErrLoadContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      {/* <ErrLoadProvider> */}
        <App />
      {/* </ErrLoadProvider> */}
    </AuthContextProvider>
  </React.StrictMode>
);
