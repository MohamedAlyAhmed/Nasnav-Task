import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Product from "./pages/Product";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "product", element: <Product /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
