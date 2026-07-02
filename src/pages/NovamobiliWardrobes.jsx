import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

// ── Hero & Categories fallback ────────────────────────────────────────────────
import UKS_HERO from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-hero.jpg'

// ── Hinged Door Wardrobes ─────────────────────────────────────────────────────
import UKS_HINGED_STAVE from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-hinged-stave.jpg'
import UKS_HINGED_ALFA from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-hinged-alfa.jpg'
import UKS_HINGED_LIBERTY from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-hinged-liberty.jpg'
import UKS_HINGED_THICK from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-hinged-thick.jpg'
import UKS_HINGED_VICO from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-hinged-vico.jpg'
import UKS_HINGED_UNIKA from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-hinged-unika.jpg'
import UKS_HINGED_CRYSTAL from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-hinged-crystal.jpg'
import UKS_HINGED_PLISSE from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-hinged-plisse.jpg'
import UKS_HINGED_GOLA from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-hinged-gola.jpg'

// ── Sliding Door Wardrobes ────────────────────────────────────────────────────
import UKS_SLIDING_LAYER from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-sliding-layer.jpg'
import UKS_SLIDING_ALFA from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-sliding-alfa.jpg'
import UKS_SLIDING_GOLA from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-sliding-gola.jpg'
import UKS_SLIDING_CRYSTAL from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-sliding-crystal.jpg'
import UKS_SLIDING_PLISSE from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-sliding-plisse.jpg'
import UKS_SLIDING_PICTURE from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-sliding-picture.jpg'
import UKS_SLIDING_CLASS from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-sliding-class.jpg'
import UKS_SLIDING_OFFSET from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-sliding-offset.jpg'
import UKS_SLIDING_MIDDLE from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-sliding-middle.jpg'
import UKS_SLIDING_DOVER from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-sliding-dover.jpg'
import UKS_SLIDING_ALLISON from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-sliding-allison.jpg'
import UKS_SLIDING_THICK from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-sliding-thick.jpg'

// ── Flush-Closing Sliding Door Wardrobes ──────────────────────────────────────
import UKS_FLUSH_PICTURE from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-flush-picture.jpg'
import UKS_FLUSH_MIDDLE from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-flush-middle.jpg'
import UKS_FLUSH_CLASS from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-flush-class.jpg'

// ── Wardrobe Accessories ──────────────────────────────────────────────────────
import UKS_ACC_CASSETTIERE from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-acc-cassettiere.jpg'
import UKS_ACC_LIGHTING from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-acc-lighting.jpg'
import UKS_ACC_RAILS from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-acc-rails.jpg'

// ── Walk-In Closets ───────────────────────────────────────────────────────────
import UKS_WALK_DEDALO from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-walk-dedalo.jpg'
import UKS_WALK_BEN from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-walk-ben.jpg'
import UKS_WALK_BREAK from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-walk-break.jpg'
import UKS_WALK_ARISTOTELE from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-walk-aristotele.jpg'

const SECTIONS = [
  {
    id: 'hinged',
    title: 'HINGED DOOR WARDROBES',
    count: '10 Models',
    link: '/bedrooms/wardrobes/hinged-doors',
    products: [
      { name: 'Hinged door Stave', image: UKS_HINGED_STAVE },
      { name: 'Hinged Door Alfa', image: UKS_HINGED_ALFA },
      { name: 'Hinged door Liberty', image: UKS_HINGED_LIBERTY },
      { name: 'Hinged door Thick', image: UKS_HINGED_THICK },
      { name: 'Hinged door Vico', image: UKS_HINGED_VICO },
      { name: 'Hinged door Unika', image: UKS_HINGED_UNIKA },
      { name: 'Hinged door Crystal', image: UKS_HINGED_CRYSTAL },
      { name: 'Hinged door Plissé', image: UKS_HINGED_PLISSE },
      { name: 'Hinged door Gola', image: UKS_HINGED_GOLA }
    ]
  },
  {
    id: 'sliding',
    title: 'SLIDING DOOR WARDROBES',
    count: '12 Models',
    link: '/bedrooms/wardrobes/sliding-doors',
    products: [
      { name: 'Sliding door Layer', image: UKS_SLIDING_LAYER },
      { name: 'Sliding door Alfa', image: UKS_SLIDING_ALFA },
      { name: 'Sliding door Gola', image: UKS_SLIDING_GOLA },
      { name: 'Sliding door Crystal', image: UKS_SLIDING_CRYSTAL },
      { name: 'Sliding door Plissé', image: UKS_SLIDING_PLISSE },
      { name: 'Sliding door Picture', image: UKS_SLIDING_PICTURE },
      { name: 'Sliding door Class', image: UKS_SLIDING_CLASS },
      { name: 'Sliding door Offset', image: UKS_SLIDING_OFFSET },
      { name: 'Sliding door Middle', image: UKS_SLIDING_MIDDLE },
      { name: 'Sliding door Dover', image: UKS_SLIDING_DOVER },
      { name: 'Sliding door Allison', image: UKS_SLIDING_ALLISON },
      { name: 'Thick Sliding Doors', image: UKS_SLIDING_THICK }
    ]
  },
  {
    id: 'flush-sliding',
    title: 'FLUSH-CLOSING SLIDING DOOR',
    count: '3 Models',
    link: '/bedrooms/wardrobes/flush-sliding',
    products: [
      { name: 'Flush-closing sliding door Picture', image: UKS_FLUSH_PICTURE },
      { name: 'Flush-closing sliding door Middle', image: UKS_FLUSH_MIDDLE },
      { name: 'Flush-closing sliding door Class', image: UKS_FLUSH_CLASS }
    ]
  },
  {
    id: 'accessories',
    title: 'WARDROBE ACCESSORIES',
    count: '3 Models',
    link: '/bedrooms/wardrobes/accessories',
    products: [
      { name: 'Internal drawer units', image: UKS_ACC_CASSETTIERE },
      { name: 'Wardrobe lighting', image: UKS_ACC_LIGHTING },
      { name: 'Hanging rails', image: UKS_ACC_RAILS }
    ]
  },
  {
    id: 'walk-in',
    title: 'WALK-IN CLOSETS',
    count: '4 Models',
    link: '/bedrooms/wardrobes/walk-in',
    products: [
      { name: 'Dedalo system', image: UKS_WALK_DEDALO },
      { name: 'Walk-in closet Ben', image: UKS_WALK_BEN },
      { name: 'Walk-in closet Break', image: UKS_WALK_BREAK },
      { name: 'Island Aristotele', image: UKS_WALK_ARISTOTELE }
    ]
  }
]

function WardrobeSection({ sec }) {
  const sliderRef = useRef(null)

  const scroll = (direction) => {
    if (sliderRef.current) {
      // scroll by the width of one card + gap (approx. container.clientWidth / 3)
      const scrollAmount = sliderRef.current.clientWidth / 3 + 16
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="nmw-sec-block">
      {/* Centered Category Heading with right link */}
      <div className="nmw-sec-header">
        <h2 className="nmw-sec-header__title">{sec.title}</h2>
        <div className="nmw-sec-header__right">
          <span className="nmw-sec-header__count">{sec.count}</span>
          <span className="nmw-sec-header__divider">/</span>
          <Link to={sec.link || "/contact"} className="nmw-sec-header__link">
            Discover all
          </Link>
        </div>
      </div>

      {/* Horizontal slider wrap */}
      <div className="nmw-slider-wrap">
        <div className="nmw-slider" ref={sliderRef}>
          {sec.products.map((prod, idx) => (
            <div key={idx} className="nmw-card">
              <Link to={sec.link || "/contact"} className="nmw-card__link">
                <div className="nmw-card__img-box">
                  <img src={prod.image} alt={prod.name} loading="lazy" />
                </div>
                <div className="nmw-card__info">
                  <h3 className="nmw-card__name">{prod.name.toUpperCase()}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Navigation Buttons (Scroller options) at bottom-left */}
        <div className="nmw-slider-nav">
          <button 
            onClick={() => scroll('left')} 
            className="nmw-slider-nav__btn" 
            aria-label="Scroll left"
          >
            ←
          </button>
          <button 
            onClick={() => scroll('right')} 
            className="nmw-slider-nav__btn" 
            aria-label="Scroll right"
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}

export default function NovamobiliWardrobes() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="nmw-page"
    >
      {/* ── IMAGE HERO OVERLAY (Copy to Copy) ── */}
      <section className="nmw-hero">
        <div
          className="nmw-hero__bg"
          style={{ backgroundImage: `url(${UKS_HERO})` }}
          aria-hidden="true"
        />
        <div className="nmw-hero__overlay" />
        
        {/* Breadcrumbs inside the Hero */}
        <div className="nmw-hero__top container">
          <nav className="nmw-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">&nbsp;/&nbsp;</span>
            <span className="nmw-breadcrumbs__current">Wardrobes</span>
          </nav>
        </div>

        {/* Big title WARDROBES bottom-left inside image */}
        <div className="nmw-hero__bottom container">
          <h1 className="nmw-hero__title">WARDROBES</h1>
        </div>
      </section>

      {/* ── INTRO DESCRIPTION ── */}
      <section className="nmw-intro container">
        <p className="nmw-intro__text">
          Novamobili's <strong>designer wardrobes for the bedroom</strong> are a contemporary, functional solution to your furniture requirements. Quality raw materials, attention to details and finishes, for a comprehensive system that's all about flexibility and optimization. With our <strong>designer wardrobes</strong>, you can make smarter use of space in your bedroom and living area, customizing them with different finishes, handles and accessories. Our catalogue features a number of collections that cater to all manner of styles and needs, with everything from hinged to sliding doors, and even flush-closing sliding door options: all wardrobes are fully customizable.
        </p>
      </section>

      {/* ── SECTIONS & HORIZONTAL SLIDERS ── */}
      <section className="nmw-sections container">
        {SECTIONS.map((sec) => (
          <WardrobeSection key={sec.id} sec={sec} />
        ))}
      </section>



      {/* ── SCOPED STYLES ── */}
      <style>{`
        .nmw-page {
          --bg-white:   #ffffff;
          --text-dark:  #323334;
          --text-muted: #6f7071;
          --gold:       #b8905a;
          --border:     rgba(0, 0, 0, 0.2);
          --font-serif: 'Libre Baskerville', Georgia, serif;
          --font-sans:  'Plus Jakarta Sans', system-ui, sans-serif;
          
          background: var(--bg-white);
          color: var(--text-dark);
          font-family: var(--font-sans);
          padding-bottom: 80px;
        }

        .nmw-page .container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 48px;
        }
        @media (max-width: 768px) {
          .nmw-page .container { padding: 0 20px; }
        }

        /* ── Hero section ── */
        .nmw-hero {
          position: relative;
          width: 100%;
          height: 80vh;
          min-height: 500px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 120px 0 60px;
        }
        .nmw-hero__bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .nmw-hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.05) 50%,
            rgba(0, 0, 0, 0.35) 100%
          );
        }
        .nmw-hero__top {
          position: relative;
          z-index: 2;
          width: 100%;
        }
        .nmw-hero__bottom {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        /* ── Breadcrumbs ── */
        .nmw-breadcrumbs {
          display: flex;
          align-items: center;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.05em;
          text-transform: capitalize;
          color: rgba(255, 255, 255, 0.85);
        }
        .nmw-breadcrumbs a {
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
        }
        .nmw-breadcrumbs__current {
          color: #fff;
          opacity: 0.7;
        }

        /* ── Title overlay ── */
        .nmw-hero__title {
          font-family: var(--font-serif);
          font-size: clamp(48px, 8.5vw, 100px);
          font-weight: 300;
          color: #fff;
          margin: 0;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          line-height: 0.95;
        }

        /* ── Intro block ── */
        .nmw-intro {
          padding-top: 56px;
          padding-bottom: 96px;
        }
        .nmw-intro__text {
          font-size: 15px;
          line-height: 1.7;
          color: var(--text-dark);
          max-width: 1000px;
          margin: 0;
        }

        /* ── Category Blocks ── */
        .nmw-sections {
          display: flex;
          flex-direction: column;
          gap: 112px;
        }
        .nmw-sec-block {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .nmw-sec-header {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1.5px solid rgba(0, 0, 0, 0.35);
          padding-bottom: 16px;
          margin-bottom: 24px;
        }
        .nmw-sec-header__title {
          font-family: var(--font-serif);
          font-size: clamp(18px, 2.2vw, 24px);
          font-weight: 400;
          margin: 0;
          letter-spacing: 0.08em;
          text-align: center;
          color: var(--text-dark);
        }
        .nmw-sec-header__right {
          position: absolute;
          right: 0;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .nmw-sec-header__count {
          color: var(--text-muted);
        }
        .nmw-sec-header__divider {
          color: var(--border);
        }
        .nmw-sec-header__link {
          color: var(--text-dark);
          text-decoration: underline;
          transition: color 0.25s;
        }
        .nmw-sec-header__link:hover {
          color: var(--gold);
        }

        /* ── Horizontal Scroll Slider ── */
        .nmw-slider-wrap {
          margin: 0;
          padding: 0;
          position: relative;
        }
        .nmw-slider {
          display: flex;
          gap: 32px;
          overflow-x: auto;
          padding: 16px 0 16px;
          scrollbar-width: none; /* Hide scrollbar for Firefox */
          scroll-behavior: smooth;
        }
        .nmw-slider::-webkit-scrollbar {
          display: none; /* Hide scrollbar for Chrome/Safari */
        }

        .nmw-card {
          flex: 0 0 calc((100% - 64px) / 3); /* Exactly 3 items visible per line (2 gaps of 32px) */
          background: transparent;
          border: none;
          box-shadow: none;
          overflow: hidden;
        }
        @media (max-width: 992px) {
          .nmw-card {
            flex: 0 0 calc((100% - 24px) / 2); /* Exactly 2 items visible */
          }
          .nmw-slider {
            gap: 24px;
          }
        }
        @media (max-width: 576px) {
          .nmw-card {
            flex: 0 0 100%; /* Exactly 1 item visible */
          }
          .nmw-slider {
            gap: 16px;
          }
        }
        .nmw-card__link {
          display: block;
          text-decoration: none;
          color: inherit;
        }
        .nmw-card__img-box {
          width: 100%;
          aspect-ratio: 4/3;
          overflow: hidden;
          background: transparent;
          line-height: 0;
        }
        .nmw-card__img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nmw-card:hover .nmw-card__img-box img {
          transform: scale(1.04);
        }
        .nmw-card__info {
          padding: 24px 0 12px;
          text-align: center;
        }
        .nmw-card__name {
          font-family: var(--font-serif);
          font-size: 15px;
          font-weight: 400;
          margin: 0;
          color: var(--text-dark);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        /* ── Navigation Buttons ── */
        .nmw-slider-nav {
          display: flex;
          gap: 12px;
          margin-top: 12px;
          padding-left: 4px;
        }
        .nmw-slider-nav__btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.15);
          background: #ffffff;
          color: #1d1d1d;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          cursor: pointer;
          transition: border-color 0.25s, color 0.25s;
          outline: none;
        }
        .nmw-slider-nav__btn:hover {
          border-color: var(--text-dark);
          color: var(--gold);
        }

        /* ── Download ── */
        .nmw-download {
          background: #f6f6f3;
          padding: 64px 0;
          text-align: center;
          margin-top: 80px;
          border-top: 1px solid var(--border);
        }
        .nmw-download__inner {
          max-width: 700px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .nmw-download__heading {
          font-family: var(--font-serif);
          font-size: clamp(24px, 3.5vw, 36px);
          font-weight: 400;
          margin: 0;
        }
        .nmw-download__text {
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-muted);
          margin: 0 0 10px;
        }
        .nmw-download__btn {
          display: inline-block;
          background: var(--text-dark);
          color: #fff;
          padding: 16px 36px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
          transition: background 0.3s;
        }
        .nmw-download__btn:hover {
          background: var(--gold);
        }
      `}</style>
    </motion.div>
  )
}
