import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/layout.tsx";
import HomePage from "./routes/homePage.tsx";

import "./reset.css";
import NotFound from "./routes/notFound.tsx";
import SearchPage from "./routes/searchPage.tsx";
import ExplorerPage from "./routes/explorerPage.tsx";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children: [
      {
        path: "",
        element: <HomePage/>
      },
      {
        path:"search",
        element:<SearchPage/>
      },
      {
        path:"explorer",
        element:<ExplorerPage/>
      }
    ]
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
