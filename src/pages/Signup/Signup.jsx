import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMail, FiLock, FiUser, FiAlertCircle } from 'react-icons/fi'
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'
import { db } from '@/config/firebase'
import toast from 'react-hot-toast'
import '../Login/Login.css'

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState(null)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setFormError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError(null)

    // Validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setFormError('Please fill in all fields')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setFormError('Passwords do not match')
      return
    }

    if (formData.password.length < 6) {
      setFormError('Password must be at least 6 characters')
      return
    }

    setIsSubmitting(true)

    try {
      // Check if email already exists
      const usersRef = collection(db, 'users')
      const q = query(usersRef, where('email', '==', formData.email))
      const existingUsers = await getDocs(q)

      if (!existingUsers.empty) {
        setFormError('Email already in use')
        toast.error('Email already registered')
        setIsSubmitting(false)
        return
      }

      // Create user document in Firestore
      const newUser = await addDoc(collection(db, 'users'), {
        name: formData.name,
        email: formData.email,
        password: formData.password, // In production, NEVER store plain passwords!
        joinDate: new Date().toISOString(),
        totalRentals: 0,
        rating: 0
      })

      toast.success('Account created successfully! Please login.')
      navigate('/login')
    } catch (error) {
      console.error('Signup error:', error)
      setFormError('Failed to create account. Please try again.')
      toast.error('Signup failed')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <motion.div
          className="login-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="login-header">
            <h1>Create Account</h1>
            <p>Join VanLife and start your adventure</p>
          </div>

          {formError && (
            <motion.div
              className="login-error"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <FiAlertCircle />
              <span>{formError}</span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="login-form">
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
                placeholder="John Doe"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <FiMail />
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="you@example.com"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                <FiLock />
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-input"
                placeholder="••••••••"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">
                <FiLock />
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="form-input"
                placeholder="••••••••"
                required
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg login-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating account...' : 'Sign up'}
            </button>
          </form>

          <div className="login-footer">
            <p>
              Already have an account?{' '}
              <Link to="/login" className="signup-link">
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}