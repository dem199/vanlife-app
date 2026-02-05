import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMapPin, FiStar, FiUsers } from 'react-icons/fi'
import './VanCard.css'

export default function VanCard({ van, searchParams }) {
  const typeColors = {
    simple: 'var(--teal-600)',
    rugged: 'var(--gray-700)',
    luxury: 'var(--gray-900)'
  }

  return (
    <motion.div
      className="van-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link 
        to={`/vans/${van.id}`}
        state={{ 
          search: searchParams ? `?${searchParams.toString()}` : '',
          type: searchParams?.get('type') || 'all'
        }}
        className="van-card-link"
      >
        <div className="van-image-container">
          <img 
            src={van.imageUrl} 
            alt={van.name}
            className="van-image"
            loading="lazy"
          />
          <div 
            className="van-type-badge"
            style={{ backgroundColor: typeColors[van.type] }}
          >
            {van.type}
          </div>
        </div>

        <div className="van-card-body">
          <div className="van-header">
            <h3 className="van-name">{van.name}</h3>
            <div className="van-price">
              <span className="price-amount">${van.price}</span>
              <span className="price-period">/day</span>
            </div>
          </div>

          <div className="van-meta">
            <div className="van-meta-item">
              <FiMapPin />
              <span>{van.location}</span>
            </div>
            <div className="van-meta-item">
              <FiUsers />
              <span>Sleeps {van.capacity}</span>
            </div>
            <div className="van-meta-item">
              <FiStar />
              <span>{van.rating} ({van.reviews})</span>
            </div>
          </div>

          <p className="van-description">
            {van.description.substring(0, 100)}...
          </p>
        </div>
      </Link>
    </motion.div>
  )
}