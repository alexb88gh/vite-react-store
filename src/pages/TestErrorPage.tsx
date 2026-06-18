export const TestErrorPage = () => {
  throw new Error('Test ErrorBoundary')

  return <div>Page</div>
}
