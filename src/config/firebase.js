import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Firebase configuration - USING CORRECT PROJECT
const firebaseConfig = {
  apiKey: "AIzaSyAhAgJY0HDNefdvlOdtWRP2DE2jE_78t44",
  authDomain: "vanlife-27fe7.firebaseapp.com",
  projectId: "vanlife-27fe7",
  storageBucket: "vanlife-27fe7.firebasestorage.app",
  messagingSenderId: "377876515296",
  appId: "1:377876515296:web:b200952ff3b1e756db8385"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize services
export const db = getFirestore(app)
export const auth = getAuth(app)

export default app