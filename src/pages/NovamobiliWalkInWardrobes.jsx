import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

// ── Clean Product Render images ──────────────────────────────────────────────
import UKS_WALK_DEDALO_RENDER from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-walk-dedalo-render.jpg'
import UKS_WALK_BEN from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-walk-ben.jpg'
import UKS_WALK_BREAK from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-walk-break.jpg'
import UKS_WALK_ARISTOTELE from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-walk-aristotele.jpg'

// ── Ambient/Banner images (Revealed on Hover) ────────────────────────────────
import UKS_AMB_WALK_DEDALO from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-walk-dedalo.jpg'
import UKS_AMB_WALK_BEN from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-walk-ben.jpg'
import UKS_AMB_WALK_BREAK from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-walk-break.jpg'
import UKS_AMB_WALK_ARISTOTELE from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-walk-aristotele.jpg'

const MODELS = [
  {
    id: 'dedalo',
    title: 'Dedalo system',
    desc: 'Sophisticatedly designed versatile system for configuring walk-in wardrobes, wall systems, home office nooks and bookcases.',
    image: UKS_WALK_DEDALO_RENDER,
    hoverImage: UKS_AMB_WALK_DEDALO
  },
  {
    id: 'ben',
    title: 'Walk-in closet Ben',
    desc: 'Walk-in closet with side panels, can be fitted out to suit individual needs, including LED lighting option.',
    image: UKS_WALK_BEN,
    hoverImage: UKS_AMB_WALK_BEN
  },
  {
    id: 'break',
    title: 'Walk-in closet Break',
    desc: 'Slotted rail walk-in closet with no side panels, can be fitted out to suit individual needs, including LED lighting option, back panel also available in mirrored version.',
    image: UKS_WALK_BREAK,
    hoverImage: UKS_AMB_WALK_BREAK
  },
  {
    id: 'aristotele',
    title: 'Island Aristotele',
    desc: 'Freestanding item, designed to sit in the middle of a room and provide a handy place for hanging up clothing accessories.',
    image: UKS_WALK_ARISTOTELE,
    hoverImage: UKS_AMB_WALK_ARISTOTELE
  }
]

export default function NovamobiliWalkInWardrobes() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="nmw-walk-page"
    >
      {/* ── BREADCRUMBS ── */}
      <div className="nmw-walk-breadcrumbs-bar">
        <div className="container">
          <nav className="nmw-walk-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/bedrooms">Bedrooms</Link>
            <span aria-hidden="true">&nbsp;/&nbsp;</span>
            <Link to="/bedrooms/wardrobes">Wardrobes</Link>
            <span aria-hidden="true">&nbsp;/&nbsp;</span>
            <span className="nmw-walk-breadcrumbs__current">Walk-in closets</span>
          </nav>
        </div>
      </div>

      {/* ── HEADER ── */}
      <header className="nmw-walk-header container">
        <h1 className="nmw-walk-header__title">WALK-IN CLOSETS</h1>
        
        <div className="nmw-walk-header__subtitle">
          {isExpanded ? (
            <p>
              Choosing one of Novamobili's modern walk-in closets means enhancing your home spaces with premium furniture where raw materials and attention to detail make all the difference. Functionality and practicality are the cornerstones of every design that goes into production: suspended drawer units, drawers with organizers, shelves, walk-in units and pull-out trays are just some of the features you'll find in the Novamobili catalogue. A designer walk-in closet is ideal for reorganizing your spaces in a more rational way, using colours, lines and shapes to inject a more contemporary feel into your bedroom. Discover Novamobili's customizable solutions for your new modern walk-in wardrobe; download the online catalogue.
            </p>
          ) : (
            <p>
              Choosing one of Novamobili's modern walk-in closets means enhancing your home spaces with premium furniture where raw materials and attention to detail make all the difference. Functionality and practicality are the cornerstones of every design...
            </p>
          )}

          <div className="nmw-walk-header__toggle-wrap">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="nmw-walk-header__toggle-btn"
            >
              {isExpanded ? 'READ LESS' : 'READ MORE'}
            </button>
          </div>
        </div>
      </header>

      {/* ── GRID OF MODELS ── */}
      <section className="nmw-walk-grid container">
        {MODELS.map((model) => (
          <motion.article
            key={model.id}
            className="nmw-walk-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/contact" className="nmw-walk-card__link">
              <div className="nmw-walk-card__img-box">
                <img className="nmw-walk-card__base-img" src={model.image} alt={model.title} loading="lazy" />
                <img className="nmw-walk-card__hover-img" src={model.hoverImage} alt={`${model.title} ambient`} loading="lazy" />
              </div>
              <div className="nmw-walk-card__content">
                <h2 className="nmw-walk-card__title">{model.title.toUpperCase()}</h2>
                <p className="nmw-walk-card__desc">{model.desc}</p>
              </div>
            </Link>
          </motion.article>
        ))}
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .nmw-walk-page {
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

        .nmw-walk-page .container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 48px;
        }
        @media (max-width: 768px) {
          .nmw-walk-page .container { padding: 0 20px; }
        }

        /* ── Breadcrumbs ── */
        .nmw-walk-breadcrumbs-bar {
          background: #ffffff;
          padding: 16px 0 8px;
        }
        .nmw-walk-breadcrumbs {
          display: flex;
          align-items: center;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0.05em;
          text-transform: capitalize;
          color: var(--text-muted);
        }
        .nmw-walk-breadcrumbs a {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.25s;
        }
        .nmw-walk-breadcrumbs a:hover {
          color: var(--text-dark);
        }
        .nmw-walk-breadcrumbs__current {
          color: var(--text-dark);
          opacity: 0.7;
        }

        /* ── Header ── */
        .nmw-walk-header {
          padding-top: 24px;
          padding-bottom: 48px;
        }
        .nmw-walk-header__title {
          font-family: var(--font-serif);
          font-size: clamp(38px, 6.5vw, 76px);
          font-weight: 300;
          line-height: 1.1;
          margin: 0 0 28px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .nmw-walk-header__subtitle {
          font-size: 16px;
          line-height: 1.75;
          color: var(--text-dark);
          max-width: 1100px;
          margin: 0;
          font-weight: 300;
        }
        .nmw-walk-header__subtitle strong {
          font-weight: 600;
        }
        .nmw-walk-header__toggle-wrap {
          display: flex;
          justify-content: flex-end;
          margin-top: 16px;
        }
        .nmw-walk-header__toggle-btn {
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
        .nmw-walk-header__toggle-btn:hover {
          background: var(--text-dark);
          color: var(--bg-white);
        }

        /* ── Model Grid ── */
        .nmw-walk-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 80px 0;
          border-top: 1px solid var(--border);
          padding-top: 56px;
        }
        @media (max-width: 992px) {
          .nmw-walk-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        .nmw-walk-card {
          width: 100%;
          border-bottom: 1px solid var(--border);
          padding-bottom: 40px;
          box-sizing: border-box;
        }
        @media (min-width: 993px) {
          .nmw-walk-card:nth-child(odd) {
            border-right: 1px solid var(--border);
            padding-right: 32px;
          }
          .nmw-walk-card:nth-child(even) {
            padding-left: 32px;
          }
        }
        .nmw-walk-card__link {
          display: block;
          text-decoration: none;
          color: inherit;
        }
        .nmw-walk-card__img-box {
          position: relative;
          width: 100%;
          aspect-ratio: 3/2;
          overflow: hidden;
          background: #ffffff;
        }
        
        .nmw-walk-card__base-img {
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
        
        .nmw-walk-card__hover-img {
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

        .nmw-walk-card:hover .nmw-walk-card__hover-img {
          opacity: 1;
          transform: scale(1.03);
        }

        .nmw-walk-card__content {
          padding: 32px 16px 16px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .nmw-walk-card__title {
          font-family: var(--font-serif);
          font-size: clamp(22px, 3vw, 30px);
          font-weight: 400;
          margin: 0;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .nmw-walk-card__desc {
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
