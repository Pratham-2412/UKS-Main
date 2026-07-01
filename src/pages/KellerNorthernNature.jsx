import UKS_KELLER_NORTHERN_NATURE_1920_X_1090_HERO_NORTHERNNATURE from '../assets/uks-keller-northern-nature/uks-keller-northern-nature-1920-x-1090-hero-northernnature.webp';
import UKS_KELLER_NORTHERN_NATURE_960_X_1024_AFBEELDING_BIJ_TEKST_NORTHERNNATURE from '../assets/uks-keller-northern-nature/uks-keller-northern-nature-960-x-1024-afbeelding-bij-tekst-northernnature.webp';
import UKS_KELLER_NORTHERN_NATURE_1326_X_884_RASTER_NORTHERNNATURE from '../assets/uks-keller-northern-nature/uks-keller-northern-nature-1326-x-884-raster-northernnature.webp';
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


// Images
const HERO_IMG     = UKS_KELLER_NORTHERN_NATURE_1920_X_1090_HERO_NORTHERNNATURE
const WIDE1_IMG    = UKS_KELLER_NORTHERN_NATURE_1920_X_1090_HERO_NORTHERNNATURE
const SPLIT_IMG    = UKS_KELLER_NORTHERN_NATURE_960_X_1024_AFBEELDING_BIJ_TEKST_NORTHERNNATURE
const WIDE2_IMG    = UKS_KELLER_NORTHERN_NATURE_1326_X_884_RASTER_NORTHERNNATURE

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: 'To really give your kitchen a "personal touch", you can choose from 2,050 colours in matt, textured, silk gloss and high gloss lacquer. Our handle trims are also available in 2,050 colours.'
  },
  {
    q: 'How do I maintain satin gloss lacquer?',
    a: 'Lacquer is more sensitive than melamine, be careful in order to avoid scratches and dents. Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth. After cleaning, always dry the kitchen elements with a soft cloth to prevent water from penetrating the seams which could lead to swelling.'
  },
  {
    q: 'How do I maintain a wooden worktop?',
    a: 'Remove stains as soon as possible. There are substances that can no longer be completely removed if they are not cleaned immediately. For cleaning, use a mild kitchen or all-purpose cleaner dissolved in water and a soft cloth (not microfiber). It is wise to treat a wooden worktop at least twice a year with a mineral maintenance oil. Do not leave damp dishcloths or towels on a wooden worktop for too long. Avoid using strong alkaline cleaning agents (chlorine, bleach, sink unblocker).'
  }
]

export default function KellerNorthernNature() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="knn2-page"
    >
      {/* ── HERO ── */}
      <section className="knn2-hero">
        <img src={HERO_IMG} alt="Northern Nature kitchen" className="knn2-hero__img" loading="eager" />
        <div className="knn2-hero__overlay">
          <div className="knn2-container">
            <nav className="knn2-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/modern-kitchens">Modern kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="knn2-breadcrumbs__current">Northern Nature</span>
            </nav>
            <h1 className="knn2-hero__title">Northern Nature</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="knn2-section knn2-section--intro">
        <div className="knn2-container knn2-container--narrow">
          <h2 className="knn2-intro__title">Scandi interior style</h2>
          <p className="knn2-intro__body">
            Modern and light. Typical Scandinavian influences in this kitchen are the simplicity, the pastel green and the light wood.
          </p>
        </div>
      </section>

      {/* ── WIDE LANDSCAPE IMAGE 1 — full bleed ── */}
      <section className="knn2-section knn2-section--img-wide">
        <div className="knn2-container knn2-container--wide">
          <figure className="knn2-figure">
            <img src={WIDE1_IMG} alt="Northern Nature space view" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── SPLIT: Text panel left + 100vh photo right ── */}
      <section className="knn2-split">
        <div className="knn2-split__panel">
          <div className="knn2-split__inner">
            <h2 className="knn2-split__title">Modern kitchen, modern gadgets</h2>
            <p className="knn2-split__body">
              The Northern Nature is equipped with some handy features; such as a USB converter and wireless phone charger in the worktop.
            </p>
            <p className="knn2-split__label">In this kitchen:</p>
            <ul className="knn2-split__list">
              <li>Ton-sur-ton worktop</li>
              <li>Made to measure table in worktop material</li>
              <li>USB converter and wireless phone charger in the worktop</li>
            </ul>
          </div>
        </div>
        <div className="knn2-split__photo">
          <img src={SPLIT_IMG} alt="Northern Nature details" loading="lazy" />
        </div>
      </section>

      {/* ── WIDE LANDSCAPE IMAGE 2 — full bleed ── */}
      <section className="knn2-section knn2-section--img-wide">
        <div className="knn2-container knn2-container--wide">
          <figure className="knn2-figure">
            <img src={WIDE2_IMG} alt="Northern Nature kitchen overview" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ (light sage bg) ── */}
      <section className="knn2-section knn2-section--faq">
        <div className="knn2-container knn2-container--content">
          <h2 className="knn2-faq__heading">Why not try this?</h2>
          <p className="knn2-faq__intro">
            In this example we used handleless kitchen cabinets finished in lacquer. Do you prefer a handle? We have a variety of them. And if you choose melamine instead of lacquer, it even gets more attainable.
          </p>

          <dl className="knn2-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="knn2-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="knn2-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="knn2-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="knn2-faq__answer">
                    <p>{item.a}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — grey-blue bg ── */}
      <section className="knn2-cta-section">
        <div className="knn2-container knn2-container--narrow knn2-container--centered">
          <h2 className="knn2-cta__title">Curious about our programme?</h2>
          <p className="knn2-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="knn2-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        /* ── tokens ── */
        .knn2-page {
          --white:      #ffffff;
          --sage:       #92a794;
          --light-sage: #b1beb4;
          --grey-blue:  #bfc4c8;
          --charcoal:   #1d1d1f;
          --mid:        #424245;
          --border:     rgba(255, 255, 255, 0.35);
          --ff-serif:   var(--font-serif, Georgia, serif);
          --ff-sans:    var(--font-sans, system-ui, sans-serif);
          background: var(--white);
          color: var(--charcoal);
          overflow-x: hidden;
          font-family: var(--ff-sans);
        }

        /* ── containers ── */
        .knn2-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .knn2-container--narrow   { max-width: 780px; }
        .knn2-container--wide     { max-width: 100%; padding: 0; }
        .knn2-container--content  { max-width: 1080px; }
        .knn2-container--centered {
          text-align: center;
          display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .knn2-container       { padding: 0 20px; }
        }

        /* ── hero ── */
        .knn2-hero {
          position: relative;
          height: 100vh;
          overflow: hidden;
          background: #111;
        }
        .knn2-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          opacity: 0.8;
        }
        .knn2-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.72) 0%,
            rgba(0,0,0,0.15) 50%,
            transparent 100%
          );
          display: flex; align-items: flex-end;
          padding-bottom: 64px;
        }
        .knn2-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 12px; letter-spacing: 0.04em;
          color: rgba(255,255,255,0.55);
          margin-bottom: 16px;
        }
        .knn2-breadcrumbs a {
          color: rgba(255,255,255,0.8); text-decoration: none;
          transition: color 0.2s;
        }
        .knn2-breadcrumbs a:hover { color: #f5f5f7; }
        .knn2-breadcrumbs__current { color: rgba(255,255,255,0.9); }
        .knn2-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 76px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── intro ── */
        .knn2-section--intro {
          padding: 72px 0 68px;
        }
        .knn2-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 22px; line-height: 1.15;
        }
        .knn2-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid); margin: 0;
        }

        /* ── split section ── */
        .knn2-split {
          display: grid;
          grid-template-columns: 1fr;
          margin-bottom: 64px;
        }
        @media (min-width: 860px) {
          .knn2-split {
            grid-template-columns: 5fr 7fr;
          }
        }
        .knn2-split__panel {
          background: var(--sage);
          display: flex; align-items: center;
          color: #fff;
        }
        .knn2-split__inner {
          padding: 60px 48px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .knn2-split__inner { padding: 72px 64px; } }
        @media (min-width: 1200px) { .knn2-split__inner { padding: 88px 80px; } }

        .knn2-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: #fff; margin: 0; line-height: 1.2;
        }
        .knn2-split__body {
          font-size: 15px; line-height: 1.75;
          color: rgba(255,255,255,0.85); margin: 0;
        }
        
        .knn2-split__label {
          font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: rgba(255,255,255,0.45); margin-top: 6px;
        }
        .knn2-split__list {
          margin: 2px 0 0; padding-left: 18px;
          font-size: 15px; line-height: 1.9;
          color: rgba(255,255,255,0.88);
        }
        .knn2-split__list li + li { margin-top: 3px; }

        /* split photo 100vh on widescreen */
        .knn2-split__photo { overflow: hidden; min-height: 420px; }
        @media (min-width: 860px) {
          .knn2-split__photo {
            min-height: unset;
            height: 100vh;
          }
        }
        .knn2-split__photo img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; display: block;
        }

        /* ── figures ── */
        .knn2-section--img-wide { padding: 64px 0; }
        .knn2-figure { margin: 0; padding: 0; overflow: hidden; }
        .knn2-figure img { display: block; width: 100%; height: auto; }

        /* ── FAQ (light sage bg) ── */
        .knn2-section--faq {
          background: var(--light-sage);
          color: #fff;
          padding: 80px 0 96px;
        }
        .knn2-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px);
          font-weight: 300; color: #fff;
          margin: 0 0 24px;
        }
        .knn2-faq__intro {
          font-size: 16px; line-height: 1.8;
          color: rgba(255,255,255,0.9); margin: 0;
        }
        .knn2-faq__list {
          margin-top: 48px;
          border-top: 1px solid var(--border);
        }
        .knn2-faq__item {
          border-bottom: 1px solid var(--border);
        }
        .knn2-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: #fff; text-align: left;
        }
        .knn2-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: #fff;
        }
        .knn2-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8;
          color: rgba(255,255,255,0.85);
        }
        .knn2-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .knn2-cta-section {
          background: var(--grey-blue);
          padding: 96px 0 112px;
        }
        .knn2-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 18px; line-height: 1.1;
        }
        .knn2-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--mid); margin: 0 0 40px;
        }
        .knn2-cta__btn {
          display: inline-block;
          font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: #fff;
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, transform .2s;
        }
        .knn2-cta__btn:hover { background: var(--sage); transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .knn2-hero          { height: 55vh; min-height: 360px; }
          .knn2-hero__overlay { padding-bottom: 40px; }
          .knn2-intro         { padding: 48px 0 40px; }
          .knn2-section--faq  { padding: 56px 0 64px; }
          .knn2-cta-section   { padding: 64px 0 72px; }
          .knn2-split__inner  { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
