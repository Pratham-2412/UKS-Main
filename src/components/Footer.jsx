import { Link } from 'react-router-dom'
import { useState } from 'react'

const exploreLinks = [
  { label: 'Kitchens', to: '/kitchens' },
  { label: 'Bedrooms', to: '/bedrooms' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className="footer">
      <div className="footer__inner container">
        {/* Brand Column */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span className="footer__logo-uks">UKS</span>
          </Link>
          <p className="footer__desc">
            UKS Interiors design and craft bespoke luxury kitchens and home interiors for discerning clients across Europe.
          </p>
          <div className="footer__newsletter">
            <span className="footer__newsletter-label">NEWSLETTER</span>
            <form className="footer__newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="footer__newsletter-input"
                required
              />
              <button type="submit" className="footer__newsletter-btn">
                SUBSCRIBE →
              </button>
            </form>
          </div>
        </div>

        {/* Explore */}
        <div className="footer__col">
          <h4 className="footer__col-heading">EXPLORE</h4>
          <ul className="footer__col-links">
            {exploreLinks.map(l => (
              <li key={l.to}>
                <Link to={l.to} className="footer__col-link">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Studio */}
        <div className="footer__col">
          <h4 className="footer__col-heading">STUDIO</h4>
          <address className="footer__address">
            <p>UKS Design Studio</p>
            <p>22 Pavilion Road</p>
            <p>London SW1X 0BP</p>
            <br />
            <a href="tel:+442070000000" className="footer__contact-link">+44 (0)20 7000 0000</a>
            <a href="mailto:studio@uksinteriors.com" className="footer__contact-link">studio@uksinteriors.com</a>
          </address>
        </div>

        {/* Follow */}
        <div className="footer__col">
          <h4 className="footer__col-heading">FOLLOW</h4>
          <div className="footer__social">
            <a href="#" className="footer__social-icon" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="#" className="footer__social-icon" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="2"/>
                <path d="M7 10v7M7 7v.5M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>
              </svg>
            </a>
            <a href="#" className="footer__social-icon" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="2"/>
                <path d="M15 8h-2a1 1 0 0 0-1 1v2h3l-.5 3H12v6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner container">
          <p className="footer__copy">© 2026 UKS Interiors. All rights reserved. | Created and maintained by <a href="https://technoadviser.com/" target="_blank" rel="noopener noreferrer">technoadviser</a></p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Privacy</a>
            <a href="#" className="footer__legal-link">Terms</a>
            <a href="#" className="footer__legal-link">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
