import { Outlet } from 'react-router-dom'
import { Header } from './header'

export const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="p-4">
        <Outlet />
      </main>
    </div>
  )
}
