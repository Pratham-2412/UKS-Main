import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

// ── Clean Product Render images ──────────────────────────────────────────────
import UKS_FLUSH_PICTURE from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-flush-picture.jpg'
import UKS_FLUSH_MIDDLE from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-flush-middle.jpg'
import UKS_FLUSH_CLASS from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-flush-class.jpg'

// ── Ambient/Banner images (Revealed on Hover) ────────────────────────────────
import UKS_AMB_FLUSH_PICTURE from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-flush-picture.jpg'
import UKS_AMB_FLUSH_MIDDLE from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-flush-middle.jpg'
import UKS_AMB_FLUSH_CLASS from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-flush-class.jpg'

const MODELS = [
  {
    id: 'picture',
    title: 'Flush-closing sliding door Picture',
    desc: 'Door featuring vertical profile handle, the two panels can have different finishes.',
    image: UKS_FLUSH_PICTURE,
    hoverImage: UKS_AMB_FLUSH_PICTURE
  },
  {
    id: 'middle',
    title: 'Flush-closing sliding door Middle',
    desc: 'The top and bottom panels and central strip making up the door can be in different finishes.',
    image: UKS_FLUSH_MIDDLE,
    hoverImage: UKS_AMB_FLUSH_MIDDLE
  },
  {
    id: 'class',
    title: 'Flush-closing sliding door Class',
    desc: 'The top and bottom panels and central strip making up the door can be in different finishes.',
    image: UKS_FLUSH_CLASS,
    hoverImage: UKS_AMB_FLUSH_CLASS
  }
]

export default function NovamobiliFlushWardrobes() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="nmf-page"
    >
      {/* ── BREADCRUMBS ── */}
      <div className="nmf-breadcrumbs-bar">
        <div className="container">
          <nav className="nmf-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/bedrooms">Bedrooms</Link>
            <span aria-hidden="true">&nbsp;/&nbsp;</span>
            <Link to="/bedrooms/wardrobes">Wardrobes</Link>
            <span aria-hidden="true">&nbsp;/&nbsp;</span>
            <span className="nmf-breadcrumbs__current">Flush-closing sliding door wardrobes</span>
          </nav>
        </div>
      </div>

      {/* ── HEADER ── */}
      <header className="nmf-header container">
        <h1 className="nmf-header__title">FLUSH-CLOSING SLIDING DOOR</h1>

        <div className="nmf-header__subtitle">
          {isExpanded ? (
            <p>
              Flush-closing sliding door wardrobes are the ideal choice for anyone seeking an extremely functional wardrobe that also makes a striking visual impact. They are designed to maintain order by corralling clothing and other objects, and making a sleek addition to the room. Compared to classic sliding door wardrobes, the flush-closing sliding system gives the furniture a minimal design and more compact look: the doors, once closed, are aligned flush rather that stacking on top of each other. With their intuitive, smooth, whisper-quiet sliding, flush-closing sliding door wardrobes are ideal for the bedroom. Discover the flush-closing sliding door wardrobes in the Novamobili catalogues and choose the model that suits your interior design needs.
            </p>
          ) : (
            <p>
              Flush-closing sliding door wardrobes are the ideal choice for anyone seeking an extremely functional wardrobe that also makes a striking visual impact. They are designed to maintain order by corralling clothing and other objects, and making a sleek addition to...
            </p>
          )}

          <div className="nmf-header__toggle-wrap">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="nmf-header__toggle-btn"
            >
              {isExpanded ? 'READ LESS' : 'READ MORE'}
            </button>
          </div>
        </div>
      </header>

      {/* ── GRID OF MODELS ── */}
      <section className="nmf-grid container">
        {MODELS.map((model) => (
          <motion.article
            key={model.id}
            className="nmf-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/contact" className="nmf-card__link">
              <div className="nmf-card__img-box">
                <img className="nmf-card__base-img" src={model.image} alt={model.title} loading="lazy" />
                <img className="nmf-card__hover-img" src={model.hoverImage} alt={`${model.title} ambient`} loading="lazy" />
              </div>
              <div className="nmf-card__content">
                <h2 className="nmf-card__title">{model.title.toUpperCase()}</h2>
                <p className="nmf-card__desc">{model.desc}</p>
              </div>
            </Link>
          </motion.article>
        ))}
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .nmf-page {
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

        .nmf-page .container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 48px;
        }
        @media (max-width: 768px) {
          .nmf-page .container { padding: 0 20px; }
        }

        /* ── Breadcrumbs ── */
        .nmf-breadcrumbs-bar {
          background: #ffffff;
          padding: 16px 0 8px;
        }
        .nmf-breadcrumbs {
          display: flex;
          align-items: center;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0.05em;
          text-transform: capitalize;
          color: var(--text-muted);
        }
        .nmf-breadcrumbs a {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.25s;
        }
        .nmf-breadcrumbs a:hover {
          color: var(--text-dark);
        }
        .nmf-breadcrumbs__current {
          color: var(--text-dark);
          opacity: 0.7;
        }

        /* ── Header ── */
        .nmf-header {
          padding-top: 24px;
          padding-bottom: 48px;
        }
        .nmf-header__title {
          font-family: var(--font-serif);
          font-size: clamp(38px, 6.5vw, 76px);
          font-weight: 300;
          line-height: 1.1;
          margin: 0 0 28px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .nmf-header__subtitle {
          font-size: 16px;
          line-height: 1.75;
          color: var(--text-dark);
          max-width: 1100px;
          margin: 0;
          font-weight: 300;
        }
        .nmf-header__subtitle strong {
          font-weight: 600;
        }
        .nmf-header__toggle-wrap {
          display: flex;
          justify-content: flex-end;
          margin-top: 16px;
        }
        .nmf-header__toggle-btn {
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
        .nmf-header__toggle-btn:hover {
          background: var(--text-dark);
          color: var(--bg-white);
        }

        /* ── Model Grid ── */
        .nmf-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 80px 0;
          border-top: 1px solid var(--border);
          padding-top: 56px;
        }
        @media (max-width: 992px) {
          .nmf-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        .nmf-card {
          width: 100%;
          border-bottom: 1px solid var(--border);
          padding-bottom: 40px;
          box-sizing: border-box;
        }
        @media (min-width: 993px) {
          .nmf-card:not(:last-child) {
            border-right: 1px solid var(--border);
            padding-right: 32px;
          }
          .nmf-card:not(:first-child) {
            padding-left: 32px;
          }
        }
        .nmf-card__link {
          display: block;
          text-decoration: none;
          color: inherit;
        }
        .nmf-card__img-box {
          position: relative;
          width: 100%;
          aspect-ratio: 3/2;
          overflow: hidden;
          background: #ffffff;
        }
        
        .nmf-card__base-img {
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
        
        .nmf-card__hover-img {
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

        .nmf-card:hover .nmf-card__hover-img {
          opacity: 1;
          transform: scale(1.03);
        }

        .nmf-card__content {
          padding: 32px 16px 16px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .nmf-card__title {
          font-family: var(--font-serif);
          font-size: clamp(22px, 3vw, 30px);
          font-weight: 400;
          margin: 0;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .nmf-card__desc {
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
