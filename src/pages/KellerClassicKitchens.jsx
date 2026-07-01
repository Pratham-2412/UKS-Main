import HERO_CLASSIC_IMG from '../assets/uks-classic-kitchens/1920-x-1090-hero-klassiekekeukens.webp';
import INTRO_CLASSIC_IMG from '../assets/uks-classic-kitchens/960-x-1024-klassiek.webp';
import RETRO_VIBES_THUMB from '../assets/uks-classic-kitchens/retro-vibes-hero.webp';
import NATURAL_WEAVE_THUMB from '../assets/uks-classic-kitchens/natural-weave-hero.webp';
import CALM_FLOW_THUMB from '../assets/uks-classic-kitchens/calm-flow-hero2.webp';
import TIMELESS_CHARM_THUMB from '../assets/uks-classic-kitchens/timeless-charm-1326-x-884-afbeelding.webp';
import BLISS_BOUTIQUE_THUMB from '../assets/uks-bliss-boutique/uks-bliss-boutique-hero-fallback.webp';
import GLAM_CHIC_THUMB from '../assets/uks-glam-chic/uks-glam-chic-hero.webp';
import MAJESTIC_MANSION_THUMB from '../assets/uks-majestic-mansion/uks-majestic-mansion-hero.webp';
import MARBLING_MOODS_THUMB from '../assets/uks-marbling-moods/uks-marbling-moods-hero.webp';
import OCEAN_BREEZE_THUMB from '../assets/uks-ocean-breeze/uks-ocean-breeze-hero.webp';
import ORIENTAL_ESSENCE_THUMB from '../assets/uks-oriental-essence/uks-oriental-essence-hero.webp';
import RAW_NATURE_THUMB from '../assets/uks-raw-nature/uks-raw-nature-hero.webp';
import TUSCAN_VILLA_THUMB from '../assets/uks-tuscan-villa/uks-tuscan-villa-hero.webp';
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
const BASE = 'https://www.kellerkitchens.com/media/cache/generic/rc';
const CLASSIC_MODELS = [
  {
    name: 'Retro Vibes',
    slug: 'retro-vibes',
    desc: 'Warm 70s-inspired aesthetics combined with contemporary cabinet layouts.',
    image: RETRO_VIBES_THUMB
  },
  {
    name: 'Natural Weave',
    slug: 'natural-weave',
    desc: 'Organic textures and cane webbing inserts mixed with solid wood frames.',
    image: NATURAL_WEAVE_THUMB
  },

  {
    name: 'Calm Flow',
    slug: 'calm-flow',
    desc: 'Symmetrical handleless layouts in neutral beige and soft wood textures.',
    image: CALM_FLOW_THUMB
  },
  {
    name: 'Timeless Charm',
    slug: 'timeless-charm',
    desc: 'Elegant country-style panel doors with metallic handles and marble toppings.',
    image: TIMELESS_CHARM_THUMB
  },
  {
    name: 'Bliss Boutique',
    slug: 'bliss-boutique',
    desc: 'Luxurious hotel boutique setup featuring rich gold trims and dark frames.',
    image: BLISS_BOUTIQUE_THUMB
  },
  {
    name: 'Glam Chic',
    slug: 'glam-chic',
    desc: 'High-gloss lacquer finishes paired with majestic mirrored backsplashes.',
    image: GLAM_CHIC_THUMB
  },
  {
    name: 'Majestic Mansion',
    slug: 'majestic-mansion',
    desc: 'Grand scale configurations with double cooking islands and solid stone counters.',
    image: MAJESTIC_MANSION_THUMB
  },
  {
    name: 'Marbling Moods',
    slug: 'marbling-moods',
    desc: 'Stunning veined white marble panels contrasting with deep matte charcoal accents.',
    image: MARBLING_MOODS_THUMB
  },
  {
    name: 'Ocean Breeze',
    slug: 'ocean-breeze',
    desc: 'Soft pastel teal tones combined with brass detailing for a light seaside feel.',
    image: OCEAN_BREEZE_THUMB
  },
  {
    name: 'Oriëntal Essence',
    slug: 'oriental-essence',
    desc: 'Deep red lacquer details combined with dark bamboo screens and dark stone worktops.',
    image: ORIENTAL_ESSENCE_THUMB
  },
  {
    name: 'Raw Nature',
    slug: 'raw-nature',
    desc: 'Rough natural stone pillars paired with thick dark oak cabinet fronts.',
    image: RAW_NATURE_THUMB
  },
  {
    name: 'Tuscan Villa',
    slug: 'tuscan-villa',
    desc: 'Terracotta floor tiles, warm sandstone arches and classic shaker units.',
    image: TUSCAN_VILLA_THUMB
  }
]

export default function KellerClassicKitchens() {
  const [activeModel, setActiveModel] = useState(0)
  const trackRef = useRef(null)

  const handleNext = () => {
    setActiveModel((prev) => (prev + 1) % CLASSIC_MODELS.length)
    scrollActiveIntoView((activeModel + 1) % CLASSIC_MODELS.length)
  }

  const handlePrev = () => {
    setActiveModel((prev) => (prev - 1 + CLASSIC_MODELS.length) % CLASSIC_MODELS.length)
    scrollActiveIntoView((activeModel - 1 + CLASSIC_MODELS.length) % CLASSIC_MODELS.length)
  }

  const scrollActiveIntoView = (index) => {
    if (trackRef.current) {
      const items = trackRef.current.querySelectorAll('.kc-thumb-card')
      const target = items[index]
      if (target) {
        trackRef.current.scrollTo({
          left: target.offsetLeft - trackRef.current.offsetWidth / 2 + target.offsetWidth / 2,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="kc-page"
    >
      {/* ── HERO BANNER ── */}
      <section className="kc-hero">
        <img
          src={HERO_CLASSIC_IMG}
          alt="Keller Classic Kitchens"
          className="kc-hero__img"
        />
        <div className="kc-hero__overlay">
          <div className="container">
            <nav className="kc-breadcrumbs">
              <Link to="/kitchens">Kitchens</Link>
              <span>/</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span>/</span>
              <span className="current">Classic Kitchens</span>
            </nav>
            <h1 className="kc-hero__title">Classic Kitchens</h1>
            <p className="kc-hero__subtitle">Majestic, elegant design featuring rich textures and symmetrical lines.</p>
          </div>
        </div>
      </section>

      {/* ── INTRO DETAILS ── */}
      <section className="kc-intro">
        <div className="container">
          <div className="kc-intro__grid">
            <div className="kc-intro__left">
              <span className="kc-label">INTERIOR STYLES</span>
              <h2 className="kc-intro__heading">Majestic & Elegant Luxury</h2>
            </div>
            <div className="kc-intro__right">
              <p className="kc-intro__desc">
                The classic living style is majestic and elegant with rich materials and deep colour palettes. Characteristic are symmetrical lines, ornaments and elements such as columns, panelling, chandeliers, fireplaces and bookcases. The interior evokes a feeling of luxury and wealth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE CAROUSEL GRID ── */}
      <section className="kc-carousel-sec">
        <div className="container">
          <div className="kc-display-card">
            <div className="kc-display-card__image-wrap">
              <img
                src={CLASSIC_MODELS[activeModel].image}
                alt={CLASSIC_MODELS[activeModel].name}
                className="kc-display-card__img"
              />
              {CLASSIC_MODELS[activeModel].slug && (
                <Link
                  to={`/kitchens/keller/classic-kitchens/${CLASSIC_MODELS[activeModel].slug}`}
                  className="kc-display-card__image-overlay-btn"
                >
                  More about this kitchen &rarr;
                </Link>
              )}
            </div>
            <div className="kc-display-card__content">
              <span className="kc-display-card__num">
                {String(activeModel + 1).padStart(2, '0')} / {String(CLASSIC_MODELS.length).padStart(2, '0')}
              </span>
              <h3 className="kc-display-card__title">{CLASSIC_MODELS[activeModel].name}</h3>
              <p className="kc-display-card__desc">{CLASSIC_MODELS[activeModel].desc}</p>
              {CLASSIC_MODELS[activeModel].slug && (
                <Link to={`/kitchens/keller/classic-kitchens/${CLASSIC_MODELS[activeModel].slug}`} className="kc-display-card__btn">
                  <span>More about this kitchen</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              )}

            </div>
          </div>

          {/* Thumbnail track wrapper */}
          <div className="kc-track-wrapper">
            <button onClick={handlePrev} className="kc-track-btn kc-track-btn--prev" aria-label="Previous model">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div ref={trackRef} className="kc-track">
              {CLASSIC_MODELS.map((model, idx) => (
                <div
                  key={model.name}
                  onClick={() => {
                    setActiveModel(idx)
                    scrollActiveIntoView(idx)
                  }}
                  className={`kc-thumb-card ${idx === activeModel ? 'kc-thumb-card--active' : ''}`}
                >
                  <div className="kc-thumb-card__image-wrap">
                    <img src={model.image} alt={model.name} />
                  </div>
                  <span className="kc-thumb-card__name">{model.name}</span>
                </div>
              ))}
            </div>

            <button onClick={handleNext} className="kc-track-btn kc-track-btn--next" aria-label="Next model">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── STYLE SPLIT INFO SECTION ── */}
      <section className="kc-split-section">
        <div className="container">
          <div className="kc-split-grid">
            <div className="kc-split-content">
              <h2 className="kc-split-title">Is classic your style?</h2>
              <p className="kc-split-body">
                Within this style we see different movements such as the boutique hotel style or influences from the early 20th century such as art deco. More and more modern-classic interiors in which classical elements are applied in a modern way today.
              </p>
            </div>
            <div className="kc-split-media">
              <img
                src={INTRO_CLASSIC_IMG}
                alt="Moodboard classic style"
                className="kc-split-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── BROCHURE CTA SECTION ── */}
      <section className="kc-brochure-section">
        <div className="container">
          <div className="kc-brochure-box">
            <h2 className="kc-brochure-title">Want more inspiration?</h2>
            <p className="kc-brochure-desc">
              Finding inspiration is an important step towards your personal kitchen, and perhaps the most fun! In our brochure we offer you kitchen inspiration in four interior styles, according to the latest trends. For each kitchen you will find the materials and colours used, and we show alternatives for a different taste or price tag.
            </p>
            <Link to="/contact" className="kc-brochure-btn">
              Download our brochure
            </Link>
          </div>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .kc-page {
          --charcoal: #1d1d1f;
          --mid-gray: #424245;
          --light-bg: #f5f5f7;
          --border-color: #d2d2d7;
          --accent-brown: #a9a7a7;
          --font-serif: var(--font-serif, Georgia, serif);
          --font-sans: var(--font-sans, system-ui, sans-serif);
          background: #ffffff;
          color: var(--charcoal);
          font-family: var(--font-sans);
          overflow-x: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
        @media (max-width: 768px) {
          .container {
            padding: 0 20px;
          }
        }

        /* ── Hero Banner ── */
        .kc-hero {
          position: relative;
          height: 100vh;
          overflow: hidden;
          background: #111;
        }
        .kc-hero__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0.8;
        }
        .kc-hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%);
          display: flex;
          align-items: flex-end;
          padding-bottom: 60px;
        }
        .kc-breadcrumbs {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 20px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .kc-breadcrumbs a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .kc-breadcrumbs a:hover {
          color: #ffffff;
        }
        .kc-breadcrumbs .current {
          color: #ffffff;
          font-weight: 500;
        }
        .kc-hero__title {
          font-family: var(--font-serif);
          font-size: clamp(36px, 5.5vw, 68px);
          font-weight: 300;
          color: #ffffff;
          margin: 0 0 10px;
          letter-spacing: -0.02em;
        }
        .kc-hero__subtitle {
          font-family: var(--font-serif);
          font-size: clamp(16px, 2vw, 22px);
          font-style: italic;
          color: rgba(255, 255, 255, 0.85);
          margin: 0;
          max-width: 600px;
          line-height: 1.35;
        }

        /* ── Intro Section ── */
        .kc-intro {
          padding: 80px 0;
          border-bottom: 1px solid var(--border-color);
        }
        .kc-intro__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        @media (min-width: 768px) {
          .kc-intro__grid {
            grid-template-columns: 4fr 8fr;
          }
        }
        .kc-label {
          display: block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--accent-brown);
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .kc-intro__heading {
          font-family: var(--font-serif);
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 300;
          line-height: 1.25;
          margin: 0;
        }
        .kc-intro__desc {
          font-size: 18px;
          line-height: 1.75;
          color: var(--mid-gray);
          margin: 0;
        }

        /* ── Carousel Grid Section ── */
        .kc-carousel-sec {
          padding: 80px 0;
          background: var(--light-bg);
        }

        /* Display Card */
        .kc-display-card {
          display: grid;
          grid-template-columns: 1fr;
          background: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          margin-bottom: 40px;
        }
        @media (min-width: 860px) {
          .kc-display-card {
            grid-template-columns: 7fr 5fr;
          }
        }
        .kc-display-card__image-wrap {
          position: relative;
          aspect-ratio: 16/10;
          overflow: hidden;
          background: #000;
        }
        @media (min-width: 860px) {
          .kc-display-card__image-wrap {
            aspect-ratio: auto;
            height: 520px;
          }
        }
        .kc-display-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .kc-display-card__image-overlay-btn {
          position: absolute;
          bottom: 24px;
          left: 24px;
          background: #1d1d1f;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 99px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: background 0.25s ease, transform 0.2s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          z-index: 10;
        }
        .kc-display-card__image-overlay-btn:hover {
          background: #000000;
          transform: translateY(-2px);
        }
        .kc-display-card__content {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
        @media (min-width: 1024px) {
          .kc-display-card__content {
            padding: 60px;
          }
        }
        .kc-display-card__num {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--accent-brown);
          margin-bottom: 16px;
        }
        .kc-display-card__title {
          font-family: var(--font-serif);
          font-size: clamp(24px, 3.5vw, 42px);
          font-weight: 300;
          margin: 0 0 16px;
          line-height: 1.15;
        }
        .kc-display-card__desc {
          font-size: 16px;
          line-height: 1.7;
          color: var(--mid-gray);
          margin: 0 0 32px;
        }
        .kc-display-card__btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--charcoal);
          text-decoration: none;
          border-bottom: 2px solid var(--charcoal);
          padding-bottom: 4px;
          transition: color 0.25s, border-color 0.25s;
        }
        .kc-display-card__btn:hover {
          color: var(--accent-brown);
          border-color: var(--accent-brown);
        }

        /* Thumbnails Slider Track */
        .kc-track-wrapper {
          display: flex;
          align-items: center;
          gap: 16px;
          position: relative;
        }
        .kc-track-btn {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--charcoal);
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          transition: background 0.2s, color 0.2s;
        }
        .kc-track-btn:hover {
          background: var(--charcoal);
          color: #ffffff;
        }
        .kc-track {
          flex-grow: 1;
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none; /* Hide standard scrollbars */
          padding: 10px 0;
        }
        .kc-track::-webkit-scrollbar {
          display: none;
        }
        .kc-thumb-card {
          flex: 0 0 200px;
          scroll-snap-align: start;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 10px;
          opacity: 0.65;
          transition: opacity 0.3s;
        }
        .kc-thumb-card--active {
          opacity: 1;
        }
        .kc-thumb-card:hover {
          opacity: 1;
        }
        .kc-thumb-card__image-wrap {
          aspect-ratio: 16/10;
          border-radius: 4px;
          overflow: hidden;
          background: #eaeaea;
          border: 2px solid transparent;
          transition: border-color 0.3s;
        }
        .kc-thumb-card--active .kc-thumb-card__image-wrap {
          border-color: var(--charcoal);
        }
        .kc-thumb-card__image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .kc-thumb-card__name {
          font-size: 14px;
          font-weight: 600;
          color: var(--charcoal);
        }

        /* ── Split Section ── */
        .kc-split-section {
          padding: 100px 0;
          border-bottom: 1px solid var(--border-color);
        }
        .kc-split-grid {
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          gap: 60px;
        }
        @media (min-width: 860px) {
          .kc-split-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .kc-split-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .kc-split-title {
          font-family: var(--font-serif);
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 300;
          margin: 0 0 20px;
          line-height: 1.15;
        }
        .kc-split-body {
          font-size: 17px;
          line-height: 1.8;
          color: var(--mid-gray);
          margin: 0;
        }
        .kc-split-media {
          border-radius: 8px;
          overflow: hidden;
          background: #f7f7f7;
        }
        .kc-split-image {
          width: 100%;
          height: auto;
          display: block;
        }

        /* ── Brochure Section ── */
        .kc-brochure-section {
          background: var(--accent-brown);
          color: #ffffff;
          padding: 100px 0;
          text-align: center;
        }
        .kc-brochure-box {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .kc-brochure-title {
          font-family: var(--font-serif);
          font-size: clamp(28px, 4vw, 46px);
          font-weight: 300;
          margin: 0 0 20px;
          line-height: 1.15;
          color: #ffffff;
        }
        .kc-brochure-desc {
          font-size: 17px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 40px;
        }
        .kc-brochure-btn {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          background: #ffffff;
          color: var(--charcoal);
          padding: 16px 40px;
          border-radius: 3px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }
        .kc-brochure-btn:hover {
          background: var(--charcoal);
          color: #ffffff;
          transform: translateY(-2px);
        }
      `}</style>
    </motion.div>
  )
}
