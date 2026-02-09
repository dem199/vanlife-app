import { collection, doc, setDoc, getDocs } from 'firebase/firestore'
import { db } from '../config/firebase'
import { vansData, usersData } from '../data/seedData'

/**
 * Seed Firebase with initial data using custom document IDs
 */
export async function seedDatabase() {
  console.log('🌱 Starting database seeding...')

  try {
    // Check if data already exists
    const vansSnapshot = await getDocs(collection(db, 'vans'))
    if (!vansSnapshot.empty) {
      console.log('⚠️  Database already contains data. Skipping seed.')
      return
    }

    // Seed vans with custom IDs (van-001, van-002, etc.)
    console.log('📦 Seeding vans...')
    const vansPromises = vansData.map((van, index) => {
      const vanId = `van-${String(index + 1).padStart(3, '0')}` // van-001, van-002, etc.
      return setDoc(doc(db, 'vans', vanId), van)
    })
    await Promise.all(vansPromises)
    console.log(`✅ Added ${vansData.length} vans`)

    // Seed users with custom IDs
    console.log('👥 Seeding users...')
    const usersPromises = usersData.map((user, index) => {
      const userId = user.id || `user-${String(index + 1).padStart(3, '0')}`
      return setDoc(doc(db, 'users', userId), user)
    })
    await Promise.all(usersPromises)
    console.log(`✅ Added ${usersData.length} users`)

    console.log('🎉 Database seeding completed successfully!')
  } catch (error) {
    console.error('❌ Error seeding database:', error)
    throw error
  }
}

// Uncomment to run seeding - ONLY RUN ONCE
 // seedDatabase()

export default seedDatabase