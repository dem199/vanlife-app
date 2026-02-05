import { Link, NavLink, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiUser, FiLogOut } from 'react-icons/fi'
import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import './Header.css'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
    setMobileMenuOpen(false)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const navLinks = [
    { to: '/about', label: 'About' },
    { to: '/vans', label: 'Vans' },
    ...(isAuthenticated ? [{ to: '/host', label: 'Host' }] : [])
  ]

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            #VANLIFE
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => 
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              {link.label}
            </NavLink>
          ))}

          {isAuthenticated ? (
            <div className="auth-section">
              <NavLink to="/profile" className="nav-link">
                <FiUser />
                <span>{user?.name || 'Profile'}</span>
              </NavLink>
              <button onClick={handleLogout} className="btn-logout">
                <FiLogOut />
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.nav 
          className="mobile-nav"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => 
                isActive ? 'mobile-nav-link mobile-nav-link-active' : 'mobile-nav-link'
              }
              onClick={closeMobileMenu}
            >
              {link.label}
            </NavLink>
          ))}

          {isAuthenticated ? (
            <>
              <NavLink 
                to="/profile" 
                className="mobile-nav-link"
                onClick={closeMobileMenu}
              >
                <FiUser /> Profile
              </NavLink>
              <button onClick={handleLogout} className="mobile-nav-link mobile-logout-btn">
                <FiLogOut /> Logout
              </button>
            </>
          ) : (
            <Link 
              to="/login" 
              className="btn btn-primary mobile-login-btn"
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          )}
        </motion.nav>
      )}
    </header>
  )
}