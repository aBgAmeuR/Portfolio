import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ProjetPage from "./ProjetPage";
import data from "./assets/data.json";
import { Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <ProjetPage data={data[0]} />
    <Route path="home" element={<Home />}>
      <Route path="project/:projectId" element={<Project />}>
        <Route path=":taskId" element={<Task />} />
      </Route>
    </Route>
  </React.StrictMode>
);
