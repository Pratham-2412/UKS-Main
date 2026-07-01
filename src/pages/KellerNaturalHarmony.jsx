import UKS_KELLER_NATURAL_HARMONY_NATURAL_HARMONY_HERO from '../assets/uks-keller-natural-harmony/uks-keller-natural-harmony-natural-harmony-hero.webp';
import UKS_KELLER_NATURAL_HARMONY_NATURAL_HARMONY_944_X_884_AFBEELDING_BIJ_TEKST from '../assets/uks-keller-natural-harmony/uks-keller-natural-harmony-natural-harmony-944-x-884-afbeelding-bij-tekst.webp';
import UKS_KELLER_NATURAL_HARMONY_NATURAL_HARMONY1326_X_884_AFBEELDING from '../assets/uks-keller-natural-harmony/uks-keller-natural-harmony-natural-harmony1326-x-884-afbeelding.webp';
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


// Images
const HERO_IMG      = UKS_KELLER_NATURAL_HARMONY_NATURAL_HARMONY_HERO
const SPLIT_IMG     = UKS_KELLER_NATURAL_HARMONY_NATURAL_HARMONY_944_X_884_AFBEELDING_BIJ_TEKST
const WIDE_IMG      = UKS_KELLER_NATURAL_HARMONY_NATURAL_HARMONY1326_X_884_AFBEELDING

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: 'Our veneer fronts are available in various stain colours.'
  },
  {
    q: 'What should I take into account with veneer?',
    a: 'The solid and veneer parts come from a selected, rough wood batch with knots, flaming wood structures and colour differences. Because it is a natural product, there is no influence on the colour and structure of the wood, making each kitchen unique.'
  },
  {
    q: 'How do I maintain veneer?',
    a: 'Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth or brush for cleaning. Swipe in the direction of the wood grain to remove dirt particles from the pores. Wipe the cleaned doors immediately afterwards with a soft cloth for a streak-free result and to prevent water from penetrating the seams which could lead to swelling.'
  }
]

export default function KellerNaturalHarmony() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="knh-page"
    >
      {/* ── HERO ── */}
      <section className="knh-hero">
        <img src={HERO_IMG} alt="Natural Harmony kitchen" className="knh-hero__img" loading="eager" />
        <div className="knh-hero__overlay">
          <div className="knh-container">
            <nav className="knh-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/modern-kitchens">Modern kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="knh-breadcrumbs__current">Natural Harmony</span>
            </nav>
            <p className="knh-hero__subtitle">Soothing & balanced</p>
            <h1 className="knh-hero__title">Natural Harmony</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT (light grey bg) ── */}
      <section className="knh-section knh-section--intro">
        <div className="knh-container knh-container--narrow">
          <h2 className="knh-intro__title">Japandi is thé new interior style</h2>
          <p className="knh-intro__body">
            We can no longer call Japandi a trend, it is the new interior style. This Japandi-style kitchen exudes a soothing style through the use of natural materials such as wood and natural stone. The minimalist lines, earth tones and warm lighting create a harmonious and serene atmosphere.
          </p>
        </div>
      </section>

      {/* ── SPLIT: Text panel left + 100vh photo right ── */}
      <section className="knh-split">
        <div className="knh-split__panel">
          <div className="knh-split__inner">
            <h2 className="knh-split__title">Natural oak stain</h2>
            <p className="knh-split__body">
              Japandi is an elegant fusion of Japanese and Scandinavian design principles, combining simplicity, tranquility and functionality. This interior style creates a serene and inviting atmosphere that is perfect for kitchens. For consumers looking for kitchen inspiration, Japandi offers a harmonious balance between minimalism and coziness.
            </p>
            <p className="knh-split__label">In this kitchen:</p>
            <ul className="knh-split__list">
              <li>Japandi style handle</li>
              <li>Beautiful play of lines</li>
              <li>Combination of materials in island and rinsing area</li>
            </ul>
            <p className="knh-split__label">The materials:</p>
            <ul className="knh-split__list">
              <li>Veneer front Nottingham in natural oak stain</li>
              <li>Handle 770 + 771 <small className="knh-badge">AVAILABLE Q2</small></li>
              <li>Accent front model Ladera in natural oak stain <small className="knh-badge">AVAILABLE Q2</small></li>
            </ul>
          </div>
        </div>
        <div className="knh-split__photo">
          <img src={SPLIT_IMG} alt="Natural Harmony detail view" loading="lazy" />
        </div>
      </section>

      {/* ── WIDE LANDSCAPE IMAGE — full bleed ── */}
      <section className="knh-section knh-section--img-wide">
        <div className="knh-container knh-container--wide">
          <figure className="knh-figure">
            <img src={WIDE_IMG} alt="Natural Harmony layout overhead" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS ── */}
      <section className="knh-section knh-section--try-this">
        <div className="knh-container knh-container--narrow">
          <h2 className="knh-section__title">Why not try this?</h2>
          <p className="knh-section__body">
            Choosing a melamine top instead of composite makes the price tag a bit more friendly.
          </p>
          <p className="knh-section__body u-mt-3">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration and can be adapted in terms of layout, model, colour, handle (frame)/handleless and many other options. More information about the possibilities? Visit one of our Keller dealers. They are happy to make a design in this style that suits your home and budget.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="knh-section knh-section--faq">
        <div className="knh-container knh-container--content">
          <dl className="knh-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="knh-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="knh-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="knh-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="knh-faq__answer">
                    <p>{item.a}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — light grey bg ── */}
      <section className="knh-cta-section">
        <div className="knh-container knh-container--narrow knh-container--centered">
          <h2 className="knh-cta__title">Curious about our programme?</h2>
          <p className="knh-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="knh-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        /* ── tokens ── */
        .knh-page {
          --white:      #ffffff;
          --intro-bg:   #efefef;
          --stone-beige:#c8bfb4;
          --cta-bg:     #e3e3e3;
          --charcoal:   #1d1d1f;
          --mid:        #424245;
          --border:     #dedede;
          --ff-serif:   var(--font-serif, Georgia, serif);
          --ff-sans:    var(--font-sans, system-ui, sans-serif);
          background: var(--white);
          color: var(--charcoal);
          overflow-x: hidden;
          font-family: var(--ff-sans);
        }

        .u-mt-3 { margin-top: 12px; }

        /* ── containers ── */
        .knh-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .knh-container--narrow   { max-width: 780px; }
        .knh-container--wide     { max-width: 100%; padding: 0; }
        .knh-container--content  { max-width: 1080px; }
        .knh-container--centered {
          text-align: center;
          display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .knh-container       { padding: 0 20px; }
        }

        /* ── hero ── */
        .knh-hero {
          position: relative;
          height: 100vh;
          overflow: hidden;
          background: #111;
        }
        .knh-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          opacity: 0.8;
        }
        .knh-hero__overlay {
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
        .knh-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 12px; letter-spacing: 0.04em;
          color: rgba(255,255,255,0.55);
          margin-bottom: 16px;
        }
        .knh-breadcrumbs a {
          color: rgba(255,255,255,0.8); text-decoration: none;
          transition: color 0.2s;
        }
        .knh-breadcrumbs a:hover { color: #f5f5f7; }
        .knh-breadcrumbs__current { color: rgba(255,255,255,0.9); }
        .knh-hero__subtitle {
          font-family: var(--ff-serif);
          font-size: 18px; font-style: italic;
          color: rgba(255,255,255,0.85); margin: 0 0 8px;
        }
        .knh-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 76px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── intro ── */
        .knh-section--intro {
          background: var(--intro-bg);
          padding: 72px 0 68px;
        }
        .knh-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 22px; line-height: 1.15;
        }
        .knh-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid); margin: 0;
        }

        /* ── split section ── */
        .knh-split {
          display: grid;
          grid-template-columns: 1fr;
          margin-bottom: 64px;
        }
        @media (min-width: 860px) {
          .knh-split {
            grid-template-columns: 5fr 7fr;
          }
        }
        .knh-split__panel {
          background: var(--stone-beige);
          display: flex; align-items: center;
          color: #fff;
        }
        .knh-split__inner {
          padding: 60px 48px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .knh-split__inner { padding: 72px 64px; } }
        @media (min-width: 1200px) { .knh-split__inner { padding: 88px 80px; } }

        .knh-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: #fff; margin: 0; line-height: 1.2;
        }
        .knh-split__body {
          font-size: 15px; line-height: 1.75;
          color: rgba(255,255,255,0.9); margin: 0;
        }
        
        .knh-split__label {
          font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: rgba(255,255,255,0.55); margin-top: 6px;
        }
        .knh-split__list {
          margin: 2px 0 0; padding-left: 18px;
          font-size: 15px; line-height: 1.9;
          color: rgba(255,255,255,0.9);
        }
        .knh-split__list li + li { margin-top: 3px; }
        .knh-badge {
          display: inline-block; font-size: 9px; font-weight: 800;
          letter-spacing: 0.05em; padding: 2px 6px; border-radius: 2px;
          background: rgba(255,255,255,0.25); color: #fff; margin-left: 6px;
          vertical-align: middle;
        }

        /* split photo 100vh on widescreen */
        .knh-split__photo { overflow: hidden; min-height: 420px; }
        @media (min-width: 860px) {
          .knh-split__photo {
            min-height: unset;
            height: 100vh;
          }
        }
        .knh-split__photo img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; display: block;
        }

        /* ── figures ── */
        .knh-section--img-wide { padding: 64px 0; }
        .knh-figure { margin: 0; padding: 0; overflow: hidden; }
        .knh-figure img { display: block; width: 100%; height: auto; }

        /* ── why not try this ── */
        .knh-section--try-this { padding: 72px 0 64px; }
        .knh-section__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 22px; line-height: 1.15;
        }
        .knh-section__body {
          font-size: 17px; line-height: 1.8; color: var(--mid); margin: 0;
        }

        /* ── FAQ ── */
        .knh-section--faq { padding: 0 0 80px; }
        .knh-faq__list { border-top: 1px solid var(--border); }
        .knh-faq__item { border-bottom: 1px solid var(--border); }
        .knh-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--charcoal); text-align: left; transition: color .2s;
        }
        .knh-faq__toggle:hover { color: var(--stone-beige); }
        .knh-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--stone-beige);
        }
        .knh-faq__answer { margin: 0; padding: 0 0 24px; font-size: 15px; line-height: 1.8; color: var(--mid); }
        .knh-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .knh-cta-section {
          background: var(--cta-bg);
          padding: 96px 0 112px;
        }
        .knh-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 18px; line-height: 1.1;
        }
        .knh-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--mid); margin: 0 0 40px;
        }
        .knh-cta__btn {
          display: inline-block;
          font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: #fff;
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, transform .2s;
        }
        .knh-cta__btn:hover { background: var(--stone-beige); transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .knh-hero          { height: 55vh; min-height: 360px; }
          .knh-hero__overlay { padding-bottom: 40px; }
          .knh-intro         { padding: 48px 0 40px; }
          .knh-section--faq  { padding: 0 0 60px; }
          .knh-cta-section   { padding: 64px 0 72px; }
          .knh-split__inner  { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
