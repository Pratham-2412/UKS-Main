import UKS_KELLER_INDUSTRIAL_KITCHENS_1920_X_1090_HERO_INDUSTRIELEKEUKENS from '../assets/uks-keller-industrial-kitchens/uks-keller-industrial-kitchens-1920-x-1090-hero-industrielekeukens.webp';
import UKS_KELLER_INDUSTRIAL_KITCHENS_960_X_1024_INDUSTRIEEL from '../assets/uks-keller-industrial-kitchens/uks-keller-industrial-kitchens-960-x-1024-industrieel.webp';
import UKS_KELLER_INDUSTRIAL_KITCHENS_BOLD_ELEGANCE_HERO from '../assets/uks-keller-industrial-kitchens/uks-keller-industrial-kitchens-bold-elegance-hero.webp';
import UKS_KELLER_INDUSTRIAL_KITCHENS_1920_X_1090_HERO_URBANNUDE from '../assets/uks-keller-industrial-kitchens/uks-keller-industrial-kitchens-1920-x-1090-hero-urbannude.webp';
import UKS_KELLER_INDUSTRIAL_KITCHENS_1920_X_1090_HERO_BLCKMETAL from '../assets/uks-keller-industrial-kitchens/uks-keller-industrial-kitchens-1920-x-1090-hero-blckmetal.webp';
import UKS_KELLER_INDUSTRIAL_KITCHENS_1920_X_1090_HERO_BROOKLYNBRICK from '../assets/uks-keller-industrial-kitchens/uks-keller-industrial-kitchens-1920-x-1090-hero-brooklynbrick.webp';
import UKS_KELLER_INDUSTRIAL_KITCHENS_1920_X_1090_HERO_CONCRETEJUNGLE from '../assets/uks-keller-industrial-kitchens/uks-keller-industrial-kitchens-1920-x-1090-hero-concretejungle.webp';
import UKS_KELLER_INDUSTRIAL_KITCHENS_1920_X_1090_HERO_DARKRITUALS from '../assets/uks-keller-industrial-kitchens/uks-keller-industrial-kitchens-1920-x-1090-hero-darkrituals.webp';
import UKS_KELLER_INDUSTRIAL_KITCHENS_1920_X_1090_HERO_NATURESCHOICE from '../assets/uks-keller-industrial-kitchens/uks-keller-industrial-kitchens-1920-x-1090-hero-natureschoice.webp';
import UKS_KELLER_INDUSTRIAL_KITCHENS_1920_X_1090_HERO_ROCKSOLID from '../assets/uks-keller-industrial-kitchens/uks-keller-industrial-kitchens-1920-x-1090-hero-rocksolid.webp';
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const INDUSTRIAL_MODELS = [
  {
    name: 'Bold Elegance',
    desc: 'Metallic textured black doors combined with brass frame open display storage.',
    image: UKS_KELLER_INDUSTRIAL_KITCHENS_BOLD_ELEGANCE_HERO
  },
  {
    name: 'Urban Nude',
    desc: 'Raw concrete block finishes mixed with delicate soft sand-colored laminate panels.',
    image: UKS_KELLER_INDUSTRIAL_KITCHENS_1920_X_1090_HERO_URBANNUDE
  },
  {
    name: 'Black Metal',
    desc: 'Deep graphite matte cabinets framed with steel support columns and dark wire mesh.',
    image: UKS_KELLER_INDUSTRIAL_KITCHENS_1920_X_1090_HERO_BLCKMETAL
  },
  {
    name: 'Brooklyn Brick',
    desc: 'Weathered brick wallpaper elements paired with dark warm wood panels and black rails.',
    image: UKS_KELLER_INDUSTRIAL_KITCHENS_1920_X_1090_HERO_BROOKLYNBRICK
  },
  {
    name: 'Concrete Jungle',
    desc: 'Bold slate concrete-look doors complete with industrial handles and open dark frames.',
    image: UKS_KELLER_INDUSTRIAL_KITCHENS_1920_X_1090_HERO_CONCRETEJUNGLE
  },
  {
    name: 'Dark Rituals',
    desc: 'Monochrome layout combining dark stained timber with textured black composite tops.',
    image: UKS_KELLER_INDUSTRIAL_KITCHENS_1920_X_1090_HERO_DARKRITUALS
  },
  {
    name: 'Nature\'s Choice',
    desc: 'Soften the raw elements with light vertical timber panels and greyed structured stone.',
    image: UKS_KELLER_INDUSTRIAL_KITCHENS_1920_X_1090_HERO_NATURESCHOICE
  },
  {
    name: 'Rock Solid',
    desc: 'Heavy textured stone doors matching the sturdy concrete details and raw steel hardware.',
    image: UKS_KELLER_INDUSTRIAL_KITCHENS_1920_X_1090_HERO_ROCKSOLID
  }
]

export default function KellerIndustrialKitchens() {
  const [activeModel, setActiveModel] = useState(0)
  const trackRef = useRef(null)

  const handleNext = () => {
    setActiveModel((prev) => (prev + 1) % INDUSTRIAL_MODELS.length)
    scrollActiveIntoView((activeModel + 1) % INDUSTRIAL_MODELS.length)
  }

  const handlePrev = () => {
    setActiveModel((prev) => (prev - 1 + INDUSTRIAL_MODELS.length) % INDUSTRIAL_MODELS.length)
    scrollActiveIntoView((activeModel - 1 + INDUSTRIAL_MODELS.length) % INDUSTRIAL_MODELS.length)
  }

  const scrollActiveIntoView = (index) => {
    if (trackRef.current) {
      const items = trackRef.current.querySelectorAll('.kic-thumb-card')
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
      className="kic-page"
    >
      {/* ── HERO BANNER ── */}
      <section className="kic-hero">
        <img
          src={UKS_KELLER_INDUSTRIAL_KITCHENS_1920_X_1090_HERO_INDUSTRIELEKEUKENS}
          alt="Keller Industrial Kitchens"
          className="kic-hero__img"
        />
        <div className="kic-hero__overlay">
          <div className="container">
            <nav className="kic-breadcrumbs">
              <Link to="/kitchens">Kitchens</Link>
              <span>/</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span>/</span>
              <span className="current">Industrial Kitchens</span>
            </nav>
            <h1 className="kic-hero__title">Industrial kitchens</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO DETAILS ── */}
      <section className="kic-intro">
        <div className="container">
          <div className="kic-intro__grid">
            <div className="kic-intro__left">
              <span className="kic-label">INTERIOR STYLES</span>
              <h2 className="kic-intro__heading">Industrial kitchens</h2>
            </div>
            <div className="kic-intro__right">
              <p className="kic-intro__desc">
                The industrial style of living is reminiscent of old (factory) buildings or lofts. Construction details such as steel beams, concrete or brick are characteristic details in these types of design schemes. Robust and aged materials give this interior a sturdy touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE CAROUSEL GRID ── */}
      <section className="kic-carousel-sec">
        <div className="container">
          <div className="kic-display-card">
            <div className="kic-display-card__image-wrap">
              <img
                src={INDUSTRIAL_MODELS[activeModel].image}
                alt={INDUSTRIAL_MODELS[activeModel].name}
                className="kic-display-card__img"
              />
            </div>
            <div className="kic-display-card__content">
              <span className="kic-display-card__num">
                {String(activeModel + 1).padStart(2, '0')} / {String(INDUSTRIAL_MODELS.length).padStart(2, '0')}
              </span>
              <h3 className="kic-display-card__title">{INDUSTRIAL_MODELS[activeModel].name}</h3>
              <p className="kic-display-card__desc">{INDUSTRIAL_MODELS[activeModel].desc}</p>
              <Link to="/contact" className="kic-display-card__btn">
                <span>Request details</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Thumbnail track wrapper */}
          <div className="kic-track-wrapper">
            <button onClick={handlePrev} className="kic-track-btn kic-track-btn--prev" aria-label="Previous model">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div ref={trackRef} className="kic-track">
              {INDUSTRIAL_MODELS.map((model, idx) => (
                <div
                  key={model.name}
                  onClick={() => {
                    setActiveModel(idx)
                    scrollActiveIntoView(idx)
                  }}
                  className={`kic-thumb-card ${idx === activeModel ? 'kic-thumb-card--active' : ''}`}
                >
                  <div className="kic-thumb-card__image-wrap">
                    <img src={model.image} alt={model.name} />
                  </div>
                  <span className="kic-thumb-card__name">{model.name}</span>
                </div>
              ))}
            </div>

            <button onClick={handleNext} className="kic-track-btn kic-track-btn--next" aria-label="Next model">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── STYLE SPLIT INFO SECTION ── */}
      <section className="kic-split-section">
        <div className="container">
          <div className="kic-split-grid">
            <div className="kic-split-content">
              <h2 className="kic-split-title">Is industrial your style?</h2>
              <div className="kic-split-body">
                <p>
                  Furniture is made of rough wood and leather, combined with greyed fabrics that provide softness. As accessories, (vintage) objects are often used that are not always functional. Think of large industrial or factory lamps.
                </p>
                <p style={{ marginTop: '20px' }}>
                  The floors are often sober and do not attract attention. In contemporary new-build homes, an industrial atmosphere is often created by floors and/or walls in a concrete look and photo wallpaper with a brick decor. The colours are sober. White, black and all shades of gray in between. As an accent color, a primary color such as yellow or red is often added.
                </p>
              </div>
            </div>
            <div className="kic-split-media">
              <img
                src={UKS_KELLER_INDUSTRIAL_KITCHENS_960_X_1024_INDUSTRIEEL}
                alt="Moodboard industrial style"
                className="kic-split-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── BROCHURE CTA SECTION ── */}
      <section className="kic-brochure-section">
        <div className="container">
          <div className="kic-brochure-box">
            <h2 className="kic-brochure-title">Read everything over carefully again?</h2>
            <p className="kic-brochure-desc">
              Inspiration is an important step towards your personal kitchen, and perhaps the most enjoyable one! In our brochure, we offer kitchen inspiration in four living styles, following the latest trends. With each kitchen, you will find the materials and colors used, and we also show alternatives for a different taste or budget.
            </p>
            <Link to="/contact" className="kic-brochure-btn">
              Request inspiration brochure
            </Link>
          </div>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .kic-page {
          --charcoal: #191919;
          --mid-gray: #4a4a4f;
          --light-bg: #f8f9fa;
          --border-color: #e2e2e7;
          --accent-brown: #9b9a9a;
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
        .kic-hero {
          position: relative;
          height: 100vh;
          overflow: hidden;
          background: #111;
        }
        .kic-hero__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0.85;
        }
        .kic-hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%);
          display: flex;
          align-items: flex-end;
          padding-bottom: 60px;
        }
        .kic-breadcrumbs {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 20px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .kic-breadcrumbs a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .kic-breadcrumbs a:hover {
          color: #ffffff;
        }
        .kic-breadcrumbs .current {
          color: #ffffff;
          font-weight: 500;
        }
        .kic-hero__title {
          font-family: var(--font-serif);
          font-size: clamp(36px, 5.5vw, 68px);
          font-weight: 300;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.02em;
        }

        /* ── Intro Section ── */
        .kic-intro {
          padding: 80px 0;
          border-bottom: 1px solid var(--border-color);
        }
        .kic-intro__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        @media (min-width: 768px) {
          .kic-intro__grid {
            grid-template-columns: 4fr 8fr;
          }
        }
        .kic-label {
          display: block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--accent-brown);
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .kic-intro__heading {
          font-family: var(--font-serif);
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 300;
          line-height: 1.25;
          margin: 0;
        }
        .kic-intro__desc {
          font-size: 18px;
          line-height: 1.75;
          color: var(--mid-gray);
          margin: 0;
        }

        /* ── Carousel Grid Section ── */
        .kic-carousel-sec {
          padding: 80px 0;
          background: var(--light-bg);
        }

        /* Display Card */
        .kic-display-card {
          display: grid;
          grid-template-columns: 1fr;
          background: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          margin-bottom: 40px;
        }
        @media (min-width: 860px) {
          .kic-display-card {
            grid-template-columns: 7fr 5fr;
          }
        }
        .kic-display-card__image-wrap {
          position: relative;
          aspect-ratio: 16/10;
          overflow: hidden;
          background: #000;
        }
        @media (min-width: 860px) {
          .kic-display-card__image-wrap {
            aspect-ratio: auto;
            height: 520px;
          }
        }
        .kic-display-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .kic-display-card__content {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
        @media (min-width: 1024px) {
          .kic-display-card__content {
            padding: 60px;
          }
        }
        .kic-display-card__num {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--accent-brown);
          margin-bottom: 16px;
        }
        .kic-display-card__title {
          font-family: var(--font-serif);
          font-size: clamp(24px, 3.5vw, 42px);
          font-weight: 300;
          margin: 0 0 16px;
          line-height: 1.15;
        }
        .kic-display-card__desc {
          font-size: 16px;
          line-height: 1.7;
          color: var(--mid-gray);
          margin: 0 0 32px;
        }
        .kic-display-card__btn {
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
        .kic-display-card__btn:hover {
          color: var(--accent-brown);
          border-color: var(--accent-brown);
        }

        /* Thumbnails Slider Track */
        .kic-track-wrapper {
          display: flex;
          align-items: center;
          gap: 16px;
          position: relative;
        }
        .kic-track-btn {
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
        .kic-track-btn:hover {
          background: var(--charcoal);
          color: #ffffff;
        }
        .kic-track {
          flex-grow: 1;
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          padding: 10px 0;
        }
        .kic-track::-webkit-scrollbar {
          display: none;
        }
        .kic-thumb-card {
          flex: 0 0 200px;
          scroll-snap-align: start;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 10px;
          opacity: 0.65;
          transition: opacity 0.3s;
        }
        .kic-thumb-card--active {
          opacity: 1;
        }
        .kic-thumb-card:hover {
          opacity: 1;
        }
        .kic-thumb-card__image-wrap {
          aspect-ratio: 16/10;
          border-radius: 4px;
          overflow: hidden;
          background: #eaeaea;
          border: 2px solid transparent;
          transition: border-color 0.3s;
        }
        .kic-thumb-card--active .kic-thumb-card__image-wrap {
          border-color: var(--charcoal);
        }
        .kic-thumb-card__image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .kic-thumb-card__name {
          font-size: 14px;
          font-weight: 600;
          color: var(--charcoal);
        }

        /* ── Split Section ── */
        .kic-split-section {
          padding: 100px 0;
          border-bottom: 1px solid var(--border-color);
        }
        .kic-split-grid {
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          gap: 60px;
        }
        @media (min-width: 860px) {
          .kic-split-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .kic-split-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .kic-split-title {
          font-family: var(--font-serif);
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 300;
          margin: 0 0 20px;
          line-height: 1.15;
        }
        .kic-split-body {
          font-size: 17px;
          line-height: 1.8;
          color: var(--mid-gray);
          margin: 0;
        }
        .kic-split-media {
          border-radius: 8px;
          overflow: hidden;
          background: #f7f7f7;
        }
        .kic-split-image {
          width: 100%;
          height: auto;
          display: block;
        }

        /* ── Brochure Section ── */
        .kic-brochure-section {
          background: var(--accent-brown);
          color: #ffffff;
          padding: 100px 0;
          text-align: center;
        }
        .kic-brochure-box {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .kic-brochure-title {
          font-family: var(--font-serif);
          font-size: clamp(28px, 4vw, 46px);
          font-weight: 300;
          margin: 0 0 20px;
          line-height: 1.15;
          color: #ffffff;
        }
        .kic-brochure-desc {
          font-size: 17px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 40px;
        }
        .kic-brochure-btn {
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
        .kic-brochure-btn:hover {
          background: var(--charcoal);
          color: #ffffff;
          transform: translateY(-2px);
        }
      `}</style>
    </motion.div>
  )
}
