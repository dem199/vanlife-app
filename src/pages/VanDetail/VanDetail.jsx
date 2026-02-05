import { useParams, Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiMapPin, FiUsers, FiCalendar, FiStar, FiCheck } from 'react-icons/fi'
import { useVan } from '@/hooks/useVans'
import { createBooking } from '@/services/api'
import { useAuth } from '@/context/AuthContext'
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'
import toast from 'react-hot-toast'
import './VanDetail.css'

export default function VanDetail() {
  const { id } = useParams()
  const location = useLocation()
  const { van, loading, error } = useVan(id)
  const { user, isAuthenticated } = useAuth()

  const search = location.state?.search || ''
  const type = location.state?.type || 'all'

  const handleBooking = async () => {
    if (!isAuthenticated) {
      toast.error('Please log in to book a van')
      return
    }

    try {
      const bookingData = {
        userId: user.id,
        vanId: van.id,
        vanName: van.name,
        price: van.price,
        bookingDate: new Date().toISOString(),
        status: 'pending'
      }

      await createBooking(bookingData)
      toast.success('Van booked successfully! Check your email for confirmation.')
    } catch (err) {
      toast.error('Failed to book van. Please try again.')
      console.error('Booking error:', err)
    }
  }

  if (loading) {
    return <LoadingSpinner text="Loading van details..." />
  }

  if (error) {
    return (
      <ErrorMessage 
        error={error}
        title="Failed to load van details"
        showRetry={false}
      />
    )
  }

  if (!van) {
    return null
  }

  const typeColors = {
    simple: 'var(--teal-600)',
    rugged: 'var(--gray-700)',
    luxury: 'var(--gray-900)'
  }

  return (
    <div className="van-detail-page">
      <div className="container">
        <Link
          to={`..${search}`}
          relative="path"
          className="back-link"
        >
          <FiArrowLeft />
          <span>Back to {type} vans</span>
        </Link>

        <motion.div
          className="van-detail-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="van-detail-images">
            <motion.img
              src={van.imageUrl}
              alt={van.name}
              className="van-detail-main-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>

          <div className="van-detail-info">
            <div
              className="van-detail-type-badge"
              style={{ backgroundColor: typeColors[van.type] }}
            >
              {van.type}
            </div>

            <h1 className="van-detail-title">{van.name}</h1>

            <div className="van-detail-meta">
              <div className="meta-item">
                <FiMapPin />
                <span>{van.location}</span>
              </div>
              <div className="meta-item">
                <FiUsers />
                <span>Sleeps {van.capacity}</span>
              </div>
              <div className="meta-item">
                <FiStar />
                <span>{van.rating} ({van.reviews} reviews)</span>
              </div>
            </div>

            <div className="van-detail-price-section">
              <div className="price-info">
                <span className="price-label">Price per day</span>
                <div className="price-amount">
                  <span className="currency">$</span>
                  <span className="amount">{van.price}</span>
                </div>
              </div>
              <button 
                className="btn btn-accent btn-lg rent-btn"
                onClick={handleBooking}
              >
                <FiCalendar />
                Book this van
              </button>
            </div>

            <div className="van-detail-description">
              <h2>About this van</h2>
              <p>{van.description}</p>
            </div>

            <div className="van-detail-specs">
              <h2>Vehicle Details</h2>
              <div className="specs-grid">
                <div className="spec-item">
                  <span className="spec-label">Year</span>
                  <span className="spec-value">{van.year}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Make</span>
                  <span className="spec-value">{van.make}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Model</span>
                  <span className="spec-value">{van.model}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Type</span>
                  <span className="spec-value">{van.type}</span>
                </div>
              </div>
            </div>

            {van.features && van.features.length > 0 && (
              <div className="van-detail-features">
                <h2>Features & Amenities</h2>
                <div className="features-list">
                  {van.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <FiCheck />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}