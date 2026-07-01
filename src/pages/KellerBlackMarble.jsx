import UKS_KELLER_BLACK_MARBLE_1920_X_1090_HERO_BLACKMARBLE from '../assets/uks-keller-black-marble/uks-keller-black-marble-1920-x-1090-hero-blackmarble.webp';
import UKS_KELLER_BLACK_MARBLE_615X718_CARROUSEL_BLCKMARBLE from '../assets/uks-keller-black-marble/uks-keller-black-marble-615x718-carrousel-blckmarble.webp';
import UKS_KELLER_BLACK_MARBLE_1326_X_884_RASTER_BLACKMARBLE from '../assets/uks-keller-black-marble/uks-keller-black-marble-1326-x-884-raster-blackmarble.webp';
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


// All images exactly as on the original Keller Black Marble page
const HERO_IMG   = UKS_KELLER_BLACK_MARBLE_1920_X_1090_HERO_BLACKMARBLE
const WIDE_IMG   = UKS_KELLER_BLACK_MARBLE_1920_X_1090_HERO_BLACKMARBLE
const SPLIT_IMG  = UKS_KELLER_BLACK_MARBLE_615X718_CARROUSEL_BLCKMARBLE
const GRID_IMG   = UKS_KELLER_BLACK_MARBLE_1326_X_884_RASTER_BLACKMARBLE

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: 'To really give your kitchen a "personal touch", you can choose from 2,050 colors in matt, textured, silk gloss and high gloss lacquer. Our handle trims are also available in 2,050 colours.'
  },
  {
    q: 'How do I maintain a lacquered kitchen?',
    a: 'Lacquer is more sensitive than melamine, be careful in order to avoid scratches and dents. Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth. After cleaning, always dry the kitchen elements with a soft cloth to prevent water from penetrating the seams which could lead to swelling.'
  }
]

export default function KellerBlackMarble() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="kbm-page"
    >

      {/* ── HERO ── full-bleed, title bottom-left */}
      <section className="kbm-hero">
        <img src={HERO_IMG} alt="Black Marble kitchen" className="kbm-hero__img" loading="eager" />
        <div className="kbm-hero__overlay">
          <div className="kbm-container">
            <nav className="kbm-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/modern-kitchens">Modern kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="kbm-breadcrumbs__current">Black Marble</span>
            </nav>
            <h1 className="kbm-hero__title">Black Marble</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT — centered, narrow ── */}
      <section className="kbm-section kbm-section--intro">
        <div className="kbm-container kbm-container--narrow">
          <h2 className="kbm-intro__title">Timeless yet trendy</h2>
          <p className="kbm-intro__body">
            The matt lacquered doors in the colour snow give a nice contrast with the worktop and recess
            made from black marble ceramics. The extra high base units with low plinth ensure a nice sleek design.
          </p>
        </div>
      </section>

      {/* ── WIDE LANDSCAPE IMAGE — contained with side padding ── */}
      <section className="kbm-section kbm-section--img-wide">
        <div className="kbm-container kbm-container--wide">
          <figure className="kbm-figure kbm-figure--landscape">
            <img
              src={WIDE_IMG}
              alt="Black Marble – full kitchen view"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* ── SPLIT: dark panel LEFT + portrait image RIGHT ── */}
      <section className="kbm-split">
        {/* dark green content panel */}
        <div className="kbm-split__panel">
          <div className="kbm-split__panel-inner">
            <h2 className="kbm-split__title">Matt lacquer in white and black ceramic</h2>
            <p className="kbm-split__lead">Timeless black and white with extra tall cabinets.</p>
            <p className="kbm-split__label">In this kitchen:</p>
            <ul className="kbm-split__list">
              <li>Buffet cabinet with LED spots under the floating units</li>
              <li>Extra high base units</li>
              <li>Tall doors in one piece</li>
            </ul>
          </div>
        </div>
        {/* portrait photo */}
        <div className="kbm-split__photo">
          <img
            src={SPLIT_IMG}
            alt="Black Marble – cabinet detail"
            loading="lazy"
          />
        </div>
      </section>

      {/* ── RASTER / GRID IMAGE — contained wide ── */}
      <section className="kbm-section kbm-section--img-wide kbm-section--img-top-gap">
        <div className="kbm-container kbm-container--wide">
          <figure className="kbm-figure kbm-figure--raster">
            <img
              src={GRID_IMG}
              alt="Black Marble – overhead layout"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="kbm-section kbm-section--faq">
        <div className="kbm-container kbm-container--content">
          <h2 className="kbm-faq__heading">Why not try this?</h2>
          <p className="kbm-faq__intro">
            Choose ultra matt melamine instead of (matt) lacquer and a laminated top for a budget-friendly version.
          </p>
          <p className="kbm-faq__intro kbm-faq__intro--spaced">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration
            and can be adapted in terms of layout, model, colour, handle (trim)/handleless and many other options.
            More information about the possibilities? Visit one of our Keller dealers. They are happy to make a
            design in this style that suits your home and budget.
          </p>

          <dl className="kbm-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="kbm-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="kbm-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="kbm-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="kbm-faq__answer">
                    <p>{item.a}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA: Curious about our programme? ── */}
      <section className="kbm-cta-section">
        <div className="kbm-container kbm-container--narrow kbm-container--centered">
          <h2 className="kbm-cta__title">Curious about our programme?</h2>
          <p className="kbm-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="kbm-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        /* ── tokens ── */
        .kbm-page {
          --white:    #ffffff;
          --cream:    #f8f8f6;
          --charcoal: #1d1d1f;
          --mid:      #424245;
          --light:    #86868b;
          --gold:     #b8a28a;
          --forest:   #354944;
          --border:   #e0e0e0;
          --ff-serif: var(--font-serif, 'Georgia', serif);
          --ff-sans:  var(--font-sans, system-ui, sans-serif);
          background: var(--white);
          color: var(--charcoal);
          overflow-x: hidden;
          font-family: var(--ff-sans);
        }

        /* ── containers ── */
        .kbm-container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 48px;
        }
        .kbm-container--narrow  { max-width: 820px; }
        .kbm-container--wide    { max-width: 1440px; padding: 0 32px; }
        .kbm-container--content { max-width: 1100px; }
        .kbm-container--centered {
          text-align: center;
          display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .kbm-container { padding: 0 20px; }
          .kbm-container--wide { padding: 0 16px; }
        }

        /* ── hero ── */
        .kbm-hero {
          position: relative;
          height: 68vh; min-height: 480px; max-height: 720px;
          overflow: hidden; background: #0a0a0a;
        }
        .kbm-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          opacity: 0.78;
        }
        .kbm-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.72) 0%,
            rgba(0,0,0,0.18) 50%,
            transparent 100%
          );
          display: flex; align-items: flex-end;
          padding-bottom: 64px;
        }
        .kbm-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 12px; letter-spacing: 0.04em;
          color: rgba(255,255,255,0.55);
          margin-bottom: 16px;
        }
        .kbm-breadcrumbs a {
          color: rgba(255,255,255,0.75); text-decoration: none;
          transition: color 0.2s;
        }
        .kbm-breadcrumbs a:hover { color: var(--gold); }
        .kbm-breadcrumbs__current { color: var(--gold); }
        .kbm-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 76px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── generic section wrapper ── */
        .kbm-section { width: 100%; background: var(--white); }
        .kbm-section--intro { padding: 72px 0 64px; }
        .kbm-section--img-wide { padding: 0 0 6px; }
        .kbm-section--img-top-gap { padding-top: 6px; }
        .kbm-section--faq { padding: 80px 0 96px; }

        /* intro text */
        .kbm-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.5vw, 42px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 22px; line-height: 1.15;
        }
        .kbm-intro__body {
          font-size: 17px; line-height: 1.8;
          color: var(--mid); margin: 0;
        }

        /* ── figures (full image, no crop) ── */
        .kbm-figure          { margin: 0; padding: 0; overflow: hidden; }
        .kbm-figure img      { display: block; width: 100%; height: auto; }
        /* landscape and raster both show naturally */
        .kbm-figure--landscape { width: 100%; }
        .kbm-figure--raster    { width: 100%; }

        /* ── split section ── */
        .kbm-split {
          display: grid;
          grid-template-columns: 1fr;
          background: var(--white);
        }
        @media (min-width: 860px) {
          .kbm-split {
            grid-template-columns: 5fr 7fr;
            min-height: 600px;
          }
        }
        @media (min-width: 1200px) {
          .kbm-split { min-height: 680px; }
        }

        /* dark forest panel */
        .kbm-split__panel {
          background: var(--forest);
          display: flex; align-items: center;
        }
        .kbm-split__panel-inner {
          padding: 56px 48px;
          display: flex; flex-direction: column; gap: 18px;
        }
        @media (min-width: 860px) {
          .kbm-split__panel-inner { padding: 72px 64px; }
        }
        @media (min-width: 1200px) {
          .kbm-split__panel-inner { padding: 88px 80px; }
        }
        .kbm-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: #fff;
          margin: 0; line-height: 1.2;
        }
        .kbm-split__lead {
          font-size: 16px; line-height: 1.7;
          color: rgba(255,255,255,0.85); margin: 0;
        }
        .kbm-split__label {
          font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: rgba(255,255,255,0.5);
          margin-top: 4px;
        }
        .kbm-split__list {
          margin: 2px 0 0; padding-left: 18px;
          font-size: 15px; line-height: 1.85;
          color: rgba(255,255,255,0.88);
        }
        .kbm-split__list li + li { margin-top: 4px; }

        /* photo side */
        .kbm-split__photo {
          overflow: hidden;
          min-height: 420px;
        }
        @media (min-width: 860px) { .kbm-split__photo { min-height: unset; } }
        .kbm-split__photo img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          display: block;
        }

        /* ── FAQ ── */
        .kbm-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(24px, 3vw, 38px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 24px;
        }
        .kbm-faq__intro {
          font-size: 16px; line-height: 1.8;
          color: var(--mid); margin: 0;
        }
        .kbm-faq__intro--spaced { margin-top: 14px; }

        .kbm-faq__list { margin-top: 48px; border-top: 1px solid var(--border); }
        .kbm-faq__item { border-bottom: 1px solid var(--border); }
        .kbm-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--charcoal); text-align: left;
          transition: color 0.2s;
        }
        .kbm-faq__toggle:hover { color: var(--forest); }
        .kbm-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--forest);
        }
        .kbm-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--mid);
        }
        .kbm-faq__answer p { margin: 0; }

        /* ── CTA section ── */
        .kbm-cta-section {
          background: var(--forest);
          padding: 96px 0 112px;
        }
        .kbm-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 300; color: #fff;
          margin: 0 0 18px; line-height: 1.1;
        }
        .kbm-cta__body {
          font-size: 17px; line-height: 1.7;
          color: rgba(255,255,255,0.78);
          margin: 0 0 40px;
        }
        .kbm-cta__btn {
          display: inline-block;
          font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: #fff; color: var(--charcoal);
          padding: 16px 42px; border-radius: 3px;
          text-decoration: none;
          transition: background 0.25s, color 0.25s, transform 0.2s;
        }
        .kbm-cta__btn:hover {
          background: var(--gold); color: #fff; transform: translateY(-2px);
        }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .kbm-hero { height: 55vh; min-height: 360px; }
          .kbm-hero__overlay { padding-bottom: 40px; }
          .kbm-section--intro { padding: 48px 0 40px; }
          .kbm-section--faq { padding: 56px 0 64px; }
          .kbm-cta-section { padding: 64px 0 72px; }
          .kbm-split__panel-inner { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
