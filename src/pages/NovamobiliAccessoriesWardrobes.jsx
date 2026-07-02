import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

// ── Clean Product Render images ──────────────────────────────────────────────
import UKS_ACC_CASSETTIERE from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-acc-cassettiere.jpg'
import UKS_ACC_LIGHTING from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-acc-lighting.jpg'
import UKS_ACC_RAILS from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-acc-rails.jpg'

// ── Ambient/Banner images (Revealed on Hover) ────────────────────────────────
import UKS_AMB_ACC_CASSETTIERE from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-acc-cassettiere.jpg'
import UKS_AMB_ACC_LIGHTING from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-acc-lighting.jpg'
import UKS_AMB_ACC_RAILS from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-acc-rails.jpg'

const MODELS = [
  {
    id: 'cassettiere',
    title: 'Internal drawer units',
    desc: 'Available in various finishes, sitting on a base unit or shelf, up to 5 drawers.',
    image: UKS_ACC_CASSETTIERE,
    hoverImage: UKS_AMB_ACC_CASSETTIERE
  },
  {
    id: 'lighting',
    title: 'Wardrobe lighting',
    desc: 'Various ON/OFF control, placement and size options.',
    image: UKS_ACC_LIGHTING,
    hoverImage: UKS_AMB_ACC_LIGHTING
  },
  {
    id: 'rails',
    title: 'Hanging rails',
    desc: 'Metal in bronze finish, also available in motorized clothes lift or exterior rack versions.',
    image: UKS_ACC_RAILS,
    hoverImage: UKS_AMB_ACC_RAILS
  }
]

export default function NovamobiliAccessoriesWardrobes() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="nma-page"
    >
      {/* ── BREADCRUMBS ── */}
      <div className="nma-breadcrumbs-bar">
        <div className="container">
          <nav className="nma-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/bedrooms">Bedrooms</Link>
            <span aria-hidden="true">&nbsp;/&nbsp;</span>
            <Link to="/bedrooms/wardrobes">Wardrobes</Link>
            <span aria-hidden="true">&nbsp;/&nbsp;</span>
            <span className="nma-breadcrumbs__current">Wardrobe accessories</span>
          </nav>
        </div>
      </div>

      {/* ── HEADER ── */}
      <header className="nma-header container">
        <h1 className="nma-header__title">WARDROBE ACCESSORIES</h1>
        
        <div className="nma-header__subtitle">
          {isExpanded ? (
            <p>
              Explore our vast selection of wardrobe accessories, designed to ensure your wardrobe is both functional and well organized. If you want to enhance and add the finishing touch to a Novamobili wardrobe or walk-in closet, this section features all the accessories you need to get your interiors shipshape. Our wardrobe accessories come in different categories and materials, meaning you can find the solution ideally suited to your organization needs. Whether you need shelves, sliding doors, or a spotlight to light your wardrobe, we have everything you require to help you create a functional, well laid out interior. The wardrobe accessories we offer are designed so you can arrange your clothing, footwear and accessories neatly, keeping everything within easy reach, optimizing spaces so that all your belongings are effortlessly organized. Our catalogue features a number of practical and functional solutions produced in different sizes and finishes catering to every requirement and blending stylishly with all Novamobili wardrobes.
            </p>
          ) : (
            <p>
              Explore our vast selection of wardrobe accessories, designed to ensure your wardrobe is both functional and well organized. If you want to enhance and add the finishing touch to a Novamobili wardrobe or walk-in closet, this section features all the accessories...
            </p>
          )}

          <div className="nma-header__toggle-wrap">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="nma-header__toggle-btn"
            >
              {isExpanded ? 'READ LESS' : 'READ MORE'}
            </button>
          </div>
        </div>
      </header>

      {/* ── GRID OF MODELS ── */}
      <section className="nma-grid container">
        {MODELS.map((model) => (
          <motion.article
            key={model.id}
            className="nma-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/contact" className="nma-card__link">
              <div className="nma-card__img-box">
                <img className="nma-card__base-img" src={model.image} alt={model.title} loading="lazy" />
                <img className="nma-card__hover-img" src={model.hoverImage} alt={`${model.title} ambient`} loading="lazy" />
              </div>
              <div className="nma-card__content">
                <h2 className="nma-card__title">{model.title.toUpperCase()}</h2>
                <p className="nma-card__desc">{model.desc}</p>
              </div>
            </Link>
          </motion.article>
        ))}
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .nma-page {
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
          padding-top: 130px; /* Offset for fixed header navbar */
          padding-bottom: 80px;
        }

        .nma-page .container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 48px;
        }
        @media (max-width: 768px) {
          .nma-page .container { padding: 0 20px; }
        }

        /* ── Breadcrumbs ── */
        .nma-breadcrumbs-bar {
          background: #ffffff;
          padding: 16px 0 8px;
        }
        .nma-breadcrumbs {
          display: flex;
          align-items: center;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0.05em;
          text-transform: capitalize;
          color: var(--text-muted);
        }
        .nma-breadcrumbs a {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.25s;
        }
        .nma-breadcrumbs a:hover {
          color: var(--text-dark);
        }
        .nma-breadcrumbs__current {
          color: var(--text-dark);
          opacity: 0.7;
        }

        /* ── Header ── */
        .nma-header {
          padding-top: 24px;
          padding-bottom: 48px;
        }
        .nma-header__title {
          font-family: var(--font-serif);
          font-size: clamp(38px, 6.5vw, 76px);
          font-weight: 300;
          line-height: 1.1;
          margin: 0 0 28px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .nma-header__subtitle {
          font-size: 16px;
          line-height: 1.75;
          color: var(--text-dark);
          max-width: 1100px;
          margin: 0;
          font-weight: 300;
        }
        .nma-header__subtitle strong {
          font-weight: 600;
        }
        .nma-header__toggle-wrap {
          display: flex;
          justify-content: flex-end;
          margin-top: 16px;
        }
        .nma-header__toggle-btn {
          background: transparent;
          border: 1px solid var(--text-dark);
          color: var(--text-dark);
          padding: 6px 16px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: background 0.3s, color 0.3s;
          outline: none;
        }
        .nma-header__toggle-btn:hover {
          background: var(--text-dark);
          color: var(--bg-white);
        }

        /* ── Model Grid ── */
        .nma-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 80px 0;
          border-top: 1px solid var(--border);
          padding-top: 56px;
        }
        @media (max-width: 992px) {
          .nma-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        .nma-card {
          width: 100%;
          border-bottom: 1px solid var(--border);
          padding-bottom: 40px;
          box-sizing: border-box;
        }
        @media (min-width: 993px) {
          .nma-card:nth-child(odd) {
            border-right: 1px solid var(--border);
            padding-right: 32px;
          }
          .nma-card:nth-child(even) {
            padding-left: 32px;
          }
        }
        .nma-card__link {
          display: block;
          text-decoration: none;
          color: inherit;
        }
        .nma-card__img-box {
          position: relative;
          width: 100%;
          aspect-ratio: 3/2;
          overflow: hidden;
          background: #ffffff;
        }
        
        .nma-card__base-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #ffffff;
          transition: opacity 0.5s ease-in-out;
          z-index: 1;
        }
        
        .nma-card__hover-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.5s ease-in-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 2;
        }

        .nma-card:hover .nma-card__hover-img {
          opacity: 1;
          transform: scale(1.03);
        }

        .nma-card__content {
          padding: 32px 16px 16px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .nma-card__title {
          font-family: var(--font-serif);
          font-size: clamp(22px, 3vw, 30px);
          font-weight: 400;
          margin: 0;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .nma-card__desc {
          font-size: 17px;
          line-height: 1.7;
          color: var(--text-muted);
          margin: 0;
          max-width: 520px;
        }
      `}</style>
    </motion.div>
  )
}
