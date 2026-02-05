import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiHome } from 'react-icons/fi'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="not-found-page">
      <motion.div
        className="not-found-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="not-found-title">404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn btn-primary btn-lg">
          <FiHome />
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
}