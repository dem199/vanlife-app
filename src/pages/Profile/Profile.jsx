import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiUser, FiMail, FiPhone, FiSave } from 'react-icons/fi'
import { useAuth } from '@/context/AuthContext'
import toast from 'react-hot-toast'
import './Profile.css'

export default function Profile() {
  const { user, updateUser } = useAuth()
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || ''
  })
  const [isEditing, setIsEditing] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(formData)
    setIsEditing(false)
    toast.success('Profile updated successfully!')
  }

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || ''
    })
    setIsEditing(false)
  }

  return (
    <div className="profile-page">
      <div className="container">
        <motion.div
          className="profile-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="profile-header">
            <div className="profile-avatar">
              <FiUser />
            </div>
            <div>
              <h1>My Profile</h1>
              <p>Manage your account information</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                <FiUser />
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                disabled={!isEditing}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <FiMail />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                disabled={!isEditing}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                <FiPhone />
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="(555) 123-4567"
                disabled={!isEditing}
              />
            </div>

            <div className="profile-actions">
              {!isEditing ? (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="btn btn-primary"
                >
                  Edit Profile
                </button>
              ) : (
                <>
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    <FiSave />
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="btn btn-outline"
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </form>

          <div className="profile-info-box">
            <h3>Account Information</h3>
            <div className="info-item">
              <span className="info-label">Member since</span>
              <span className="info-value">January 2024</span>
            </div>
            <div className="info-item">
              <span className="info-label">Account type</span>
              <span className="info-value">Host</span>
            </div>
            <div className="info-item">
              <span className="info-label">Total rentals</span>
              <span className="info-value">12</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}