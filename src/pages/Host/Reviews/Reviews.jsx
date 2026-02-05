import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import './Reviews.css'

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      rating: 5,
      name: 'Sarah M.',
      date: 'Jan 20, 2026',
      van: 'Sunset Cruiser',
      comment: 'Amazing van! Everything was perfect. Highly recommend for road trips!'
    },
    {
      id: 2,
      rating: 5,
      name: 'Mike T.',
      date: 'Jan 15, 2026',
      van: 'Coastal Wanderer',
      comment: 'Great experience. The van was clean and well-maintained. Will rent again!'
    },
    {
      id: 3,
      rating: 4,
      name: 'Emily R.',
      date: 'Jan 10, 2026',
      van: 'Retro Cruiser',
      comment: 'Nice van with retro vibes. Could use a few more amenities but overall good.'
    }
  ]

  const averageRating = 4.8

  return (
    <div className="reviews-page">
      <motion.div
        className="reviews-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Customer Reviews</h2>
        <p>See what renters are saying about your vans</p>
      </motion.div>

      <div className="reviews-summary">
        <div className="rating-overview">
          <div className="rating-display">
            <FiStar className="star-icon" />
            <span className="rating-number">{averageRating}</span>
          </div>
          <p className="rating-text">out of 5 stars</p>
          <p className="reviews-count">Based on {reviews.length} reviews</p>
        </div>
      </div>

      <div className="reviews-list">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            className="review-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="review-header">
              <div>
                <h4>{review.name}</h4>
                <p className="review-van">{review.van}</p>
              </div>
              <div className="review-rating">
                {[...Array(review.rating)].map((_, i) => (
                  <FiStar key={i} className="star filled" />
                ))}
              </div>
            </div>
            <p className="review-comment">{review.comment}</p>
            <p className="review-date">{review.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}