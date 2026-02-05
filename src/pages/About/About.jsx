import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './About.css'

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Image */}
      <motion.div 
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src="https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=1600&auto=format&fit=crop" 
          alt="Van parked by mountain lake"
          className="about-hero-image"
        />
      </motion.div>

      {/* Content Section */}
      <div className="container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="about-title">
            Don't squeeze in a sedan when you could relax in a van.
          </h1>
          
          <div className="about-text">
            <p>
              Our mission is to enliven your road trip with the perfect travel van rental. 
              Our vans are recertified before each trip to ensure your travel plans can go 
              off without a hitch. (Hitch costs extra 😉)
            </p>
            <p>
              Our team is full of vanlife enthusiasts who know firsthand the magic of touring 
              the world on 4 wheels. We've spent years perfecting the art of van conversions 
              and finding the perfect balance between comfort and adventure.
            </p>
            <p>
              Whether you're planning a weekend getaway, a month-long cross-country journey, 
              or anything in between, we have the perfect van waiting for you. Each vehicle 
              in our fleet is carefully maintained and comes equipped with everything you 
              need to make your trip unforgettable.
            </p>
          </div>

          <motion.div 
            className="about-stats"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="stat">
              <h3>1000+</h3>
              <p>Happy Travelers</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Premium Vans</p>
            </div>
            <div className="stat">
              <h3>4.9</h3>
              <p>Average Rating</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Box */}
        <motion.div 
          className="about-cta-box"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Your destination is waiting.</h2>
          <h2>Your van is ready.</h2>
          <Link to="/vans" className="btn btn-accent btn-lg">
            Explore our vans
          </Link>
        </motion.div>
      </div>
    </div>
  )
}