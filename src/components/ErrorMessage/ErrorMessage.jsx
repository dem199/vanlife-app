import { motion } from 'framer-motion'
import { BiError } from 'react-icons/bi'
import { MdRefresh } from 'react-icons/md'
import './ErrorMessage.css'

export default function ErrorMessage({ 
  error, 
  onRetry, 
  title = 'Oops! Something went wrong',
  showRetry = true 
}) {
  return (
    <motion.div 
      className="error-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="error-content">
        <BiError className="error-icon" />
        <h2 className="error-title">{title}</h2>
        <p className="error-message">
          {error || 'An unexpected error occurred. Please try again.'}
        </p>
        {showRetry && onRetry && (
          <button 
            className="btn btn-primary error-retry-btn" 
            onClick={onRetry}
          >
            <MdRefresh /> Try Again
          </button>
        )}
      </div>
    </motion.div>
  )
}