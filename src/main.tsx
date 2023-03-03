import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ProjetPage from "./ProjetPage";
import data from "./assets/data.json";
import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "", element: <App /> },
  { path: "projet/budient", element: <ProjetPage data={data[0]} /> },
  { path: "projet/smash-or-pass", element: <ProjetPage data={data[1]} /> },
  { path: "projet/tic-tac-toe", element: <ProjetPage data={data[2]} /> },

]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
