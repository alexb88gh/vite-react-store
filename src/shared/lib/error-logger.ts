export type ErrorSource = 'root-boundary' | 'route-error' | 'api'
import { isDev, isProduction } from '../config/mode'

export const errorLogger = ({
  source,
  error,
  componentStack,
}: {
  source: ErrorSource
  error: unknown
  componentStack?: string | null
}) => {
  if (isDev) {
    console.error(`[${source}]`, error, componentStack)
    return
  }

  if (isProduction) {
    // It is place where we can adding Sentry or anything else logger in future
    console.error(`[${source}]`, error, componentStack)
  }
}
