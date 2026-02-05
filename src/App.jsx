
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext'

// Layouts
import Layout from '@/components/Layout/Layout'
import HostLayout from '@/components/HostLayout/HostLayout'
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute'

// Pages
import Home from '@/pages/Home/Home'
import About from '@/pages/About/About'
import Vans from '@/pages/Vans/Vans'
import VanDetail from '@/pages/VanDetail/VanDetail'
import Login from '@/pages/Login/Login'
import Signup from '@/pages/Signup/Signup'
import Profile from '@/pages/Profile/Profile'

// Host Pages - UPDATED PATHS
import Dashboard from '@/pages/Host/Dashboard/Dashboard'
import Income from '@/pages/Host/Income/Income'
import HostVans from '@/pages/Host/HostVans/HostVans'
import Reviews from '@/pages/Host/Reviews/Reviews'

// Not Found
import NotFound from '@/pages/NotFound/NotFound'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />

            <Route element={<ProtectedRoute />}>
              <Route path="profile" element={<Profile />} />
              
              <Route path="host" element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="income" element={<Income />} />
                <Route path="vans" element={<HostVans />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App