import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logoImg from '../assets/logo.png'

const navLinks = [
  { label: 'Kitchens', to: '/kitchens' },
  { label: 'Bedrooms', to: '/bedrooms' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isKitchens = location.pathname === '/kitchens' || location.pathname === '/kitchens/leicht' || location.pathname === '/kitchens/keller' || location.pathname === '/kitchens/novacucina'
  const isIdeaPage = location.pathname === '/kitchens/leicht/idea'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  // On home & kitchens page: transparent until scrolled. Other pages: always solid.
  const solid = !(isHome || isKitchens) || scrolled || isIdeaPage

  return (
    <nav className={`navbar ${solid ? 'navbar--solid' : 'navbar--transparent'} ${menuOpen ? 'navbar--open' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className={`navbar__logo ${solid ? 'navbar__logo--dark' : 'navbar__logo--light'}`}>
          <img
            src={logoImg}
            alt="UKS Interiors"
            className="navbar__logo-img"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `navbar__link ${solid ? 'navbar__link--dark' : 'navbar__link--light'} ${isActive ? 'navbar__link--active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to="/contact"
          className={`navbar__cta ${solid ? 'navbar__cta--dark' : 'navbar__cta--light'}`}
        >
          Book Consultation
        </Link>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${solid ? 'navbar__hamburger--dark' : 'navbar__hamburger--light'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <ul className="navbar__mobile-links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className="navbar__mobile-link">
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/contact" className="navbar__mobile-cta">
              Book Consultation
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
