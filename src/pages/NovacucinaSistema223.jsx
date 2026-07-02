import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// ── Local assets ──────────────────────────────────────────────────────────────
import UKS_HERO_BG from '../assets/uks-novacucina-sistema-2-2-3/uks-sistema-2-2-3-hero-bg.jpg'
import UKS_PORTRAIT_1 from '../assets/uks-novacucina-sistema-2-2-3/uks-sistema-2-2-3-portrait-1.jpg'
import UKS_COL_LEFT_1 from '../assets/uks-novacucina-sistema-2-2-3/uks-sistema-2-2-3-col-left-1.jpg'
import UKS_COL_RIGHT_1 from '../assets/uks-novacucina-sistema-2-2-3/uks-sistema-2-2-3-col-right-1.jpg'
import UKS_WIDE from '../assets/uks-novacucina-sistema-2-2-3/uks-sistema-2-2-3-wide.jpg'
import UKS_SINGLE_BOTTOM from '../assets/uks-novacucina-sistema-2-2-3/uks-sistema-2-2-3-single-bottom.jpg'

// Import related assets from the sister folder uks-novacucina-sistema-2-2-1
import UKS_RELATED_1 from '../assets/uks-novacucina-sistema-2-2-1/uks-sistema-2-2-1-related-1.jpg'
import UKS_RELATED_2 from '../assets/uks-novacucina-sistema-2-2-1/uks-sistema-2-2-1-related-2.jpg'
import UKS_RELATED_3 from '../assets/uks-novacucina-sistema-2-2-1/uks-sistema-2-2-1-related-3.jpg'

const RELATED = [
  { title: 'Sistema 2.2_20', img: UKS_RELATED_1, href: '/kitchens/novacucina' },
  { title: 'Sistema 2.2 Line_19', img: UKS_RELATED_2, href: '/kitchens/novacucina' },
  { title: 'Sistema 2.2 Planet_18', img: UKS_RELATED_3, href: '/kitchens/novacucina' },
]

export default function NovacucinaSistema223() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="nc223-page"
    >

      {/* ── HERO ── */}
      <section className="nc223-hero">
        <div
          className="nc223-hero__bg"
          style={{ backgroundImage: `url(${UKS_HERO_BG})` }}
          aria-hidden="true"
        />
        <div className="nc223-hero__overlay" />
        <div className="nc223-hero__content nc223-container">
          {/* breadcrumbs */}
          <nav className="nc223-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/kitchens">Kitchens</Link>
            <span aria-hidden="true">&nbsp;/&nbsp;</span>
            <Link to="/kitchens/novacucina">Novacucina</Link>
            <span aria-hidden="true">&nbsp;/&nbsp;</span>
            <span className="nc223-breadcrumbs__current">Sistema 2.2_3</span>
          </nav>

          <p className="nc223-hero__kicker">Kitchen collection</p>
          <h1 className="nc223-hero__title">Sistema 2.2_3</h1>
        </div>
      </section>

      {/* ── SECTION 1 — Headline + portrait ── */}
      <section className="nc223-section nc223-section--headline-portrait">
        <div className="nc223-container nc223-container--split-headline">
          {/* left: headline */}
          <div className="nc223-headline-col">
            <motion.h2
              className="nc223-headline"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
            >
              A refined balance<br />between functionality<br />and scenography.
            </motion.h2>
          </div>
          {/* right: tall portrait 1 */}
          <motion.div
            className="nc223-portrait-col"
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <img
              src={UKS_PORTRAIT_1}
              alt="Sistema 2.2_3 kitchen layout"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2 — Two-column portrait images ── */}
      <section className="nc223-section nc223-section--two-col">
        <div className="nc223-container nc223-container--two-col">
          <motion.div
            className="nc223-two-col__img"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img src={UKS_COL_LEFT_1} alt="Sistema 2.2_3 cabinets detail" loading="lazy" />
          </motion.div>
          <motion.div
            className="nc223-two-col__img"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.7 }}
          >
            <img src={UKS_COL_RIGHT_1} alt="Sistema 2.2_3 storage organizer" loading="lazy" />
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3 — Full-width landscape image ── */}
      <section className="nc223-section nc223-section--wide">
        <motion.div
          className="nc223-wide-img"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={UKS_WIDE} alt="Sistema 2.2_3 kitchen layout wide view" loading="lazy" />
        </motion.div>
      </section>

      {/* ── SECTION 4 — Centered single portrait image ── */}
      <section className="nc223-section nc223-section--single-bottom">
        <div className="nc223-container nc223-container--single-bottom">
          <motion.div
            className="nc223-single-bottom__img"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img src={UKS_SINGLE_BOTTOM} alt="Sistema 2.2_3 cabinet design detail" loading="lazy" />
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 5 — "Enquire" CTA ── */}
      <section className="nc223-section nc223-section--enquire">
        <div className="nc223-container nc223-container--centered">
          <Link to="/contact" className="nc223-enquire-btn">
            ENQUIRE ABOUT THIS CONCEPT&nbsp;&rarr;
          </Link>
        </div>
      </section>

      {/* ── SECTION 6 — Related ── */}
      <section className="nc223-section nc223-section--related">
        <div className="nc223-container">
          <motion.h2
            className="nc223-related__heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            Discover other Kitchen compositions
          </motion.h2>

          <div className="nc223-related__grid">
            {RELATED.map((item, i) => (
              <motion.div
                key={i}
                className="nc223-related__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.65 }}
              >
                <Link to={item.href} className="nc223-related__link">
                  <div className="nc223-related__img-wrap">
                    <img src={item.img} alt={item.title} loading="lazy" />
                    <div className="nc223-related__img-overlay" />
                  </div>
                  <span className="nc223-related__name">{item.title}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .nc223-page {
          --cream:      #f5f3ef;
          --white:      #ffffff;
          --charcoal:   #1a1a1a;
          --mid-grey:   #5a5a5a;
          --light-grey: #e8e4de;
          --gold:       #b8905a;
          --border:     rgba(0,0,0,0.10);
          --ff-serif:   'Libre Baskerville', Georgia, serif;
          --ff-sans:    'Plus Jakarta Sans', system-ui, sans-serif;
          background: var(--cream);
          color: var(--charcoal);
          overflow-x: hidden;
          font-family: var(--ff-sans);
        }

        /* ── Containers ── */
        .nc223-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 48px;
        }
        .nc223-container--centered {
          display: flex; justify-content: center; align-items: center;
        }
        .nc223-container--split-headline {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          align-items: stretch;
          min-height: 70vh;
        }
        .nc223-container--two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .nc223-container--single-bottom {
          display: flex;
          justify-content: center;
        }
        @media (max-width: 768px) {
          .nc223-container { padding: 0 20px; }
          .nc223-container--split-headline { grid-template-columns: 1fr; }
          .nc223-container--two-col { grid-template-columns: 1fr; }
        }

        /* ── Sections ── */
        .nc223-section {
          padding: 0;
        }
        .nc223-section--headline-portrait {
          background: var(--cream);
          padding-top: 0;
          padding-bottom: 0;
        }
        .nc223-section--two-col {
          background: var(--cream);
          padding: 12px 48px;
        }
        .nc223-section--wide {
          background: var(--cream);
          padding: 12px 0 0;
        }
        .nc223-section--single-bottom {
          background: var(--cream);
          padding: 12px 48px;
        }
        .nc223-section--enquire {
          background: var(--cream);
          padding: 60px 48px;
          border-top: 1px solid var(--border);
        }
        .nc223-section--related {
          background: var(--cream);
          padding: 72px 0 96px;
          border-top: 1px solid var(--border);
        }
        @media (max-width: 768px) {
          .nc223-section--two-col { padding: 8px 20px; }
          .nc223-section--single-bottom { padding: 8px 20px; }
          .nc223-section--enquire { padding: 40px 20px; }
          .nc223-section--related { padding: 48px 0 64px; }
        }

        /* ── Hero ── */
        .nc223-hero {
          position: relative;
          width: 100%; height: 100vh; min-height: 500px;
          overflow: hidden;
          display: flex; align-items: flex-end;
        }
        .nc223-hero__bg {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
          background-repeat: no-repeat;
          transform: scale(1.02);
        }
        .nc223-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to top,
            rgba(10,8,6,0.65) 0%,
            rgba(10,8,6,0.15) 45%,
            transparent 100%
          );
        }
        .nc223-hero__content {
          position: relative; z-index: 2;
          width: 100%; padding-bottom: 64px;
        }
        .nc223-breadcrumbs {
          display: flex; align-items: center; flex-wrap: wrap; gap: 4px;
          font-family: var(--ff-sans);
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 18px;
        }
        .nc223-breadcrumbs a {
          color: rgba(255,255,255,0.75); text-decoration: none;
          transition: color .2s;
        }
        .nc223-breadcrumbs a:hover { color: #fff; }
        .nc223-breadcrumbs__current { color: #fff; }
        .nc223-hero__kicker {
          font-family: var(--ff-sans);
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--gold); margin: 0 0 10px;
        }
        .nc223-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(44px, 7vw, 90px);
          font-weight: 400; line-height: 1.05;
          color: #fff; margin: 0;
          letter-spacing: -0.02em;
        }
        @media (max-width: 768px) {
          .nc223-hero__content { padding-bottom: 40px; }
          .nc223-hero { height: 60vh; }
        }

        /* ── Headline + portrait ── */
        .nc223-headline-col {
          display: flex; align-items: center;
          background: var(--cream);
          padding: 64px 48px;
        }
        .nc223-headline {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.5vw, 48px);
          font-weight: 400; line-height: 1.25;
          color: var(--charcoal); margin: 0;
        }
        .nc223-portrait-col {
          overflow: hidden;
        }
        .nc223-portrait-col img {
          display: block; width: 100%; height: 100%;
          object-fit: cover; object-position: center;
        }
        @media (max-width: 768px) {
          .nc223-headline-col { padding: 48px 24px; }
          .nc223-portrait-col img { height: 380px; }
        }

        /* ── Two-column images ── */
        .nc223-two-col__img {
          overflow: hidden;
          line-height: 0;
        }
        .nc223-two-col__img img {
          display: block; width: 100%; height: 100%;
          object-fit: cover; aspect-ratio: 4/5;
        }

        /* ── Wide image ── */
        .nc223-wide-img {
          width: 100%; line-height: 0;
        }
        .nc223-wide-img img {
          display: block; width: 100%; height: auto;
          max-height: 75vh; object-fit: cover;
        }

        /* ── Single bottom image ── */
        .nc223-single-bottom__img {
          width: 100%; max-width: 800px; overflow: hidden; line-height: 0;
        }
        .nc223-single-bottom__img img {
          display: block; width: 100%; height: auto;
          object-fit: cover; aspect-ratio: 4/5;
        }

        /* ── Enquire CTA ── */
        .nc223-enquire-btn {
          display: inline-block;
          font-family: var(--ff-sans);
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--charcoal); text-decoration: none;
          border-bottom: 2px solid var(--charcoal);
          padding-bottom: 4px;
          transition: color .25s, border-color .25s;
        }
        .nc223-enquire-btn:hover {
          color: var(--gold); border-color: var(--gold);
        }

        /* ── Related ── */
        .nc223-related__heading {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.8vw, 36px);
          font-weight: 400; color: var(--charcoal);
          margin: 0 0 48px; line-height: 1.2;
        }
        .nc223-related__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }
        @media (max-width: 768px) {
          .nc223-related__grid { grid-template-columns: 1fr; }
        }
        .nc223-related__card { overflow: hidden; }
        .nc223-related__link {
          display: block; text-decoration: none; color: inherit;
          position: relative;
        }
        .nc223-related__img-wrap {
          position: relative; overflow: hidden;
          min-height: 40vh;
        }
        .nc223-related__img-wrap img {
          display: block; width: 100%; height: 100%;
          min-height: 40vh;
          object-fit: cover; object-position: center;
          transition: transform .6s ease;
        }
        .nc223-related__link:hover .nc223-related__img-wrap img {
          transform: scale(1.04);
        }
        .nc223-related__img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.62) 0%,
            transparent 55%
          );
        }
        .nc223-related__name {
          position: absolute; bottom: 5%; left: 5%;
          font-family: var(--ff-serif);
          font-size: clamp(16px, 1.8vw, 22px);
          font-weight: 400; color: #fff; line-height: 1.2;
          letter-spacing: 0;
        }
      `}</style>

    </motion.div>
  )
}
