import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
// import { store } from "./app/store";
import { AppContextProvider } from "./context/AppContext";

createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  <AppContextProvider>
    <App />
  </AppContextProvider>
  // </Provider>
);
