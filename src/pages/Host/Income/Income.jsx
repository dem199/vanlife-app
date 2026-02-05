import { motion } from 'framer-motion'
import { FiDollarSign, FiTrendingUp, FiCalendar } from 'react-icons/fi'
import './Income.css'

export default function Income() {
  const transactions = [
    { id: 1, amount: 720, date: 'Jan 15, 2026', van: 'Sunset Cruiser' },
    { id: 2, amount: 560, date: 'Jan 12, 2026', van: 'Coastal Wanderer' },
    { id: 3, amount: 450, date: 'Jan 8, 2026', van: 'City Commuter' },
    { id: 4, amount: 610, date: 'Jan 3, 2026', van: 'Retro Cruiser' }
  ]

  return (
    <div className="income-page">
      <motion.div
        className="income-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Income Overview</h2>
        <p>Track your earnings and payment history</p>
      </motion.div>

      <div className="income-stats">
        <div className="income-stat-card">
          <FiDollarSign className="stat-icon" />
          <div>
            <p className="stat-label">Total Income (Last 30 days)</p>
            <h3 className="stat-value">$2,340</h3>
            <span className="stat-trend positive">
              <FiTrendingUp /> +12.5%
            </span>
          </div>
        </div>

        <div className="income-stat-card">
          <FiCalendar className="stat-icon" />
          <div>
            <p className="stat-label">Upcoming Payments</p>
            <h3 className="stat-value">$890</h3>
            <span className="stat-info">Next payout: Feb 5</span>
          </div>
        </div>
      </div>

      <div className="transactions-section">
        <h3>Recent Transactions</h3>
        <div className="transactions-list">
          {transactions.map((transaction) => (
            <motion.div
              key={transaction.id}
              className="transaction-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: transaction.id * 0.1 }}
            >
              <div className="transaction-info">
                <h4>${transaction.amount}</h4>
                <p>{transaction.van}</p>
              </div>
              <div className="transaction-date">
                <p>{transaction.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}