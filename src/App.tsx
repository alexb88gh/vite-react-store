import { QueryProvider } from '@/app/providers/QueryProvider'
import { router } from '@/app/routes'
import { RouterProvider } from 'react-router-dom'
import { RootErrorBoundary } from './app/providers/root-error-boundary'
// import { TestErrorPage } from './pages/TestErrorPage'

const App = () => {
  return (
    <RootErrorBoundary>
      {/* <TestErrorPage /> */}
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </RootErrorBoundary>
  )
}

export default App
