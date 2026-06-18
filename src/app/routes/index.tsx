import { MainLayout } from '@/app/layouts/main'
import { CartPage } from '@/pages/cart'
import { HomePage } from '@/pages/home'
// import { CatalogPage } from '@/pages/catalog'
import { NotFoundPage } from '@/pages/404'
import { ProductPage } from '@/pages/product'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { RouteErrorPage } from './router-error-page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        element: <Outlet />,
        errorElement: <RouteErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: '/product/:id',
            element: <ProductPage />,
          },
          {
            path: '/cart',
            element: <CartPage />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
