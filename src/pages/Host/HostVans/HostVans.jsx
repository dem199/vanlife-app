import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiPlus } from 'react-icons/fi'
import { useAuth } from '@/context/AuthContext'
import { useHostVans } from '@/hooks/useVans'
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'
import toast from 'react-hot-toast'
import './HostVans.css'

export default function HostVans() {
  const { user } = useAuth()
  const { vans, loading, error } = useHostVans(user?.id || 'host-123')

  if (loading) {
    return <LoadingSpinner text="Loading your vans..." />
  }

  if (error) {
    return <ErrorMessage error={error} />
  }

  return (
    <div className="host-vans-page">
      <div className="host-vans-header">
        <h2>Your Listed Vans</h2>
        

        <button 
  className="btn btn-primary"
  onClick={() => toast.info('Add Van feature coming soon!')}
>
  <FiPlus />
  Add New Van
</button>
      </div>

      {vans.length > 0 ? (
        <motion.div 
          className="host-vans-grid"
          layout
        >
          {vans.map((van) => (
            <Link
              key={van.id}
              to={van.id}
              className="host-van-card"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -3 }}
              >
                <img src={van.imageUrl} alt={van.name} />
                <div className="host-van-info">
                  <h3>{van.name}</h3>
                  <p className="van-price">${van.price}/day</p>
                  <div className="van-stats">
                    <span>⭐ {van.rating}</span>
                    <span>•</span>
                    <span>{van.type}</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      ) : (
        <div className="empty-vans-state">
          <p>You haven't listed any vans yet.</p>
          <button className="btn btn-primary btn-lg">
            <FiPlus />
            List Your First Van
          </button>
        </div>
      )}
    </div>
  )
}