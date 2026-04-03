import { MainLayout } from '@/app/layouts/main'
import { CartPage } from '@/pages/cart'
import { CatalogPage } from '@/pages/catalog'
import { ProductPage } from '@/pages/product'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <CatalogPage />,
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
])
