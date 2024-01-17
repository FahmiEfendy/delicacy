import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import FoodList from "./pages/FoodList";
import Logo from "./components/Logo/index.jsx";
import FoodDetailPage from "./pages/FoodDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Logo />,
    children: [
      {
        path: "/",
        element: <FoodList />,
      },
      {
        path: ":id",
        element: <FoodDetailPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App router={router} />
  </React.StrictMode>
);
