import { QueryProvider } from '@/app/providers/QueryProvider'
import { router } from '@/app/routes'
import { RouterProvider } from 'react-router-dom'

const App = () => {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  )
}

export default App
