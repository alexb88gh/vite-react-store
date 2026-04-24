import { Outlet } from 'react-router-dom'
import { Header } from './header'

export const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  )
}
