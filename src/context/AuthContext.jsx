import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('vanlife_user')
    const storedToken = localStorage.getItem('vanlife_token')

    if (storedUser && storedToken) {
      try {
        setUser(JSON.parse(storedUser))
        setToken(storedToken)
        setIsAuthenticated(true)
      } catch (error) {
        console.error('Error parsing stored user:', error)
        localStorage.removeItem('vanlife_user')
        localStorage.removeItem('vanlife_token')
      }
    }
    setLoading(false)
  }, [])

  const login = (userData, authToken) => {
    setUser(userData)
    setToken(authToken)
    setIsAuthenticated(true)
    
    // Save to localStorage
    localStorage.setItem('vanlife_user', JSON.stringify(userData))
    localStorage.setItem('vanlife_token', authToken)
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    setIsAuthenticated(false)
    
    // Clear localStorage
    localStorage.removeItem('vanlife_user')
    localStorage.removeItem('vanlife_token')
  }

  const value = {
    user,
    token,
    isAuthenticated,
    loading,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}