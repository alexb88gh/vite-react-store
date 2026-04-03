import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/app/layouts/main";
import { CatalogPage } from "@/pages/catalog";
import { ProductPage } from "@/pages/product";
import { CartPage } from "@/pages/cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <CatalogPage />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);
