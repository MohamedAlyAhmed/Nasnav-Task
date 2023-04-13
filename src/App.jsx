import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Error from "./pages/Error";

const ProductPageLazy = lazy(() => import("./pages/Product"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "product",
          element: (
            <Suspense fallback={<p>Loading ...</p>}>
              <ProductPageLazy />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
