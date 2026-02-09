import { useState, useEffect } from 'react'
import { 
  getAllVans, 
  getVanById, 
  getHostVans, 
  searchVans 
} from '@/services/api'

/**
 * Hook to fetch all vans
 */
export function useVans() {
  const [vans, setVans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchVans()
  }, [])

  const fetchVans = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await getAllVans()
      // Ensure each van has an id field
      const vansWithIds = data.map(van => ({
        ...van,
        id: van.id // Firestore document ID
      }))
      setVans(vansWithIds)
    } catch (err) {
      setError(err.message)
      console.error('Error fetching vans:', err)
    } finally {
      setLoading(false)
    }
  }

  return { vans, loading, error, refetch: fetchVans }
}

/**
 * Hook to fetch single van by ID
 */
export function useVan(id) {
  const [van, setVan] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return

    fetchVan()
  }, [id])

  const fetchVan = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await getVanById(id)
      // Ensure van has id field
      setVan({
        ...data,
        id: data.id || id
      })
    } catch (err) {
      setError(err.message)
      console.error('Error fetching van:', err)
    } finally {
      setLoading(false)
    }
  }

  return { van, loading, error, refetch: fetchVan }
}

/**
 * Hook to fetch host vans
 */
export function useHostVans(hostId) {
  const [vans, setVans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!hostId) return

    fetchHostVans()
  }, [hostId])

  const fetchHostVans = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await getHostVans(hostId)
      // Ensure each van has an id field
      const vansWithIds = data.map(van => ({
        ...van,
        id: van.id
      }))
      setVans(vansWithIds)
    } catch (err) {
      setError(err.message)
      console.error('Error fetching host vans:', err)
    } finally {
      setLoading(false)
    }
  }

  return { vans, loading, error, refetch: fetchHostVans }
}

/**
 * Hook to search vans
 */
export function useVanSearch(searchTerm) {
  const [vans, setVans] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!searchTerm) {
      setVans([])
      return
    }

    searchForVans()
  }, [searchTerm])

  const searchForVans = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await searchVans(searchTerm)
      // Ensure each van has an id field
      const vansWithIds = data.map(van => ({
        ...van,
        id: van.id
      }))
      setVans(vansWithIds)
    } catch (err) {
      setError(err.message)
      console.error('Error searching vans:', err)
    } finally {
      setLoading(false)
    }
  }

  return { vans, loading, error, refetch: searchForVans }
}