import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiDollarSign, FiStar, FiTrendingUp, FiEye } from 'react-icons/fi'
import { useAuth } from '@/context/AuthContext'
import { useHostVans } from '@/hooks/useVans'
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'
import './Dashboard.css'

export default function Dashboard() {
  const { user } = useAuth()
  const { vans, loading, error } = useHostVans(user?.id || 'host-123')

  if (loading) {
    return <LoadingSpinner text="Loading dashboard..." />
  }

  if (error) {
    return <ErrorMessage error={error} />
  }

  const stats = [
    {
      label: 'Total Income',
      value: '$2,340',
      change: '+12.5%',
      icon: <FiDollarSign />,
      color: 'var(--success)'
    },
    {
      label: 'Average Rating',
      value: '4.8',
      change: '+0.3',
      icon: <FiStar />,
      color: 'var(--accent-orange)'
    },
    {
      label: 'Total Views',
      value: '1,234',
      change: '+23%',
      icon: <FiEye />,
      color: 'var(--primary-600)'
    },
    {
      label: 'Active Listings',
      value: vans.length.toString(),
      change: '—',
      icon: <FiTrendingUp />,
      color: 'var(--teal-600)'
    }
  ]

  return (
    <div className="dashboard-page">
      <motion.div
        className="welcome-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Welcome back, {user?.name || 'Host'}!</h2>
        <p>Here's what's happening with your vans today</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="stat-icon" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-details">
              <p className="stat-label">{stat.label}</p>
              <h3 className="stat-value">{stat.value}</h3>
              <span className="stat-change" style={{ color: stat.change.startsWith('+') ? 'var(--success)' : 'var(--gray-500)' }}>
                {stat.change}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="dashboard-section">
        <div className="section-header">
          <h3>Your Listed Vans</h3>
          <Link to="vans" className="view-all-link">
            View all →
          </Link>
        </div>

        {vans.length > 0 ? (
          <div className="vans-quick-list">
            {vans.slice(0, 3).map((van) => (
              <Link
                key={van.id}
                to={`vans/${van.id}`}
                className="van-quick-card"
              >
                <img src={van.imageUrl} alt={van.name} />
                <div className="van-quick-info">
                  <h4>{van.name}</h4>
                  <p>${van.price}/day</p>
                </div>
                <button className="view-btn">View</button>
              </Link>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>You haven't listed any vans yet.</p>
            <button className="btn btn-primary">Add your first van</button>
          </div>
        )}
      </div>

      {/* Income Section */}
      <div className="dashboard-section">
        <div className="section-header">
          <h3>Recent Income</h3>
          <Link to="income" className="view-all-link">
            View details →
          </Link>
        </div>

        <div className="income-preview">
          <div className="income-chart-placeholder">
            <p>Last 30 days</p>
            <h2>$2,340</h2>
            <div className="trend-indicator positive">
              <FiTrendingUp />
              <span>+12.5% from last month</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Preview */}
      <div className="dashboard-section">
        <div className="section-header">
          <h3>Reviews</h3>
          <Link to="reviews" className="view-all-link">
            See all reviews →
          </Link>
        </div>

        <div className="reviews-preview">
          <div className="review-summary">
            <div className="review-rating">
              <FiStar />
              <span className="rating-number">4.8</span>
              <span className="rating-text">out of 5</span>
            </div>
            <p className="review-count">Based on 156 reviews</p>
          </div>
        </div>
      </div>
    </div>
  )
}