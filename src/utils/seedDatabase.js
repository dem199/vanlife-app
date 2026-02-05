import { collection, addDoc, getDocs } from 'firebase/firestore'
import { db } from '../config/firebase'  // ← Changed from './config/firebase'
import { vansData, usersData } from '../data/seedData'  // ← Changed from './data/seedData'

/**
 * Seed Firebase with initial data
 * Run this once to populate the database
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

    // Seed vans
    console.log('📦 Seeding vans...')
    const vansPromises = vansData.map(van =>
      addDoc(collection(db, 'vans'), van)
    )
    await Promise.all(vansPromises)
    console.log(`✅ Added ${vansData.length} vans`)

    // Seed users
    console.log('👥 Seeding users...')
    const usersPromises = usersData.map(user =>
      addDoc(collection(db, 'users'), user)
    )
    await Promise.all(usersPromises)
    console.log(`✅ Added ${usersData.length} users`)

    console.log('🎉 Database seeding completed successfully!')
  } catch (error) {
    console.error('❌ Error seeding database:', error)
    throw error
  }
}

// Uncomment to run seeding
// seedDatabase()

export default seedDatabase