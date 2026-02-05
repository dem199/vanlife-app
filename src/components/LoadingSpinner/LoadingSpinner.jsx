import { motion } from 'framer-motion'
import './LoadingSpinner.css'

export default function LoadingSpinner({ size = 'md', text = 'Loading...' }) {
  const sizeClasses = {
    sm: 'spinner-sm',
    md: 'spinner-md',
    lg: 'spinner-lg'
  }

  return (
    <motion.div 
      className="loading-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={`spinner ${sizeClasses[size]}`}>
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
      </div>
      {text && <p className="loading-text">{text}</p>}
    </motion.div>
  )
}