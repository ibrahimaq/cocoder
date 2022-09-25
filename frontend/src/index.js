import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Context Providers //
import { AuthContextProvider } from "./context/AuthContext";
import { PostContextProvider } from "./context/PostContext";
// import { ErrLoadProvider } from "./context/ErrLoadContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PostContextProvider>
      {/* <ErrLoadProvider> */}
        <App />
      {/* </ErrLoadProvider> */}
      </PostContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
