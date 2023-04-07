import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AppContextProvider } from "./context/AppContext";

createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
