import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logoImg from '../assets/logo.png'

const navLinks = [
  { label: 'Kitchens', to: '/kitchens' },
  { label: 'Bedrooms', to: '/bedrooms' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact Us', to: '/contact' },
]

const IconChevronDown = () => (
  <svg width="8" height="5" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px', transition: 'transform 0.3s ease' }} className="navbar__chevron">
    <polyline points="1 1 5 5 9 1" />
  </svg>
)

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
          {/* Kitchens Dropdown */}
          <li className="navbar__item-dropdown">
            <NavLink
              to="/kitchens"
              className={({ isActive }) =>
                `navbar__link navbar__link--has-dropdown ${solid ? 'navbar__link--dark' : 'navbar__link--light'} ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              Kitchens
              <IconChevronDown />
            </NavLink>
            <ul className="navbar__dropdown-menu">
              <li>
                <Link to="/kitchens/leicht" className="navbar__dropdown-link">Leicht</Link>
              </li>
              <li>
                <Link to="/kitchens/keller" className="navbar__dropdown-link">Keller</Link>
              </li>
              <li>
                <Link to="/kitchens/novacucina" className="navbar__dropdown-link">Novacucina</Link>
              </li>
            </ul>
          </li>

          {/* Bedrooms Dropdown */}
          <li className="navbar__item-dropdown">
            <NavLink
              to="/bedrooms"
              className={({ isActive }) =>
                `navbar__link navbar__link--has-dropdown ${solid ? 'navbar__link--dark' : 'navbar__link--light'} ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              Bedrooms
              <IconChevronDown />
            </NavLink>
            <ul className="navbar__dropdown-menu">
              <li>
                <Link to="/bedrooms/wardrobes" className="navbar__dropdown-link">Wardrobes Overview</Link>
              </li>
              <li>
                <Link to="/bedrooms/wardrobes/hinged-doors" className="navbar__dropdown-link">Hinged Doors</Link>
              </li>
              <li>
                <Link to="/bedrooms/wardrobes/sliding-doors" className="navbar__dropdown-link">Sliding Doors</Link>
              </li>
              <li>
                <Link to="/bedrooms/wardrobes/flush-sliding" className="navbar__dropdown-link">Flush Sliding</Link>
              </li>
              <li>
                <Link to="/bedrooms/wardrobes/walk-in" className="navbar__dropdown-link">Walk-In</Link>
              </li>
              <li>
                <Link to="/bedrooms/wardrobes/accessories" className="navbar__dropdown-link">Accessories</Link>
              </li>
            </ul>
          </li>

          {/* Projects */}
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `navbar__link ${solid ? 'navbar__link--dark' : 'navbar__link--light'} ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              Projects
            </NavLink>
          </li>

          {/* Contact Us */}
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `navbar__link ${solid ? 'navbar__link--dark' : 'navbar__link--light'} ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              Contact Us
            </NavLink>
          </li>
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
          <li>
            <NavLink to="/kitchens" className="navbar__mobile-link">
              Kitchens
            </NavLink>
            <ul className="navbar__mobile-submenu">
              <li>
                <Link to="/kitchens/leicht" className="navbar__mobile-sublink" onClick={() => setMenuOpen(false)}>
                  Leicht
                </Link>
              </li>
              <li>
                <Link to="/kitchens/keller" className="navbar__mobile-sublink" onClick={() => setMenuOpen(false)}>
                  Keller
                </Link>
              </li>
              <li>
                <Link to="/kitchens/novacucina" className="navbar__mobile-sublink" onClick={() => setMenuOpen(false)}>
                  Novacucina
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/bedrooms" className="navbar__mobile-link">
              Bedrooms
            </NavLink>
            <ul className="navbar__mobile-submenu">
              <li>
                <Link to="/bedrooms/wardrobes" className="navbar__mobile-sublink" onClick={() => setMenuOpen(false)}>
                  Wardrobes Overview
                </Link>
              </li>
              <li>
                <Link to="/bedrooms/wardrobes/hinged-doors" className="navbar__mobile-sublink" onClick={() => setMenuOpen(false)}>
                  Hinged Doors
                </Link>
              </li>
              <li>
                <Link to="/bedrooms/wardrobes/sliding-doors" className="navbar__mobile-sublink" onClick={() => setMenuOpen(false)}>
                  Sliding Doors
                </Link>
              </li>
              <li>
                <Link to="/bedrooms/wardrobes/flush-sliding" className="navbar__mobile-sublink" onClick={() => setMenuOpen(false)}>
                  Flush Sliding
                </Link>
              </li>
              <li>
                <Link to="/bedrooms/wardrobes/walk-in" className="navbar__mobile-sublink" onClick={() => setMenuOpen(false)}>
                  Walk-In
                </Link>
              </li>
              <li>
                <Link to="/bedrooms/wardrobes/accessories" className="navbar__mobile-sublink" onClick={() => setMenuOpen(false)}>
                  Accessories
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/projects" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <Link to="/contact" className="navbar__mobile-cta" onClick={() => setMenuOpen(false)}>
              Book Consultation
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
