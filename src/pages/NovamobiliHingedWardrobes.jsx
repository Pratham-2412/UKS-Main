import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

// ── Clean Product Render images ──────────────────────────────────────────────
import UKS_HINGED_STAVE from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-hinged-stave.jpg'
import UKS_HINGED_PERRY from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-hinged-perry.jpg'
import UKS_HINGED_ALFA from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-hinged-alfa.jpg'
import UKS_HINGED_LIBERTY from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-hinged-liberty.jpg'
import UKS_HINGED_THICK from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-hinged-thick.jpg'
import UKS_HINGED_VICO from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-hinged-vico.jpg'
import UKS_HINGED_UNIKA from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-hinged-unika.jpg'
import UKS_HINGED_CRYSTAL from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-hinged-crystal.jpg'
import UKS_HINGED_PLISSE from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-hinged-plisse.jpg'
import UKS_HINGED_GOLA from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-hinged-gola.jpg'

// ── Ambient/Banner images (Revealed on Hover) ────────────────────────────────
import UKS_AMB_STAVE from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-stave.jpg'
import UKS_AMB_PERRY from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-perry.jpg'
import UKS_AMB_ALFA from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-alfa.jpg'
import UKS_AMB_LIBERTY from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-liberty.jpg'
import UKS_AMB_THICK from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-thick.jpg'
import UKS_AMB_VICO from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-vico.jpg'
import UKS_AMB_UNIKA from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-unika.jpg'
import UKS_AMB_CRYSTAL from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-crystal.jpg'
import UKS_AMB_PLISSE from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-plisse.jpg'
import UKS_AMB_GOLA from '../assets/uks-novamobili-wardrobes/uks-novamobili-wardrobes-amb-gola.jpg'

const MODELS = [
  {
    id: 'stave',
    title: 'Hinged door Stave',
    desc: 'Door with decorative battens, push-to-open mechanism, available with curved modules.',
    image: UKS_HINGED_STAVE,
    hoverImage: UKS_AMB_STAVE
  },
  {
    id: 'perry',
    title: 'Hinged door Perry',
    desc: 'Metal frame with glass door or panels in other materials, including leather, which can be mixed and matched. Available with Panorama opening system.',
    image: UKS_HINGED_PERRY,
    hoverImage: UKS_AMB_PERRY
  },
  {
    id: 'alfa',
    title: 'Hinged Door Alfa',
    desc: 'Available in various finishes, it goes with a number of different handle types, including push-to-open system. In the Intono version, it can be painted the same colour as the walls.',
    image: UKS_HINGED_ALFA,
    hoverImage: UKS_AMB_ALFA
  },
  {
    id: 'liberty',
    title: 'Hinged door Liberty',
    desc: 'Horizontal recessed handle.',
    image: UKS_HINGED_LIBERTY,
    hoverImage: UKS_AMB_LIBERTY
  },
  {
    id: 'thick',
    title: 'Hinged door Thick',
    desc: '3cm-thick door, goes with a number of different handle types.',
    image: UKS_HINGED_THICK,
    hoverImage: UKS_AMB_THICK
  },
  {
    id: 'vico',
    title: 'Hinged door Vico',
    desc: 'With recessed vertical handle, can be paired with other wardrobe models.',
    image: UKS_HINGED_VICO,
    hoverImage: UKS_AMB_VICO
  },
  {
    id: 'unika',
    title: 'Hinged door Unika',
    desc: 'Vertical recessed handle available in 2 heights, available in various finishes.',
    image: UKS_HINGED_UNIKA,
    hoverImage: UKS_AMB_UNIKA
  },
  {
    id: 'crystal',
    title: 'Hinged door Crystal',
    desc: 'Glass door, handle built into frame, can be paired with other wardrobe models, available in folding door version.',
    image: UKS_HINGED_CRYSTAL,
    hoverImage: UKS_AMB_CRYSTAL
  },
  {
    id: 'plisse',
    title: 'Hinged door Plissé',
    desc: "The handle is a full-height vertical profile. The door's strips can be in different finishes, available in folding door version.",
    image: UKS_HINGED_PLISSE,
    hoverImage: UKS_AMB_PLISSE
  },
  {
    id: 'gola',
    title: 'Hinged door Gola',
    desc: 'Profile handle recessed into the door, additional option of modules with oversized drawers.',
    image: UKS_HINGED_GOLA,
    hoverImage: UKS_AMB_GOLA
  }
]

export default function NovamobiliHingedWardrobes() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="nmh-page"
    >
      {/* ── BREADCRUMBS ── */}
      <div className="nmh-breadcrumbs-bar">
        <div className="container">
          <nav className="nmh-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/bedrooms">Bedrooms</Link>
            <span aria-hidden="true">&nbsp;/&nbsp;</span>
            <Link to="/bedrooms/wardrobes">Wardrobes</Link>
            <span aria-hidden="true">&nbsp;/&nbsp;</span>
            <span className="nmh-breadcrumbs__current">Hinged door Wardrobes</span>
          </nav>
        </div>
      </div>

      {/* ── HEADER ── */}
      <header className="nmh-header container">
        <h1 className="nmh-header__title">HINGED DOOR WARDROBES</h1>
        
        <div className="nmh-header__subtitle">
          {isExpanded ? (
            <p>
              If you are keen to get your spaces organized, but still want them to look good, then <strong>hinged door</strong> wardrobes are your new best friend. Recessed, set against a wall, or in a corner configuration, their main feature is their modular design. They allow you to exploit the wardrobes' full depth while making the job of tidying their contents a breeze. Providing a home for clothing, accessories and other precious items, wardrobes are the heroes of any bedroom design scheme. The extensive choice of finishes and interior fitouts provides plenty of options for building <strong>custom solutions</strong> that can cater to any individual and space requirements. Ranging from clean-lined classic wardrobe models to more contemporary styles, there is a perfect fit for every interior. Discover Novamobili's full range of <strong>hinged door wardrobe</strong> solutions and choose the perfect model for you.
            </p>
          ) : (
            <p>
              If you are keen to get your spaces organized, but still want them to look good, then <strong>hinged door</strong> wardrobes are your new best friend. Recessed, set against a wall, or in a corner configuration, their main feature is their modular design. They allow you to exploit the wardrobes' full depth while making the job of tidying...
            </p>
          )}

          <div className="nmh-header__toggle-wrap">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="nmh-header__toggle-btn"
            >
              {isExpanded ? 'READ LESS' : 'READ MORE'}
            </button>
          </div>
        </div>
      </header>

      {/* ── GRID OF MODELS ── */}
      <section className="nmh-grid container">
        {MODELS.map((model) => (
          <motion.article
            key={model.id}
            className="nmh-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/contact" className="nmh-card__link">
              <div className="nmh-card__img-box">
                <img className="nmh-card__base-img" src={model.image} alt={model.title} loading="lazy" />
                <img className="nmh-card__hover-img" src={model.hoverImage} alt={`${model.title} ambient`} loading="lazy" />
              </div>
              <div className="nmh-card__content">
                <h2 className="nmh-card__title">{model.title.toUpperCase()}</h2>
                <p className="nmh-card__desc">{model.desc}</p>
              </div>
            </Link>
          </motion.article>
        ))}
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .nmh-page {
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

        .nmh-page .container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 48px;
        }
        @media (max-width: 768px) {
          .nmh-page .container { padding: 0 20px; }
        }

        /* ── Breadcrumbs ── */
        .nmh-breadcrumbs-bar {
          background: #ffffff;
          padding: 16px 0 8px;
        }
        .nmh-breadcrumbs {
          display: flex;
          align-items: center;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0.05em;
          text-transform: capitalize;
          color: var(--text-muted);
        }
        .nmh-breadcrumbs a {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.25s;
        }
        .nmh-breadcrumbs a:hover {
          color: var(--text-dark);
        }
        .nmh-breadcrumbs__current {
          color: var(--text-dark);
          opacity: 0.7;
        }

        /* ── Header ── */
        .nmh-header {
          padding-top: 24px;
          padding-bottom: 48px;
        }
        .nmh-header__title {
          font-family: var(--font-serif);
          font-size: clamp(38px, 6.5vw, 76px);
          font-weight: 300;
          line-height: 1.1;
          margin: 0 0 28px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .nmh-header__subtitle {
          font-size: 16px;
          line-height: 1.75;
          color: var(--text-dark);
          max-width: 1100px;
          margin: 0;
          font-weight: 300;
        }
        .nmh-header__subtitle strong {
          font-weight: 600;
        }
        .nmh-header__toggle-wrap {
          display: flex;
          justify-content: flex-end;
          margin-top: 16px;
        }
        .nmh-header__toggle-btn {
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
        .nmh-header__toggle-btn:hover {
          background: var(--text-dark);
          color: var(--bg-white);
        }

        /* ── Model Grid ── */
        .nmh-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 80px 0;
          border-top: 1px solid var(--border);
          padding-top: 56px;
        }
        @media (max-width: 992px) {
          .nmh-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        .nmh-card {
          width: 100%;
          border-bottom: 1px solid var(--border);
          padding-bottom: 40px;
          box-sizing: border-box;
        }
        @media (min-width: 993px) {
          .nmh-card:nth-child(odd) {
            border-right: 1px solid var(--border);
            padding-right: 32px;
          }
          .nmh-card:nth-child(even) {
            padding-left: 32px;
          }
        }
        .nmh-card__link {
          display: block;
          text-decoration: none;
          color: inherit;
        }
        .nmh-card__img-box {
          position: relative;
          width: 100%;
          aspect-ratio: 3/2;
          overflow: hidden;
          background: #ffffff;
        }
        
        .nmh-card__base-img {
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
        
        .nmh-card__hover-img {
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

        .nmh-card:hover .nmh-card__hover-img {
          opacity: 1;
          transform: scale(1.03);
        }

        .nmh-card__content {
          padding: 32px 16px 16px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .nmh-card__title {
          font-family: var(--font-serif);
          font-size: clamp(22px, 3vw, 30px);
          font-weight: 400;
          margin: 0;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .nmh-card__desc {
          font-size: 17px;
          line-height: 1.7;
          color: var(--text-muted);
          margin: 0;
          max-width: 520px;
        }

        /* ── Download ── */
        .nmh-download {
          background: #f6f6f3;
          padding: 64px 0;
          text-align: center;
          margin-top: 80px;
          border-top: 1px solid var(--border);
        }
        .nmh-download__inner {
          max-width: 700px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .nmh-download__heading {
          font-family: var(--font-serif);
          font-size: clamp(24px, 3.5vw, 36px);
          font-weight: 400;
          margin: 0;
        }
        .nmh-download__text {
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-muted);
          margin: 0 0 10px;
        }
        .nmh-download__btn {
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
        .nmh-download__btn:hover {
          background: var(--gold);
        }
      `}</style>
    </motion.div>
  )
}
