import { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMail, FiLock, FiAlertCircle } from 'react-icons/fi'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '@/config/firebase'
import { useAuth } from '@/context/AuthContext'
import toast from 'react-hot-toast'
import './Login.css'

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState(null)
  
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

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

    if (!formData.email || !formData.password) {
      setFormError('Please fill in all fields')
      return
    }

    setIsSubmitting(true)

    try {
      // Check demo credentials first
      if (formData.email === 'demo@vanlife.com' && formData.password === 'password') {
        const demoUser = {
          id: 'host-123',
          email: 'demo@vanlife.com',
          name: 'Demo User'
        }
        login(demoUser, 'demo-token-' + Date.now())
        toast.success('Welcome back!')
        navigate(from, { replace: true })
        return
      }

      // Check Firestore for real users
      const usersRef = collection(db, 'users')
      const q = query(
        usersRef,
        where('email', '==', formData.email),
        where('password', '==', formData.password)
      )
      const querySnapshot = await getDocs(q)

      if (querySnapshot.empty) {
        setFormError('Invalid email or password')
        toast.error('Login failed')
        setIsSubmitting(false)
        return
      }

      // Get user data
      const userDoc = querySnapshot.docs[0]
      const userData = {
        id: userDoc.id,
        ...userDoc.data()
      }

      // Remove password from user object
      delete userData.password

      login(userData, 'user-token-' + Date.now())
      toast.success(`Welcome back, ${userData.name}!`)
      navigate(from, { replace: true })

    } catch (error) {
      console.error('Login error:', error)
      setFormError('An error occurred. Please try again.')
      toast.error('Login failed')
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
            <h1>Welcome back</h1>
            <p>Sign in to access your account</p>
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

            <button
              type="submit"
              className="btn btn-primary btn-lg login-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <div className="login-demo">
            <p className="demo-title">Demo Credentials:</p>
            <p className="demo-info">Email: demo@vanlife.com</p>
            <p className="demo-info">Password: password</p>
          </div>

          <div className="login-footer">
            <p>
              Don't have an account?{' '}
              <Link to="/signup" className="signup-link">
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}