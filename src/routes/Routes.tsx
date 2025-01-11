import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "../layout/Home";
import Cart from "../layout/Cart";
import Product from "../layout/Product";
import Payment from "../layout/Payment";

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
  {
    path: "/payment",
    element: <Payment />,
    handle: {
      breadcrumb: "Payment",
      title: "Payment",
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
