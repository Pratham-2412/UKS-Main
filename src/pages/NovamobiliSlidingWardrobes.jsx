import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

// ── Clean Product Render images ──────────────────────────────────────────────
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

// ── Ambient/Banner images (Revealed on Hover) ────────────────────────────────
import UKS_AMB_SLIDING_LAYER from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-sliding-layer.jpg'
import UKS_AMB_SLIDING_ALFA from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-sliding-alfa.jpg'
import UKS_AMB_SLIDING_GOLA from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-sliding-gola.jpg'
import UKS_AMB_SLIDING_CRYSTAL from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-sliding-crystal.jpg'
import UKS_AMB_SLIDING_PLISSE from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-sliding-plisse.jpg'
import UKS_AMB_SLIDING_PICTURE from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-sliding-picture.jpg'
import UKS_AMB_SLIDING_CLASS from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-sliding-class.jpg'
import UKS_AMB_SLIDING_OFFSET from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-sliding-offset.jpg'
import UKS_AMB_SLIDING_MIDDLE from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-sliding-middle.jpg'
import UKS_AMB_SLIDING_DOVER from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-sliding-dover.jpg'
import UKS_AMB_SLIDING_ALLISON from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-sliding-allison.jpg'
import UKS_AMB_SLIDING_THICK from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-sliding-thick.jpg'

const MODELS = [
  {
    id: 'layer',
    title: 'Sliding door Layer',
    desc: 'Metal frame with glass door or with panels in other materials, including leather, which can be mixed and matched.',
    image: UKS_SLIDING_LAYER,
    hoverImage: UKS_AMB_SLIDING_LAYER
  },
  {
    id: 'alfa',
    title: 'Sliding door Alfa',
    desc: 'Available in various finishes, it goes with a number of different handle types.',
    image: UKS_SLIDING_ALFA,
    hoverImage: UKS_AMB_SLIDING_ALFA
  },
  {
    id: 'gola',
    title: 'Sliding door Gola',
    desc: 'Profile handle recessed into the door.',
    image: UKS_SLIDING_GOLA,
    hoverImage: UKS_AMB_SLIDING_GOLA
  },
  {
    id: 'crystal',
    title: 'Sliding door Crystal',
    desc: 'Mirrored door, also available with one or two horizontal profiles.',
    image: UKS_SLIDING_CRYSTAL,
    hoverImage: UKS_AMB_SLIDING_CRYSTAL
  },
  {
    id: 'plisse',
    title: 'Sliding door Plissé',
    desc: "The door's strips can be in different finishes.",
    image: UKS_SLIDING_PLISSE,
    hoverImage: UKS_AMB_SLIDING_PLISSE
  },
  {
    id: 'picture',
    title: 'Sliding door Picture',
    desc: 'Door featuring vertical profile handle, the two panels can have different finishes.',
    image: UKS_SLIDING_PICTURE,
    hoverImage: UKS_AMB_SLIDING_PICTURE
  },
  {
    id: 'class',
    title: 'Sliding door Class',
    desc: 'The top and bottom panels and central strip making up the door can be in different finishes.',
    image: UKS_SLIDING_CLASS,
    hoverImage: UKS_AMB_SLIDING_CLASS
  },
  {
    id: 'offset',
    title: 'Sliding door Offset',
    desc: 'The panels can be in different finishes, and there is also a mirrored option for the insert.',
    image: UKS_SLIDING_OFFSET,
    hoverImage: UKS_AMB_SLIDING_OFFSET
  },
  {
    id: 'middle',
    title: 'Sliding door Middle',
    desc: 'The top and bottom panels and central strip making up the door can be in different finishes.',
    image: UKS_SLIDING_MIDDLE,
    hoverImage: UKS_AMB_SLIDING_MIDDLE
  },
  {
    id: 'dover',
    title: 'Sliding door Dover',
    desc: 'Available in various finishes, with one or two horizontal profiles.',
    image: UKS_SLIDING_DOVER,
    hoverImage: UKS_AMB_SLIDING_DOVER
  },
  {
    id: 'allison',
    title: 'Sliding door Allison',
    desc: 'Door comes in plain or with metal horizontal profile matching the panel.',
    image: UKS_SLIDING_ALLISON,
    hoverImage: UKS_AMB_SLIDING_ALLISON
  },
  {
    id: 'thick',
    title: 'Thick Sliding Doors',
    desc: '3cm-thick door, goes with a number of different handle types.',
    image: UKS_SLIDING_THICK,
    hoverImage: UKS_AMB_SLIDING_THICK
  }
]

export default function NovamobiliSlidingWardrobes() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="nms-page"
    >
      {/* ── BREADCRUMBS ── */}
      <div className="nms-breadcrumbs-bar">
        <div className="container">
          <nav className="nms-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/bedrooms">Bedrooms</Link>
            <span aria-hidden="true">&nbsp;/&nbsp;</span>
            <Link to="/bedrooms/wardrobes">Wardrobes</Link>
            <span aria-hidden="true">&nbsp;/&nbsp;</span>
            <span className="nms-breadcrumbs__current">Sliding door wardrobes</span>
          </nav>
        </div>
      </div>

      {/* ── HEADER ── */}
      <header className="nms-header container">
        <h1 className="nms-header__title">SLIDING DOOR WARDROBES</h1>
        
        <div className="nms-header__subtitle">
          {isExpanded ? (
            <p>
              <strong>Sliding door wardrobes</strong> are an at once modern and functional complement to an interior scheme, and an increasingly important tool for optimizing the available space. The practical <strong>sliding door</strong> closing system doesn't encroach on the space, meaning it is also a great option for smaller bedrooms. Muted, modern colours teamed with pared-back forms with striking design features make a perfect solution if you prefer a contemporary, minimal design, but still with a focus on the quality of materials. Furnishing your bedroom with a designer sliding door wardrobe means choosing a high-quality product that is both versatile and modern. It's <strong>much more than just a wardrobe</strong>, providing a more rational and functional solution for organizing clothing and bed linen. Discover sliding door wardrobes in Novamobili's bedroom furniture catalogues and choose the model that best suits your furniture and design requirements.
            </p>
          ) : (
            <p>
              <strong>Sliding door wardrobes</strong> are an at once modern and functional complement to an interior scheme, and an increasingly important tool for optimizing the available space. The practical <strong>sliding door</strong> closing system doesn't encroach on the space, meaning it is also a great option...
            </p>
          )}

          <div className="nms-header__toggle-wrap">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="nms-header__toggle-btn"
            >
              {isExpanded ? 'READ LESS' : 'READ MORE'}
            </button>
          </div>
        </div>
      </header>

      {/* ── GRID OF MODELS ── */}
      <section className="nms-grid container">
        {MODELS.map((model) => (
          <motion.article
            key={model.id}
            className="nms-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/contact" className="nms-card__link">
              <div className="nms-card__img-box">
                <img className="nms-card__base-img" src={model.image} alt={model.title} loading="lazy" />
                <img className="nms-card__hover-img" src={model.hoverImage} alt={`${model.title} ambient`} loading="lazy" />
              </div>
              <div className="nms-card__content">
                <h2 className="nms-card__title">{model.title.toUpperCase()}</h2>
                <p className="nms-card__desc">{model.desc}</p>
              </div>
            </Link>
          </motion.article>
        ))}
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .nms-page {
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

        .nms-page .container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 48px;
        }
        @media (max-width: 768px) {
          .nms-page .container { padding: 0 20px; }
        }

        /* ── Breadcrumbs ── */
        .nms-breadcrumbs-bar {
          background: #ffffff;
          padding: 16px 0 8px;
        }
        .nms-breadcrumbs {
          display: flex;
          align-items: center;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0.05em;
          text-transform: capitalize;
          color: var(--text-muted);
        }
        .nms-breadcrumbs a {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.25s;
        }
        .nms-breadcrumbs a:hover {
          color: var(--text-dark);
        }
        .nms-breadcrumbs__current {
          color: var(--text-dark);
          opacity: 0.7;
        }

        /* ── Header ── */
        .nms-header {
          padding-top: 24px;
          padding-bottom: 48px;
        }
        .nms-header__title {
          font-family: var(--font-serif);
          font-size: clamp(38px, 6.5vw, 76px);
          font-weight: 300;
          line-height: 1.1;
          margin: 0 0 28px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .nms-header__subtitle {
          font-size: 16px;
          line-height: 1.75;
          color: var(--text-dark);
          max-width: 1100px;
          margin: 0;
          font-weight: 300;
        }
        .nms-header__subtitle strong {
          font-weight: 600;
        }
        .nms-header__toggle-wrap {
          display: flex;
          justify-content: flex-end;
          margin-top: 16px;
        }
        .nms-header__toggle-btn {
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
        .nms-header__toggle-btn:hover {
          background: var(--text-dark);
          color: var(--bg-white);
        }

        /* ── Model Grid ── */
        .nms-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 80px 0;
          border-top: 1px solid var(--border);
          padding-top: 56px;
        }
        @media (max-width: 992px) {
          .nms-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        .nms-card {
          width: 100%;
          border-bottom: 1px solid var(--border);
          padding-bottom: 40px;
          box-sizing: border-box;
        }
        @media (min-width: 993px) {
          .nms-card:nth-child(odd) {
            border-right: 1px solid var(--border);
            padding-right: 32px;
          }
          .nms-card:nth-child(even) {
            padding-left: 32px;
          }
        }
        .nms-card__link {
          display: block;
          text-decoration: none;
          color: inherit;
        }
        .nms-card__img-box {
          position: relative;
          width: 100%;
          aspect-ratio: 3/2;
          overflow: hidden;
          background: #ffffff;
        }
        
        .nms-card__base-img {
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
        
        .nms-card__hover-img {
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

        .nms-card:hover .nms-card__hover-img {
          opacity: 1;
          transform: scale(1.03);
        }

        .nms-card__content {
          padding: 32px 16px 16px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .nms-card__title {
          font-family: var(--font-serif);
          font-size: clamp(22px, 3vw, 30px);
          font-weight: 400;
          margin: 0;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .nms-card__desc {
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
