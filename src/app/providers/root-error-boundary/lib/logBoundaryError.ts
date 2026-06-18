import { errorLogger } from '@/shared/lib/error-logger'
import type { ErrorInfo } from 'react'

export const logBoundaryError = (error: unknown, info: ErrorInfo) => {
  errorLogger({ source: 'root-boundary', error: error, componentStack: info.componentStack })
}
