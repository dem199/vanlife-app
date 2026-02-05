import { useState, useEffect } from 'react'
import { getAllVans, getVanById, getHostVans, searchVans } from '@/services/api'

/**
 * Hook to fetch all vans
 */
export function useVans() {
  const [vans, setVans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchVans = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await getAllVans()
        setVans(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchVans()
  }, [])

  const refetch = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await getAllVans()
      setVans(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { vans, loading, error, refetch }
}

/**
 * Hook to fetch single van
 */
export function useVan(id) {
  const [van, setVan] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return

    const fetchVan = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await getVanById(id)
        setVan(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchVan()
  }, [id])

  return { van, loading, error }
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

    const fetchHostVans = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await getHostVans(hostId)
        setVans(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchHostVans()
  }, [hostId])

  return { vans, loading, error }
}

/**
 * Hook for searching vans
 */
export function useVanSearch() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const search = async (searchTerm) => {
    if (!searchTerm || searchTerm.trim() === '') {
      setResults([])
      return
    }

    try {
      setLoading(true)
      setError(null)
      const data = await searchVans(searchTerm)
      setResults(data)
    } catch (err) {
      setError(err.message)
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  const clearSearch = () => {
    setResults([])
    setError(null)
  }

  return { results, loading, error, search, clearSearch }
}

export default {
  useVans,
  useVan,
  useHostVans,
  useVanSearch
}