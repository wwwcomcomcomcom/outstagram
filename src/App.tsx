import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/layout.tsx";
import HomePage from "./routes/homePage.tsx";
import Counter from "./routes/counter.tsx";

import "./reset.css";
import NotFound from "./routes/notFound.tsx";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout></Layout>,
    children: [
      {
        path: "",
        element: <HomePage></HomePage>
      }
    ]
  },
  {
    path:"counter",
    element:<Counter/>
  },
  {
    path:"*",
    element:<NotFound/>
  }
]);
function App() {
  return <>
    <RouterProvider router={router}></RouterProvider>
  </>;
}

export default App;
