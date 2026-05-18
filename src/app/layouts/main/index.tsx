import { Outlet } from 'react-router-dom'
import { Footer } from './footer'
import { Header } from './header'

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
