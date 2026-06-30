import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const BASE = 'https://www.kellerkitchens.com/media/cache/generic/rc'

// Exact image URLs from the Keller Matt Black page
const HERO_IMG  = `${BASE}/wFPI39x6/uploads/media/630c8aade7af0/1920-x-1090-hero-mattblack.webp?originalExtension=jpg`
const WIDE_IMG  = `${BASE}/1iEfjUt1/uploads/media/630c8aade7af0/1920-x-1090-hero-mattblack.webp?originalExtension=jpg`
const SPLIT_IMG = `${BASE}/TfZuoSPO/uploads/media/630c8c6480414/960-x-1024-mattblack.webp?originalExtension=jpg`
const GRID_IMG  = `${BASE}/FiLvDI5a/uploads/media/630c8eac23fd6/1326-x-884-raster-mattblack.webp?originalExtension=jpg`

// The original Matt Black page has these unique colours:
// intro bg: #edefee (very light sage)
// split panel bg: #313432 (dark charcoal-green)
// CTA bg: #d0d2ca (sage green-grey)

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: 'Ultra matt melamine is available in six stylish colours. Opting for traditional melamine, gives you a wide choice in uni colours, wood and trend decors. Also very beautiful!'
  },
  {
    q: 'How do I maintain melamine?',
    a: 'Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth. After cleaning, always dry the kitchen elements with a soft cloth to prevent water from penetrating the seams which could lead to swelling.'
  },
  {
    q: 'How do I maintain concrete?',
    a: 'For cleaning, use a mild kitchen or all-purpose cleaner dissolved in water and a soft cloth. Do not use abrasives, anti-scaling agents or corrosive substances. Use a soft cloth and not a scouring pad or other abrasive materials.'
  }
]

export default function KellerMattBlack() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="kmb-page"
    >

      {/* ── HERO — full-bleed ── */}
      <section className="kmb-hero">
        <img
          src={HERO_IMG}
          alt="Matt Black kitchen"
          className="kmb-hero__img"
          loading="eager"
          width="1920"
          height="1090"
        />
        <div className="kmb-hero__overlay">
          <div className="kmb-wrap">
            <nav className="kmb-crumbs" aria-label="Breadcrumb">
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/modern-kitchens">Modern kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="kmb-crumbs__cur">Matt Black</span>
            </nav>
            <h1 className="kmb-hero__title">Matt Black</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT — light sage background ── */}
      <section className="kmb-intro">
        <div className="kmb-wrap kmb-wrap--narrow">
          <h2 className="kmb-intro__title">Matt and black are on trend!</h2>
          <p className="kmb-intro__body">
            Black is the trend. Just like matt colours. By fitting this handleless kitchen
            with TIP-ON (touch-to-open), the result is extra sleek.
          </p>
        </div>
      </section>

      {/* ── WIDE LANDSCAPE IMAGE — contained, no crop ── */}
      <section className="kmb-img-section kmb-img-section--top-pad">
        <div className="kmb-wrap kmb-wrap--wide">
          <img
            src={WIDE_IMG}
            alt="Matt Black kitchen – full view"
            className="kmb-img-full"
            loading="lazy"
            width="1920"
            height="1280"
          />
        </div>
      </section>

      {/* ── SPLIT: dark panel LEFT + portrait image RIGHT ── */}
      <section className="kmb-split">
        <div className="kmb-split__panel">
          <div className="kmb-split__inner">
            <h2 className="kmb-split__title">TIP-ON for a super sleek design</h2>
            <p className="kmb-split__lead">This kitchen is fully equipped in TIP-ON (touch to open).</p>
            <p className="kmb-split__lead">This creates a beautiful interplay of lines and a super sleek appearance.</p>
            <p className="kmb-split__label">In this kitchen:</p>
            <ul className="kmb-split__list">
              <li>Ultra matt doors in the colour Carbon</li>
              <li>Sleek look due to handle-less design</li>
              <li>Spacious island with breakfast bar</li>
            </ul>
          </div>
        </div>
        <div className="kmb-split__photo">
          <img
            src={SPLIT_IMG}
            alt="Matt Black – detail view"
            loading="lazy"
            width="960"
            height="900"
          />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="kmb-faq-section">
        <div className="kmb-wrap kmb-wrap--content">
          <h2 className="kmb-faq__heading">Why not try this?</h2>
          <p className="kmb-faq__intro">
            Prefer a handless trim, knob or handle on the fronts? No problem, you can choose from a large
            range of types and colours. Is a concrete top above your budget? A laminate worktop with concrete
            print is warmer, easier to maintain and more affordable.
          </p>
          <p className="kmb-faq__intro kmb-faq__intro--gap">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as
            inspiration and can be adapted in terms of layout, model, colour, handle (trim)/handleless and
            many other options. More information about the possibilities? Visit one of our Keller dealers.
            They are happy to make a design in this style that suits your home and budget.
          </p>
          <dl className="kmb-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="kmb-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="kmb-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="kmb-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="kmb-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── RASTER / GRID IMAGE ── */}
      <section className="kmb-img-section">
        <div className="kmb-wrap kmb-wrap--wide">
          <img
            src={GRID_IMG}
            alt="Matt Black – kitchen layout overhead"
            className="kmb-img-full"
            loading="lazy"
            width="1326"
            height="884"
          />
        </div>
      </section>

      {/* ── CTA — sage green-grey background ── */}
      <section className="kmb-cta">
        <div className="kmb-wrap kmb-wrap--narrow kmb-wrap--center">
          <h2 className="kmb-cta__title">Curious about our programme?</h2>
          <p className="kmb-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="kmb-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── STYLES ── */}
      <style>{`
        /* ── tokens ── */
        .kmb-page {
          --white:      #ffffff;
          --intro-bg:   #edefee;
          --panel-bg:   #313432;
          --cta-bg:     #d0d2ca;
          --charcoal:   #1d1d1f;
          --mid:        #424245;
          --border:     #ddddd8;
          --ff-serif:   var(--font-serif, Georgia, serif);
          --ff-sans:    var(--font-sans, system-ui, sans-serif);
          background: var(--white);
          color: var(--charcoal);
          overflow-x: hidden;
          font-family: var(--ff-sans);
        }

        /* ── wrapper / containers ── */
        .kmb-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
        }
        .kmb-wrap--narrow  { max-width: 780px; }
        .kmb-wrap--wide    { max-width: 1440px; padding: 0 40px; }
        .kmb-wrap--content { max-width: 1080px; }
        .kmb-wrap--center  { text-align: center; display: flex; flex-direction: column; align-items: center; }
        @media (max-width: 768px) {
          .kmb-wrap       { padding: 0 20px; }
          .kmb-wrap--wide { padding: 0 16px; }
        }

        /* ── hero ── */
        .kmb-hero {
          position: relative;
          overflow: hidden;
          background: #0e0e0e;
          /* hero is a fixed viewport height */
          height: 60vh;
          min-height: 420px;
          max-height: 680px;
        }
        .kmb-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          opacity: 0.78;
        }
        .kmb-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.72) 0%,
            rgba(0,0,0,0.12) 50%,
            transparent 100%
          );
          display: flex; align-items: flex-end;
          padding-bottom: 60px;
        }
        /* breadcrumbs */
        .kmb-crumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 12px; letter-spacing: 0.04em;
          color: rgba(255,255,255,0.52); margin-bottom: 14px;
        }
        .kmb-crumbs a { color: rgba(255,255,255,0.78); text-decoration: none; transition: color .2s; }
        .kmb-crumbs a:hover { color: #ccc; }
        .kmb-crumbs__cur { color: rgba(255,255,255,0.85); }
        .kmb-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 74px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── intro (light sage) ── */
        .kmb-intro {
          background: var(--intro-bg);
          padding: 72px 0 68px;
        }
        .kmb-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 22px; line-height: 1.15;
        }
        .kmb-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid); margin: 0;
        }

        /* ── wide images (NO crop, natural height) ── */
        .kmb-img-section { background: var(--white); padding: 0; }
        .kmb-img-section--top-pad { padding-top: 4px; }
        .kmb-img-full {
          display: block;
          width: 100%;
          height: auto;   /* ← key: never crop, show at natural aspect ratio */
        }

        /* ── split section ── */
        .kmb-split {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .kmb-split { grid-template-columns: 5fr 7fr; }
        }

        .kmb-split__panel {
          background: var(--panel-bg);
          display: flex; align-items: center;
        }
        .kmb-split__inner {
          padding: 60px 48px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .kmb-split__inner { padding: 72px 64px; } }
        @media (min-width: 1200px) { .kmb-split__inner { padding: 88px 80px; } }

        .kmb-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: #fff; margin: 0; line-height: 1.2;
        }
        .kmb-split__lead {
          font-size: 15px; line-height: 1.75;
          color: rgba(255,255,255,0.82); margin: 0;
        }
        .kmb-split__label {
          font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: rgba(255,255,255,0.44); margin-top: 4px;
        }
        .kmb-split__list {
          margin: 2px 0 0; padding-left: 18px;
          font-size: 15px; line-height: 1.9;
          color: rgba(255,255,255,0.88);
        }
        .kmb-split__list li + li { margin-top: 3px; }

        /* portrait photo — natural dimensions, no crop */
        .kmb-split__photo { overflow: hidden; }
        .kmb-split__photo img {
          display: block; width: 100%; height: 100%;
          object-fit: cover; object-position: center top;
        }
        @media (max-width: 859px) {
          .kmb-split__photo img { height: auto; /* on mobile show full portrait */ }
        }

        /* ── FAQ ── */
        .kmb-faq-section { background: var(--white); padding: 72px 0 80px; }
        .kmb-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(24px, 2.8vw, 38px);
          font-weight: 300; color: var(--charcoal); margin: 0 0 24px;
        }
        .kmb-faq__intro { font-size: 16px; line-height: 1.8; color: var(--mid); margin: 0; }
        .kmb-faq__intro--gap { margin-top: 14px; }
        .kmb-faq__list { margin-top: 48px; border-top: 1px solid var(--border); }
        .kmb-faq__item { border-bottom: 1px solid var(--border); }
        .kmb-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--charcoal); text-align: left; transition: color .2s;
        }
        .kmb-faq__toggle:hover { color: #313432; }
        .kmb-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: #313432;
        }
        .kmb-faq__answer { margin: 0; padding: 0 0 24px; font-size: 15px; line-height: 1.8; color: var(--mid); }
        .kmb-faq__answer p { margin: 0; }

        /* ── CTA — sage green-grey ── */
        .kmb-cta {
          background: var(--cta-bg);
          padding: 88px 0 100px;
        }
        .kmb-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 3.8vw, 46px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 18px; line-height: 1.1;
        }
        .kmb-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--mid); margin: 0 0 40px;
        }
        .kmb-cta__btn {
          display: inline-block;
          font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: #fff;
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, transform .2s;
        }
        .kmb-cta__btn:hover { background: var(--panel-bg); transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .kmb-hero         { height: 52vh; min-height: 340px; }
          .kmb-hero__overlay { padding-bottom: 40px; }
          .kmb-intro        { padding: 48px 0 44px; }
          .kmb-faq-section  { padding: 52px 0 60px; }
          .kmb-cta          { padding: 60px 0 72px; }
          .kmb-split__inner { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
