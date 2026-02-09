import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMapPin, FiUsers, FiStar } from 'react-icons/fi'
import './VanCard.css'

export default function VanCard({ van, searchParams }) {
  const typeColors = {
    simple: 'var(--teal-600)',
    rugged: 'var(--gray-700)',
    luxury: 'var(--gray-900)'
  }

  // Build the correct link with search params
  const vanLink = searchParams 
    ? `/vans/${van.id}?${searchParams}` 
    : `/vans/${van.id}`

  return (
    <Link 
      to={vanLink}
      state={{ 
        search: searchParams ? `?${searchParams}` : '',
        type: searchParams?.get('type') || 'all'
      }}
      className="van-card"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="van-card-image-container">
          <img 
            src={van.imageUrl} 
            alt={van.name}
            className="van-card-image"
            loading="lazy"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800&auto=format&fit=crop'
            }}
          />
          <div 
            className="van-card-type-badge"
            style={{ backgroundColor: typeColors[van.type] }}
          >
            {van.type}
          </div>
        </div>

        <div className="van-card-content">
          <div className="van-card-header">
            <h3 className="van-card-title">{van.name}</h3>
            <div className="van-card-price">
              <span className="price-amount">${van.price}</span>
              <span className="price-period">/day</span>
            </div>
          </div>

          <div className="van-card-meta">
            <div className="meta-item">
              <FiMapPin />
              <span>{van.location}</span>
            </div>
            <div className="meta-item">
              <FiUsers />
              <span>{van.capacity}</span>
            </div>
            <div className="meta-item">
              <FiStar />
              <span>{van.rating}</span>
            </div>
          </div>

          {van.description && (
            <p className="van-card-description">
              {van.description.length > 100
                ? van.description.substring(0, 100) + '...'
                : van.description}
            </p>
          )}
        </div>
      </motion.div>
    </Link>
  )
}