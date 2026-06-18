export const TestDevErrorBoundary = () => {
  throw new Error('Test ErrorBoundary')
  return <div>Error</div>
}
