import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiMapPin, FiTrendingUp, FiShield } from 'react-icons/fi'
import './Home.css'

export default function Home() {
  const features = [
    {
      icon: <FiMapPin />,
      title: 'Choose Your Adventure',
      description: 'From rugged mountain trails to coastal highways, find the perfect van for any journey'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Competitive Prices',
      description: 'Great rates on premium vans. Start your adventure without breaking the bank'
    },
    {
      icon: <FiShield />,
      title: 'Trusted & Safe',
      description: 'All vans are inspected and insured. Travel with confidence'
    }
  ]

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              You got the travel plans,
              <br />
              <span className="hero-highlight">we got the travel vans.</span>
            </h1>
            <p className="hero-description">
              Add adventure to your life by joining the #vanlife movement. 
              Rent the perfect van to make your perfect road trip.
            </p>
            <Link to="/vans" className="btn btn-accent btn-lg hero-cta">
              Find your van
              <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <motion.div 
            className="features-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Why Choose VanCruise?</h2>
            <p>Everything you need for an unforgettable journey</p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Start Your Adventure Today</h2>
            <p>Join thousands of travelers who've discovered the freedom of van life</p>
            <div className="cta-buttons">
              <Link to="/vans" className="btn btn-accent btn-lg">
                Browse Vans
              </Link>
              <Link to="/about" className="btn btn-outline btn-lg">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}