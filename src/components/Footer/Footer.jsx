import { Link } from 'react-router-dom'
import { FaGithub, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">#VANLIFE</h3>
            <p className="footer-description">
              Your journey begins with the perfect van. Explore, adventure, and create memories on the open road.
            </p>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links">
              <li><Link to="/vans">All Vans</Link></li>
              <li><Link to="/vans?type=luxury">Luxury Vans</Link></li>
              <li><Link to="/vans?type=rugged">Rugged Vans</Link></li>
              <li><Link to="/vans?type=simple">Simple Vans</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/host">Become a Host</Link></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#cookies">Cookie Policy</a></li>
              <li><a href="#sitemap">Sitemap</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} VanLife. All rights reserved.
          </p>
          <p className="footer-tagline">
            Made with ❤️ for adventurers By Optimistic
          </p>
        </div>
      </div>
    </footer>
  )
}