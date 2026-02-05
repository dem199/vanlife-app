import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  query, 
  where,
  addDoc,
  updateDoc,
  deleteDoc,
  orderBy,
  limit
} from 'firebase/firestore'
import { db } from '@/config/firebase'

// Collections
const VANS_COLLECTION = 'vans'
const USERS_COLLECTION = 'users'
const BOOKINGS_COLLECTION = 'bookings'

// ============ VANS ============

/**
 * Get all vans
 */
export async function getAllVans() {
  try {
    const vansRef = collection(db, VANS_COLLECTION)
    const snapshot = await getDocs(vansRef)
    
    const vans = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    
    return vans
  } catch (error) {
    console.error('Error fetching vans:', error)
    throw new Error('Failed to fetch vans. Please try again.')
  }
}

/**
 * Get single van by ID
 */
export async function getVanById(id) {
  try {
    const vanRef = doc(db, VANS_COLLECTION, id)
    const snapshot = await getDoc(vanRef)
    
    if (!snapshot.exists()) {
      throw new Error('Van not found')
    }
    
    return {
      id: snapshot.id,
      ...snapshot.data()
    }
  } catch (error) {
    console.error('Error fetching van:', error)
    throw new Error(error.message || 'Failed to fetch van details')
  }
}

/**
 * Get vans by type
 */
export async function getVansByType(type) {
  try {
    const vansRef = collection(db, VANS_COLLECTION)
    const q = query(vansRef, where('type', '==', type))
    const snapshot = await getDocs(q)
    
    const vans = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    
    return vans
  } catch (error) {
    console.error('Error fetching vans by type:', error)
    throw new Error('Failed to fetch vans')
  }
}

/**
 * Get host vans
 */
export async function getHostVans(hostId) {
  try {
    const vansRef = collection(db, VANS_COLLECTION)
    const q = query(vansRef, where('hostId', '==', hostId))
    const snapshot = await getDocs(q)
    
    const vans = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    
    return vans
  } catch (error) {
    console.error('Error fetching host vans:', error)
    throw new Error('Failed to fetch your vans')
  }
}

/**
 * Search vans
 */
export async function searchVans(searchTerm) {
  try {
    const allVans = await getAllVans()
    
    const searchLower = searchTerm.toLowerCase()
    const filtered = allVans.filter(van => 
      van.name.toLowerCase().includes(searchLower) ||
      van.description.toLowerCase().includes(searchLower) ||
      van.location.toLowerCase().includes(searchLower) ||
      van.type.toLowerCase().includes(searchLower)
    )
    
    return filtered
  } catch (error) {
    console.error('Error searching vans:', error)
    throw new Error('Search failed')
  }
}

// ============ USERS ============

/**
 * Get user by ID
 */
export async function getUserById(userId) {
  try {
    const userRef = doc(db, USERS_COLLECTION, userId)
    const snapshot = await getDoc(userRef)
    
    if (!snapshot.exists()) {
      throw new Error('User not found')
    }
    
    return {
      id: snapshot.id,
      ...snapshot.data()
    }
  } catch (error) {
    console.error('Error fetching user:', error)
    throw new Error('Failed to fetch user data')
  }
}

/**
 * Update user profile
 */
export async function updateUserProfile(userId, updates) {
  try {
    const userRef = doc(db, USERS_COLLECTION, userId)
    await updateDoc(userRef, {
      ...updates,
      updatedAt: new Date().toISOString()
    })
    
    return { success: true }
  } catch (error) {
    console.error('Error updating profile:', error)
    throw new Error('Failed to update profile')
  }
}

// ============ AUTHENTICATION ============

/**
 * Simple login (for demo - in production use Firebase Auth)
 */
export async function loginUser(credentials) {
  const { email, password } = credentials
  
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Simple validation for demo
    if (email === 'demo@vanlife.com' && password === 'password') {
      return {
        user: {
          id: 'host-123',
          email: 'demo@vanlife.com',
          name: 'Demo User'
        },
        token: 'demo-token-' + Date.now()
      }
    }
    
    throw new Error('Invalid credentials')
  } catch (error) {
    console.error('Login error:', error)
    throw new Error(error.message || 'Login failed')
  }
}

/**
 * Logout user
 */
export function logoutUser() {
  localStorage.removeItem('vanlife_user')
  localStorage.removeItem('vanlife_token')
  return { success: true }
}

// ============ BOOKINGS ============

/**
 * Create booking
 */
export async function createBooking(bookingData) {
  try {
    const bookingsRef = collection(db, BOOKINGS_COLLECTION)
    const docRef = await addDoc(bookingsRef, {
      ...bookingData,
      createdAt: new Date().toISOString(),
      status: 'pending'
    })
    
    return {
      id: docRef.id,
      ...bookingData
    }
  } catch (error) {
    console.error('Error creating booking:', error)
    throw new Error('Failed to create booking')
  }
}

/**
 * Get user bookings
 */
export async function getUserBookings(userId) {
  try {
    const bookingsRef = collection(db, BOOKINGS_COLLECTION)
    const q = query(
      bookingsRef, 
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    )
    const snapshot = await getDocs(q)
    
    const bookings = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    
    return bookings
  } catch (error) {
    console.error('Error fetching bookings:', error)
    throw new Error('Failed to fetch bookings')
  }
}

// Export all services
export default {
  getAllVans,
  getVanById,
  getVansByType,
  getHostVans,
  searchVans,
  getUserById,
  updateUserProfile,
  loginUser,
  logoutUser,
  createBooking,
  getUserBookings
}