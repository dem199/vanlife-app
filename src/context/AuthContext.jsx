import { createContext, useContext, useState, useEffect } from 'react'
import { loginUser, logoutUser } from '@/services/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('vanlife_user')
    const storedToken = localStorage.getItem('vanlife_token')
    
    if (storedUser && storedToken) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (err) {
        console.error('Error parsing stored user:', err)
        localStorage.removeItem('vanlife_user')
        localStorage.removeItem('vanlife_token')
      }
    }
    
    setLoading(false)
  }, [])

  // Login function
  const login = async (credentials) => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await loginUser(credentials)
      
      // Store user data
      setUser(response.user)
      localStorage.setItem('vanlife_user', JSON.stringify(response.user))
      localStorage.setItem('vanlife_token', response.token)
      
      return { success: true }
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  // Logout function
  const logout = () => {
    setUser(null)
    logoutUser()
  }

  // Update user data
  const updateUser = (updates) => {
    const updatedUser = { ...user, ...updates }
    setUser(updatedUser)
    localStorage.setItem('vanlife_user', JSON.stringify(updatedUser))
  }

  const value = {
    user,
    loading,
    error,
    isAuthenticated: !!user,
    login,
    logout,
    updateUser
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext)
  
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  
  return context
}

export default AuthContext