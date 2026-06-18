import { Link, useRouteError } from 'react-router-dom'

import { useEffect } from 'react'

import { isDev } from '@/shared/config/mode'

import WarningIcon from '@/assets/svg/warning-icon.svg?react'

import { errorLogger } from '@/shared/lib/error-logger'

export const RouteErrorPage = () => {
  const error = useRouteError()

  useEffect(() => {
    errorLogger({
      source: 'route-error',
      error: error,
    })
  }, [error])

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center p-4">
      <div className="w-full max-w-lg text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
            <span className="text-3xl">
              <WarningIcon className="h-7.5 w-7.5 fill-amber-500" />
            </span>
          </div>
        </div>

        <h1 className="mb-3 text-3xl font-bold text-slate-900">Failed to open page</h1>

        <p className="mb-8 text-slate-600">
          There was an error loading the page. Try refreshing the page or returning to the home
          page.
        </p>

        {isDev && error instanceof Error && (
          <div className="mb-8 overflow-auto rounded-lg bg-slate-100 p-4 text-left">
            <pre className="text-sm whitespace-pre-wrap break-words text-red-600">
              {error.message}
            </pre>

            {error.stack && (
              <pre className="mt-3 text-xs whitespace-pre-wrap break-words text-slate-500">
                {error.stack}
              </pre>
            )}
          </div>
        )}

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Refresh Page
          </button>

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}
