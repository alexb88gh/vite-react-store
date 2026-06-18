import { isDev, isProduction, mode } from '@/shared/config/mode'
import type { ErrorInfo } from 'react'

export const logBoundaryError = (error: unknown, info: ErrorInfo) => {
  if (isDev) {
    console.error('[ErrorBoundary]', mode, error, info.componentStack)
    return
  }

  if (isProduction) {
    // production: in future in this can use Sentry or anything else logger
    console.error('[ErrorBoundary]', error)
  }
}
