import { Navigate, useLocation, Outlet } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'

export default function ProtectedRoute() {
  const { isAuthenticated, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return <LoadingSpinner text="Checking authentication..." />
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        state={{
          from: location.pathname,
          message: 'You must log in first to access this page'
        }}
        replace
      />
    )
  }

  return <Outlet />
}