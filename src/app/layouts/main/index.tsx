import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <header className="border-b p-4">Demo Store</header>

      <main className="p-4">
        <Outlet />
      </main>
    </div>
  )
}
