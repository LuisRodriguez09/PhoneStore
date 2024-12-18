import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "../layout/Home";
import Cart from "../layout/Cart";
import Product from "../layout/Product";

export interface Route {
  path: string;
  element: JSX.Element;
  handle?: {
    breadcrumb: string;
    title: string;
  };
  children?: Route[];
}

export const routesList: Route[] = [
  {
    path: "/",
    element: <Home />,
    handle: {
      breadcrumb: "Home",
      title: "Home",
    },
  },
  {
    path: "/cart",
    element: <Cart />,
    handle: {
      breadcrumb: "Cart",
      title: "Cart",
    },
  },
  {
    path: "/product/:productId",
    element: <Product />,
    handle: {
      breadcrumb: "Product",
      title: "Product",
    },
  },
];

const router = createBrowserRouter([
  ...routesList,
  { path: "*", element: <Navigate to="/" /> },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
