import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import FoodList from "./pages/FoodList/index.jsx";
import FoodDetailPage from "./pages/FoodDetailPage/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FoodList />,
  },
  {
    path: ":id",
    element: <FoodDetailPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App router={router} />
  </React.StrictMode>
);
