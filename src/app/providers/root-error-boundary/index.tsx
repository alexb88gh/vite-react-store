import type { ErrorInfo } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { logBoundaryError } from './lib/logBoundaryError'
import { RootErrorFallback } from './ui'

export const RootErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <RootErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />
      )}
      onError={(error: unknown, info: ErrorInfo) => {
        logBoundaryError(error, info)
      }}
    >
      {children}
    </ErrorBoundary>
  )
}
