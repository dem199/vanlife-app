import { NavLink, Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiHome, FiDollarSign, FiTruck, FiStar } from 'react-icons/fi'
import './HostLayout.css'

export default function HostLayout() {
  const navLinks = [
    { to: '.', end: true, icon: <FiHome />, label: 'Dashboard' },
    { to: 'income', icon: <FiDollarSign />, label: 'Income' },
    { to: 'vans', icon: <FiTruck />, label: 'Vans' },
    { to: 'reviews', icon: <FiStar />, label: 'Reviews' }
  ]

  return (
    <div className="host-layout">
      <div className="container">
        <div className="host-header">
          <h1>Host Dashboard</h1>
          <p>Manage your van rentals and track performance</p>
        </div>

        <nav className="host-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                isActive ? 'host-nav-link host-nav-link-active' : 'host-nav-link'
              }
            >
              {link.icon}
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>

        <motion.div
          className="host-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Outlet />
        </motion.div>
      </div>
    </div>
  )
}