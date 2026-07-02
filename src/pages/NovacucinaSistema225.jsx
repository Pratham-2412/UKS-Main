import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// ── Local assets ──────────────────────────────────────────────────────────────
import UKS_HERO_BG from '../assets/uks-novacucina-sistema-2-2-5/hero.jpg'
import UKS_PORTRAIT_1 from '../assets/uks-novacucina-sistema-2-2-5/portrait1.jpg'
import UKS_COL_LEFT_1 from '../assets/uks-novacucina-sistema-2-2-5/col-left-1.jpg'
import UKS_COL_RIGHT_1 from '../assets/uks-novacucina-sistema-2-2-5/col-right-1.jpg'
import UKS_WIDE from '../assets/uks-novacucina-sistema-2-2-5/wide.jpg'
import UKS_COL_LEFT_2 from '../assets/uks-novacucina-sistema-2-2-5/col-left-2.jpg'
import UKS_COL_RIGHT_2 from '../assets/uks-novacucina-sistema-2-2-5/col-right-2.jpg'
import UKS_RELATED_1 from '../assets/uks-novacucina-sistema-2-2-5/related-1.jpg'
import UKS_RELATED_2 from '../assets/uks-novacucina-sistema-2-2-5/related-2.jpg'
import UKS_RELATED_3 from '../assets/uks-novacucina-sistema-2-2-5/related-3.jpg'

const RELATED = [
  { title: 'Sistema 2.2_20', img: UKS_RELATED_1, href: '/kitchens/novacucina' },
  { title: 'Sistema 2.2 Line_19', img: UKS_RELATED_2, href: '/kitchens/novacucina' },
  { title: 'Sistema 2.2 Planet_18', img: UKS_RELATED_3, href: '/kitchens/novacucina' },
]

export default function NovacucinaSistema225() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="nc-5-page"
    >

      {/* ── HERO ── */}
      <section className="nc-5-hero">
        <div
          className="nc-5-hero__bg"
          style={{ backgroundImage: `url(${UKS_HERO_BG})` }}
          aria-hidden="true"
        />
        <div className="nc-5-hero__overlay" />
        <div className="nc-5-hero__content nc-5-container">
          {/* breadcrumbs */}
          <nav className="nc-5-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/kitchens">Kitchens</Link>
            <span aria-hidden="true">&nbsp;/&nbsp;</span>
            <Link to="/kitchens/novacucina">Novacucina</Link>
            <span aria-hidden="true">&nbsp;/&nbsp;</span>
            <span className="nc-5-breadcrumbs__current">Sistema 2.2_5</span>
          </nav>

          <p className="nc-5-hero__kicker">Kitchen collection</p>
          <h1 className="nc-5-hero__title">Sistema 2.2_5</h1>
        </div>
      </section>

      {/* ── SECTION 1 — Headline + tall portrait image ── */}
      <section className="nc-5-section nc-5-section--headline-portrait">
        <div className="nc-5-container nc-5-container--split-headline">
          {/* left: headline */}
          <div className="nc-5-headline-col">
            <motion.h2
              className="nc-5-headline"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
            >
              The charm of the past, designed for the present.
            </motion.h2>
          </div>
          {/* right: tall portrait */}
          <motion.div
            className="nc-5-portrait-col"
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <img
              src={UKS_PORTRAIT_1}
              alt="Sistema 2.2_5 kitchen interior"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2 — Two-column portrait images ── */}
      <section className="nc-5-section nc-5-section--two-col">
        <div className="nc-5-container nc-5-container--two-col">
          <motion.div
            className="nc-5-two-col__img"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img src={UKS_COL_LEFT_1} alt="Sistema 2.2_5 detail left" loading="lazy" />
          </motion.div>
          <motion.div
            className="nc-5-two-col__img"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <img src={UKS_COL_RIGHT_1} alt="Sistema 2.2_5 detail right" loading="lazy" />
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3 — Wide landscape image ── */}
      <section className="nc-5-section nc-5-section--wide">
        <motion.div
          className="nc-5-wide-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={UKS_WIDE} alt="Sistema 2.2_5 wide showcase" loading="lazy" />
        </motion.div>
      </section>

      {/* ── SECTION 4 — Second Two-column portrait images ── */}
      <section className="nc-5-section nc-5-section--two-col">
        <div className="nc-5-container nc-5-container--two-col">
          <motion.div
            className="nc-5-two-col__img"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img src={UKS_COL_LEFT_2} alt="Sistema 2.2_5 detail left 2" loading="lazy" />
          </motion.div>
          <motion.div
            className="nc-5-two-col__img"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <img src={UKS_COL_RIGHT_2} alt="Sistema 2.2_5 detail right 2" loading="lazy" />
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 5 — Related Compositions ── */}
      <section className="nc-5-section nc-5-section--related">
        <div className="nc-5-container">
          <h2 className="nc-5-related__title">Discover other Kitchen compositions</h2>
          <div className="nc-5-related__grid">
            {RELATED.map((item, idx) => (
              <motion.article
                key={idx}
                className="nc-5-related-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link to={item.href} className="nc-5-related-card__link">
                  <div className="nc-5-related-card__img-box">
                    <img src={item.img} alt={item.title} loading="lazy" />
                  </div>
                  <h3 className="nc-5-related-card__name">{item.title}</h3>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .nc-5-page {
          --cream:      #f5f2eb;
          --text-dark:  #2f2f2f;
          --text-light: #666;
          --gold:       #bfa380;
          --gold-hover: #a38764;
          --border:     rgba(0,0,0,0.08);
          --ff-serif:   'Libre Baskerville', Georgia, serif;
          --ff-sans:    'Plus Jakarta Sans', system-ui, sans-serif;

          background: var(--cream);
          color: var(--text-dark);
          font-family: var(--ff-sans);
        }

        .nc-5-container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 48px;
        }
        .nc-5-container--split-headline {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          align-items: stretch;
          min-height: 70vh;
        }
        .nc-5-container--two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        @media (max-width: 768px) {
          .nc-5-container { padding: 0 20px; }
          .nc-5-container--split-headline { grid-template-columns: 1fr; }
          .nc-5-container--two-col { grid-template-columns: 1fr; }
        }

        /* ── Sections ── */
        .nc-5-section {
          padding: 0;
        }
        .nc-5-section--headline-portrait {
          background: var(--cream);
          padding-top: 0;
          padding-bottom: 0;
        }
        .nc-5-section--two-col {
          background: var(--cream);
          padding: 12px 48px;
        }
        .nc-5-section--wide {
          background: var(--cream);
          padding: 12px 0 0;
        }
        .nc-5-section--related {
          background: var(--cream);
          padding: 72px 0 96px;
          border-top: 1px solid var(--border);
        }
        @media (max-width: 768px) {
          .nc-5-section--two-col { padding: 8px 20px; }
          .nc-5-section--related { padding: 48px 0 64px; }
        }

        /* ── Hero ── */
        .nc-5-hero {
          position: relative;
          width: 100%; height: 100vh; min-height: 500px;
          overflow: hidden;
          display: flex; align-items: flex-end;
        }
        .nc-5-hero__bg {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
          background-repeat: no-repeat;
          transform: scale(1.02);
        }
        .nc-5-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to top,
            rgba(10,8,6,0.65) 0%,
            rgba(10,8,6,0.15) 45%,
            transparent 100%
          );
        }
        .nc-5-hero__content {
          position: relative; z-index: 2;
          width: 100%; padding-bottom: 64px;
        }
        .nc-5-breadcrumbs {
          display: flex; align-items: center; flex-wrap: wrap; gap: 4px;
          font-family: var(--ff-sans);
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 24px;
        }
        .nc-5-breadcrumbs a {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          transition: color 0.2s;
        }
        .nc-5-breadcrumbs a:hover {
          color: #fff;
        }
        .nc-5-breadcrumbs__current {
          color: #fff;
        }
        .nc-5-hero__kicker {
          font-family: var(--ff-sans);
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--gold);
          margin: 0 0 12px;
        }
        .nc-5-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(38px, 6.5vw, 76px);
          font-weight: 400;
          color: #fff;
          margin: 0;
          line-height: 1.15;
          letter-spacing: -0.01em;
        }

        /* ── Headline Column & Tall Portrait ── */
        .nc-5-headline-col {
          display: flex;
          align-items: center;
          padding: 48px 48px 48px 0;
        }
        .nc-5-headline {
          font-family: var(--ff-serif);
          font-size: clamp(24px, 4vw, 44px);
          font-weight: 400;
          line-height: 1.35;
          color: var(--text-dark);
          margin: 0;
        }
        .nc-5-portrait-col {
          display: block;
          overflow: hidden;
          width: 100%;
        }
        .nc-5-portrait-col img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        @media (max-width: 768px) {
          .nc-5-headline-col { padding: 40px 0; }
        }

        /* ── Two-column image blocks ── */
        .nc-5-two-col__img {
          width: 100%;
          overflow: hidden;
        }
        .nc-5-two-col__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── Wide image block ── */
        .nc-5-wide-wrap {
          width: 100%;
          overflow: hidden;
        }
        .nc-5-wide-wrap img {
          width: 100%;
          height: auto;
          display: block;
        }

        /* ── Related Compositions ── */
        .nc-5-related__title {
          font-family: var(--ff-serif);
          font-size: 20px;
          font-weight: 400;
          letter-spacing: 0.05em;
          margin: 0 0 40px;
          text-align: center;
        }
        .nc-5-related__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 768px) {
          .nc-5-related__grid { grid-template-columns: 1fr; gap: 32px; }
        }
        .nc-5-related-card {
          width: 100%;
        }
        .nc-5-related-card__link {
          display: block;
          text-decoration: none;
          color: inherit;
        }
        .nc-5-related-card__img-box {
          aspect-ratio: 3/2;
          width: 100%;
          overflow: hidden;
          background: #eaeae6;
          margin-bottom: 16px;
        }
        .nc-5-related-card__img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nc-5-related-card:hover .nc-5-related-card__img-box img {
          transform: scale(1.04);
        }
        .nc-5-related-card__name {
          font-family: var(--ff-serif);
          font-size: 15px;
          font-weight: 400;
          margin: 0;
          letter-spacing: 0.05em;
        }
      `}</style>
    </motion.div>
  )
}
