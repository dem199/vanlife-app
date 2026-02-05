import { Outlet } from 'react-router-dom'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { Toaster } from 'react-hot-toast'
import './Layout.css'

export default function Layout() {
  return (
    <div className="site-wrapper">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#fff',
            color: '#374151',
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
            borderRadius: '0.5rem',
            padding: '1rem',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </div>
  )
}