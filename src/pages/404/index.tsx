import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="mb-2 text-sm font-medium text-slate-500">Error 404</p>

        <h1 className="mb-4 text-6xl font-bold tracking-tight text-slate-900">404</h1>

        <h2 className="mb-4 text-2xl font-semibold text-slate-800">Page not found</h2>

        <p className="mb-8 text-slate-600">
          The link may be out of date or the page may have moved. Try returning to the main page.
        </p>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  )
}
