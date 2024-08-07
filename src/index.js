import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import { AuthProvider } from "./context_hook/auth";
import { PlanProvider } from "./pages/context/PlanContext"
const root = createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>

  <BrowserRouter>
    <PlanProvider>
      <App />
    </PlanProvider>
  </BrowserRouter>

  // </React.StrictMode>
);
