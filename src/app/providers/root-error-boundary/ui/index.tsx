import type { FallbackProps } from 'react-error-boundary'
import { getErrorMessage } from 'react-error-boundary'

import WarningIcon from '@/assets/svg/warning-icon.svg?react'

import { isDev } from '@/shared/config/mode'

export const RootErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const handleReload = () => {
    resetErrorBoundary()
    window.location.reload()
  }

  return (
    <div role="alert" className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
            <span className="text-3xl">
              <WarningIcon className="h-7.5 w-7.5 fill-amber-500" />
            </span>
          </div>
        </div>

        <div className="text-center">
          <h1 className="mb-2 text-2xl font-bold text-slate-900">Something went wrong</h1>

          <p className="mb-6 text-slate-600">
            An unexpected error occurred. Try refreshing the page.
          </p>

          {isDev && (
            <div className="mb-6 overflow-auto rounded-lg bg-slate-100 p-4 text-left">
              <pre className="text-sm whitespace-pre-wrap wrap-break-words text-red-600">
                {getErrorMessage(error)}
              </pre>

              {error instanceof Error && error.stack && (
                <pre className="mt-3 text-xs whitespace-pre-wrap wrap-break-words text-slate-500">
                  {error.stack}
                </pre>
              )}
            </div>
          )}

          <button
            onClick={handleReload}
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Refresh page
          </button>
        </div>
      </div>
    </div>
  )
}
