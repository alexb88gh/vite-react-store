import { QueryProvider } from '@/app/providers/QueryProvider'
import { RootErrorBoundary } from '@/app/providers/root-error-boundary'
import { router } from '@/app/routes'
import { RouterProvider } from 'react-router-dom'
// import { TestDevErrorBoundary } from '@/app/providers/root-error-boundary/dev/test-dev-error-boundary'

const App = () => {
  return (
    <RootErrorBoundary>
      {/* <TestDevErrorBoundary /> */}
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </RootErrorBoundary>
  )
}

export default App
