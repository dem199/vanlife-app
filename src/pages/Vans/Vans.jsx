import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiSearch, FiFilter } from 'react-icons/fi'
import { useVans } from '@/hooks/useVans'
import VanCard from '@/components/VanCard/VanCard'
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'
import './Vans.css'



export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState('')
  const { vans, loading, error, refetch } = useVans()

  const typeFilter = searchParams.get('type')

  // Filter vans based on type and search
  const displayedVans = vans.filter(van => {
    const matchesType = !typeFilter || van.type?.toLowerCase() === typeFilter.toLowerCase()
    const matchesSearch = !searchTerm || 
      van.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      van.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      van.description?.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesType && matchesSearch
  })

  const handleFilterChange = (type) => {
    setSearchParams(prevParams => {
      if (type === null) {
        prevParams.delete('type')
      } else {
        prevParams.set('type', type)
      }
      return prevParams
    })
  }

  const filterButtons = [
    { type: 'simple', label: 'Simple', color: 'var(--teal-600)' },
    { type: 'luxury', label: 'Luxury', color: 'var(--gray-900)' },
    { type: 'rugged', label: 'Rugged', color: 'var(--gray-700)' }
  ]

  if (loading) {
    return <LoadingSpinner text="Loading vans..." />
  }

  if (error) {
    return (
      <ErrorMessage 
        error={error}
        onRetry={refetch}
        title="Failed to load vans"
      />
    )
  }

  return (
    <div className="vans-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="page-title">Explore our van options</h1>




          {/* Search Bar */}
          <div className="search-container">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by name, location, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Filters */}
          <div className="filters-section">
            <div className="filters-header">
              <FiFilter />
              <span>Filter by type:</span>
            </div>
            <div className="filter-buttons">
              {filterButtons.map(({ type, label, color }) => (
                <button
                  key={type}
                  onClick={() => handleFilterChange(type)}
                  className={`filter-btn ${typeFilter === type ? 'filter-btn-active' : ''}`}
                  style={{
                    '--filter-color': color,
                    backgroundColor: typeFilter === type ? color : 'transparent',
                    borderColor: color,
                    color: typeFilter === type ? 'var(--white)' : color
                  }}
                >
                  {label}
                </button>
              ))}
              
              {typeFilter && (
                <button
                  onClick={() => handleFilterChange(null)}
                  className="clear-filters-btn"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {/* Results Count */}
          <div className="results-info">
            <p>
              {displayedVans.length} {displayedVans.length === 1 ? 'van' : 'vans'} found
              {typeFilter && ` in "${typeFilter}" category`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          {/* Vans Grid */}
          {displayedVans.length > 0 ? (
            <motion.div 
              className="vans-grid"
              layout
            >
              {displayedVans.map(van => (
                <VanCard 
                  key={van.id} 
                  van={van}
                  searchParams={searchParams}
                />
              ))}
            </motion.div>
          ) : (
            <div className="no-results">
              <p>No vans found matching your criteria.</p>
              <button 
                onClick={() => {
                  handleFilterChange(null)
                  setSearchTerm('')
                }}
                className="btn btn-primary"
              >
                Clear all filters
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}