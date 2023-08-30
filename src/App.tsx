import ProjetPage from "./pages/ProjetPage";
import data from "./assets/data.json";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    { path: "", element: <Home /> },
    { path: "projet/codevif", element: <ProjetPage data={data[0]} /> },
    { path: "projet/budient", element: <ProjetPage data={data[1]} /> },
    { path: "projet/smash-or-pass", element: <ProjetPage data={data[2]} /> },
    { path: "projet/tic-tac-toe", element: <ProjetPage data={data[3]} /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
