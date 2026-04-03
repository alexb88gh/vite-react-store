import { router } from '@/app/routes'
import { RouterProvider } from 'react-router-dom'

export const RoutersProvider = () => {
  return <RouterProvider router={router} />
}
