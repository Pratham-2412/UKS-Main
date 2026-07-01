import UKS_KELLER_COUNTRY_KITCHENS_1920_X_1090_HERO_LANDELIJKEKEUKENS from '../assets/uks-keller-country-kitchens/uks-keller-country-kitchens-1920-x-1090-hero-landelijkekeukens.webp';
import UKS_KELLER_COUNTRY_KITCHENS_960_X_1024_LANDELIJK from '../assets/uks-keller-country-kitchens/uks-keller-country-kitchens-960-x-1024-landelijk.webp';
import UKS_KELLER_COUNTRY_KITCHENS_SILENT_RIVER_HERO from '../assets/uks-keller-country-kitchens/uks-keller-country-kitchens-silent-river-hero.webp';
import UKS_KELLER_COUNTRY_KITCHENS_KELLER_KEUKEN_2 from '../assets/uks-keller-country-kitchens/uks-keller-country-kitchens-keller-keuken-2.webp';
import UKS_KELLER_COUNTRY_KITCHENS_1920_X_1090_HERO_BLCKCOTTAGE from '../assets/uks-keller-country-kitchens/uks-keller-country-kitchens-1920-x-1090-hero-blckcottage.webp';
import UKS_KELLER_COUNTRY_KITCHENS_1920_X_1090_HERO_COTTAGELIFE from '../assets/uks-keller-country-kitchens/uks-keller-country-kitchens-1920-x-1090-hero-cottagelife.webp';
import UKS_KELLER_COUNTRY_KITCHENS_1920_X_1090_HERO_MISTYGREY from '../assets/uks-keller-country-kitchens/uks-keller-country-kitchens-1920-x-1090-hero-mistygrey.webp';
import UKS_KELLER_COUNTRY_KITCHENS_1920_X_1090_HERO_MODERNFARMHOUSE from '../assets/uks-keller-country-kitchens/uks-keller-country-kitchens-1920-x-1090-hero-modernfarmhouse.webp';
import UKS_KELLER_COUNTRY_KITCHENS_1920_X_1090_HERO_NATURAL_BASIC from '../assets/uks-keller-country-kitchens/uks-keller-country-kitchens-1920-x-1090-hero-natural-basic.webp';
import UKS_KELLER_COUNTRY_KITCHENS_1920_X_1090_HERO_NEW_COUNTRY from '../assets/uks-keller-country-kitchens/uks-keller-country-kitchens-1920-x-1090-hero-new-country.webp';
import UKS_KELLER_COUNTRY_KITCHENS_1920_X_1090_HERO_SMOKEYWOOD from '../assets/uks-keller-country-kitchens/uks-keller-country-kitchens-1920-x-1090-hero-smokeywood.webp';
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const COUNTRY_MODELS = [
  {
    name: 'Silent River',
    desc: 'Beautiful shaker-style cabinets finished in soft sage green with warm oak wood trims.',
    image: UKS_KELLER_COUNTRY_KITCHENS_SILENT_RIVER_HERO
  },
  {
    name: 'Zen Life',
    desc: 'Clean horizontal grains and light soft neutral colors creating a serene atmosphere.',
    image: UKS_KELLER_COUNTRY_KITCHENS_KELLER_KEUKEN_2
  },
  {
    name: 'Black Cottage',
    desc: 'Charcoal shaker panels with traditional black handles for a modern rustic look.',
    image: UKS_KELLER_COUNTRY_KITCHENS_1920_X_1090_HERO_BLCKCOTTAGE
  },
  {
    name: 'Cottage Life',
    desc: 'Traditional country styling with raised center door panels and brass accent handles.',
    image: UKS_KELLER_COUNTRY_KITCHENS_1920_X_1090_HERO_COTTAGELIFE
  },
  {
    name: 'Misty Grey',
    desc: 'Muted grey shaker doors combined with dark wooden open frame display cabinets.',
    image: UKS_KELLER_COUNTRY_KITCHENS_1920_X_1090_HERO_MISTYGREY
  },
  {
    name: 'Modern Farmhouse',
    desc: 'Bold farmhouse style with deep ceramic aproned sink and dark warm oak accents.',
    image: UKS_KELLER_COUNTRY_KITCHENS_1920_X_1090_HERO_MODERNFARMHOUSE
  },
  {
    name: 'Natural Basic',
    desc: 'Minimal country lines with sand beige panels and solid wood details.',
    image: UKS_KELLER_COUNTRY_KITCHENS_1920_X_1090_HERO_NATURAL_BASIC
  },
  {
    name: 'New Country',
    desc: 'Contemporary shaker fronts in matte ivory white for a fresh cottage feel.',
    image: UKS_KELLER_COUNTRY_KITCHENS_1920_X_1090_HERO_NEW_COUNTRY
  },
  {
    name: 'Smokey Wood',
    desc: 'Deep warm stained wooden cabinets matched with dark graphite grey details.',
    image: UKS_KELLER_COUNTRY_KITCHENS_1920_X_1090_HERO_SMOKEYWOOD
  }
]

export default function KellerCountryKitchens() {
  const [activeModel, setActiveModel] = useState(0)
  const trackRef = useRef(null)

  const handleNext = () => {
    setActiveModel((prev) => (prev + 1) % COUNTRY_MODELS.length)
    scrollActiveIntoView((activeModel + 1) % COUNTRY_MODELS.length)
  }

  const handlePrev = () => {
    setActiveModel((prev) => (prev - 1 + COUNTRY_MODELS.length) % COUNTRY_MODELS.length)
    scrollActiveIntoView((activeModel - 1 + COUNTRY_MODELS.length) % COUNTRY_MODELS.length)
  }

  const scrollActiveIntoView = (index) => {
    if (trackRef.current) {
      const items = trackRef.current.querySelectorAll('.kcy-thumb-card')
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
      className="kcy-page"
    >
      {/* ── HERO BANNER ── */}
      <section className="kcy-hero">
        <img
          src={UKS_KELLER_COUNTRY_KITCHENS_1920_X_1090_HERO_LANDELIJKEKEUKENS}
          alt="Keller Country Style Kitchens"
          className="kcy-hero__img"
        />
        <div className="kcy-hero__overlay">
          <div className="container">
            <nav className="kcy-breadcrumbs">
              <Link to="/kitchens">Kitchens</Link>
              <span>/</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span>/</span>
              <span className="current">Country Style Kitchens</span>
            </nav>
            <h1 className="kcy-hero__title">Country Style Kitchens</h1>
            <p className="kcy-hero__subtitle">Warm, cozy layouts that invite the outdoors in with robust natural materials.</p>
          </div>
        </div>
      </section>

      {/* ── INTRO DETAILS ── */}
      <section className="kcy-intro">
        <div className="container">
          <div className="kcy-intro__grid">
            <div className="kcy-intro__left">
              <span className="kcy-label">INTERIOR STYLES</span>
              <h2 className="kcy-intro__heading">Warmth, Tranquility & Cosiness</h2>
            </div>
            <div className="kcy-intro__right">
              <p className="kcy-intro__desc">
                A country style interior breaths the atmosphere of the outdoors and incorporates many natural materials and botanicals. Inspired by charming holiday homes and cottages, the country style offers warmth, tranquility and cosiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE CAROUSEL GRID ── */}
      <section className="kcy-carousel-sec">
        <div className="container">
          <div className="kcy-display-card">
            <div className="kcy-display-card__image-wrap">
              <img
                src={COUNTRY_MODELS[activeModel].image}
                alt={COUNTRY_MODELS[activeModel].name}
                className="kcy-display-card__img"
              />
            </div>
            <div className="kcy-display-card__content">
              <span className="kcy-display-card__num">
                {String(activeModel + 1).padStart(2, '0')} / {String(COUNTRY_MODELS.length).padStart(2, '0')}
              </span>
              <h3 className="kcy-display-card__title">{COUNTRY_MODELS[activeModel].name}</h3>
              <p className="kcy-display-card__desc">{COUNTRY_MODELS[activeModel].desc}</p>
              <Link to="/contact" className="kcy-display-card__btn">
                <span>Request details</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Thumbnail track wrapper */}
          <div className="kcy-track-wrapper">
            <button onClick={handlePrev} className="kcy-track-btn kcy-track-btn--prev" aria-label="Previous model">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div ref={trackRef} className="kcy-track">
              {COUNTRY_MODELS.map((model, idx) => (
                <div
                  key={model.name}
                  onClick={() => {
                    setActiveModel(idx)
                    scrollActiveIntoView(idx)
                  }}
                  className={`kcy-thumb-card ${idx === activeModel ? 'kcy-thumb-card--active' : ''}`}
                >
                  <div className="kcy-thumb-card__image-wrap">
                    <img src={model.image} alt={model.name} />
                  </div>
                  <span className="kcy-thumb-card__name">{model.name}</span>
                </div>
              ))}
            </div>

            <button onClick={handleNext} className="kcy-track-btn kcy-track-btn--next" aria-label="Next model">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── STYLE SPLIT INFO SECTION ── */}
      <section className="kcy-split-section">
        <div className="container">
          <div className="kcy-split-grid">
            <div className="kcy-split-content">
              <h2 className="kcy-split-title">Is country your style?</h2>
              <p className="kcy-split-body">
                The country style interior is becoming more and more modern, but will always have weathered objects with a soul and characteristic details. Furniture is robust, with (coarse) woods and materials like old beams and stone or wooden floors are popular.
              </p>
            </div>
            <div className="kcy-split-media">
              <img
                src={UKS_KELLER_COUNTRY_KITCHENS_960_X_1024_LANDELIJK}
                alt="Moodboard country style"
                className="kcy-split-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── BROCHURE CTA SECTION ── */}
      <section className="kcy-brochure-section">
        <div className="container">
          <div className="kcy-brochure-box">
            <h2 className="kcy-brochure-title">Want more inspiration?</h2>
            <p className="kcy-brochure-desc">
              Finding inspiration is an important step towards your personal kitchen, and perhaps the most fun! In our brochure we offer you kitchen inspiration in four interior styles, according to the latest trends. For each kitchen you will find the materials and colours used, and we show alternatives for a different taste or price tag.
            </p>
            <Link to="/contact" className="kcy-brochure-btn">
              Download our brochure
            </Link>
          </div>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .kcy-page {
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
        .kcy-hero {
          position: relative;
          height: 100vh;
          overflow: hidden;
          background: #111;
        }
        .kcy-hero__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0.8;
        }
        .kcy-hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%);
          display: flex;
          align-items: flex-end;
          padding-bottom: 60px;
        }
        .kcy-breadcrumbs {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 20px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .kcy-breadcrumbs a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .kcy-breadcrumbs a:hover {
          color: #ffffff;
        }
        .kcy-breadcrumbs .current {
          color: #ffffff;
          font-weight: 500;
        }
        .kcy-hero__title {
          font-family: var(--font-serif);
          font-size: clamp(36px, 5.5vw, 68px);
          font-weight: 300;
          color: #ffffff;
          margin: 0 0 10px;
          letter-spacing: -0.02em;
        }
        .kcy-hero__subtitle {
          font-family: var(--font-serif);
          font-size: clamp(16px, 2vw, 22px);
          font-style: italic;
          color: rgba(255, 255, 255, 0.85);
          margin: 0;
          max-width: 600px;
          line-height: 1.35;
        }

        /* ── Intro Section ── */
        .kcy-intro {
          padding: 80px 0;
          border-bottom: 1px solid var(--border-color);
        }
        .kcy-intro__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        @media (min-width: 768px) {
          .kcy-intro__grid {
            grid-template-columns: 4fr 8fr;
          }
        }
        .kcy-label {
          display: block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--accent-brown);
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .kcy-intro__heading {
          font-family: var(--font-serif);
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 300;
          line-height: 1.25;
          margin: 0;
        }
        .kcy-intro__desc {
          font-size: 18px;
          line-height: 1.75;
          color: var(--mid-gray);
          margin: 0;
        }

        /* ── Carousel Grid Section ── */
        .kcy-carousel-sec {
          padding: 80px 0;
          background: var(--light-bg);
        }

        /* Display Card */
        .kcy-display-card {
          display: grid;
          grid-template-columns: 1fr;
          background: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          margin-bottom: 40px;
        }
        @media (min-width: 860px) {
          .kcy-display-card {
            grid-template-columns: 7fr 5fr;
          }
        }
        .kcy-display-card__image-wrap {
          position: relative;
          aspect-ratio: 16/10;
          overflow: hidden;
          background: #000;
        }
        @media (min-width: 860px) {
          .kcy-display-card__image-wrap {
            aspect-ratio: auto;
            height: 520px;
          }
        }
        .kcy-display-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .kcy-display-card__content {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
        @media (min-width: 1024px) {
          .kcy-display-card__content {
            padding: 60px;
          }
        }
        .kcy-display-card__num {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--accent-brown);
          margin-bottom: 16px;
        }
        .kcy-display-card__title {
          font-family: var(--font-serif);
          font-size: clamp(24px, 3.5vw, 42px);
          font-weight: 300;
          margin: 0 0 16px;
          line-height: 1.15;
        }
        .kcy-display-card__desc {
          font-size: 16px;
          line-height: 1.7;
          color: var(--mid-gray);
          margin: 0 0 32px;
        }
        .kcy-display-card__btn {
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
        .kcy-display-card__btn:hover {
          color: var(--accent-brown);
          border-color: var(--accent-brown);
        }

        /* Thumbnails Slider Track */
        .kcy-track-wrapper {
          display: flex;
          align-items: center;
          gap: 16px;
          position: relative;
        }
        .kcy-track-btn {
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
        .kcy-track-btn:hover {
          background: var(--charcoal);
          color: #ffffff;
        }
        .kcy-track {
          flex-grow: 1;
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          padding: 10px 0;
        }
        .kcy-track::-webkit-scrollbar {
          display: none;
        }
        .kcy-thumb-card {
          flex: 0 0 200px;
          scroll-snap-align: start;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 10px;
          opacity: 0.65;
          transition: opacity 0.3s;
        }
        .kcy-thumb-card--active {
          opacity: 1;
        }
        .kcy-thumb-card:hover {
          opacity: 1;
        }
        .kcy-thumb-card__image-wrap {
          aspect-ratio: 16/10;
          border-radius: 4px;
          overflow: hidden;
          background: #eaeaea;
          border: 2px solid transparent;
          transition: border-color 0.3s;
        }
        .kcy-thumb-card--active .kcy-thumb-card__image-wrap {
          border-color: var(--charcoal);
        }
        .kcy-thumb-card__image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .kcy-thumb-card__name {
          font-size: 14px;
          font-weight: 600;
          color: var(--charcoal);
        }

        /* ── Split Section ── */
        .kcy-split-section {
          padding: 100px 0;
          border-bottom: 1px solid var(--border-color);
        }
        .kcy-split-grid {
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          gap: 60px;
        }
        @media (min-width: 860px) {
          .kcy-split-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .kcy-split-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .kcy-split-title {
          font-family: var(--font-serif);
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 300;
          margin: 0 0 20px;
          line-height: 1.15;
        }
        .kcy-split-body {
          font-size: 17px;
          line-height: 1.8;
          color: var(--mid-gray);
          margin: 0;
        }
        .kcy-split-media {
          border-radius: 8px;
          overflow: hidden;
          background: #f7f7f7;
        }
        .kcy-split-image {
          width: 100%;
          height: auto;
          display: block;
        }

        /* ── Brochure Section ── */
        .kcy-brochure-section {
          background: var(--accent-brown);
          color: #ffffff;
          padding: 100px 0;
          text-align: center;
        }
        .kcy-brochure-box {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .kcy-brochure-title {
          font-family: var(--font-serif);
          font-size: clamp(28px, 4vw, 46px);
          font-weight: 300;
          margin: 0 0 20px;
          line-height: 1.15;
          color: #ffffff;
        }
        .kcy-brochure-desc {
          font-size: 17px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 40px;
        }
        .kcy-brochure-btn {
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
        .kcy-brochure-btn:hover {
          background: var(--charcoal);
          color: #ffffff;
          transform: translateY(-2px);
        }
      `}</style>
    </motion.div>
  )
}
