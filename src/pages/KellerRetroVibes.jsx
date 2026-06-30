import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const BASE = 'https://www.kellerkitchens.com/media/cache/generic/rc'

// Images
const HERO_IMG   = `${BASE}/OaUWNvDP/uploads/media/68f0f29be799f/retro-vibes-hero.webp?originalExtension=jpg`
const ARCO_IMG   = `${BASE}/EfxDuLs9/uploads/media/68f5fa5565081/retro-vibes-afbeelding-bij-tekst1.webp?originalExtension=jpg`
const GEO_IMG    = `${BASE}/L96ozio6/uploads/media/68f5f767c2a9d/retro-vibes-afbeelding-bij-tekst2.webp?originalExtension=jpg`
const WIDE_IMG   = `${BASE}/mclf5QDJ/uploads/media/68f5f47e56944/retro-vibes-hero2.webp?originalExtension=jpg`
const STYLE_IMG  = `${BASE}/axybTSMl/uploads/media/6914871f81a84/hoe-maak-ik-deze-stijl.webp?originalExtension=jpg`

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose for this kitchen?',
    a: 'You are free to choose from all lacquer colours. This allows our dealers to create a kitchen design that is truly personal.'
  }
]

export default function KellerRetroVibes() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="krv-page"
    >
      {/* ── HERO ── */}
      <section className="krv-hero">
        <img src={HERO_IMG} alt="Retro Vibes kitchen" className="krv-hero__img" loading="eager" />
        <div className="krv-hero__overlay">
          <div className="krv-container">
            <nav className="krv-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/classic-kitchens">Classic Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="krv-breadcrumbs__current">Retro Vibes</span>
            </nav>
            <p className="krv-hero__subtitle">Retro &amp; vintage</p>
            <h1 className="krv-hero__title">Retro Vibes</h1>
          </div>
        </div>
      </section>




      {/* ── INTRO TEXT ── */}
      <section className="krv-section krv-section--intro">
        <div className="krv-container krv-container--narrow">
          <h2 className="krv-intro__title">New Seventies interior trend</h2>
          <p className="krv-intro__body krv-intro__body--lead">
            Retro is back, and how!
          </p>
          <p className="krv-intro__body u-mt-3">
            The <strong>Retro Revival</strong> trend breathes nostalgia, reimagined for today. Warm wood types, deep orange, brown and mustard tones, ribbed fabrics and fluted glass bring the character of the 1970s back to life.
          </p>
          <p className="krv-intro__body u-mt-3">
            Keller's new framed door, <em>Arco</em>, features a 55 mm frame with a softly rounded profile. This addition gives the kitchen an extra touch of retro character.
          </p>
        </div>
      </section>

      {/* ── SPLIT 1: Model Arco — text left (green) + photo right ── */}
      <section className="krv-split krv-split--green-dark">
        <div className="krv-split__panel">
          <div className="krv-split__inner">
            <h2 className="krv-split__title">Model Arco</h2>
            <p className="krv-split__label">In this kitchen:</p>
            <ul className="krv-split__list">
              <li>Framed door with rounded profile</li>
              <li>Wrapped finish</li>
              <li>19 mm thick</li>
              <li>55 mm frame</li>
              <li>Corner radius 65 mm</li>
            </ul>
          </div>
        </div>
        <div className="krv-split__photo">
          <img src={ARCO_IMG} alt="Model Arco framed door" loading="lazy" />
        </div>
      </section>

      {/* ── SPLIT 2: Clean & Geometric — photo left + text right (inverse) ── */}
      <section className="krv-split krv-split--olive krv-split--inverse">
        <div className="krv-split__panel">
          <div className="krv-split__inner">
            <h2 className="krv-split__title">Clean &amp; geometric</h2>
            <ul className="krv-split__list">
              <li>Warm wood types, geometric patterns and deep orange, brown and mustard tones</li>
              <li>A mix of vintage furniture with contemporary pieces</li>
              <li>Ribbed fabrics, graphic prints and smoked glass</li>
              <li>Reuse and upcycling as an aesthetic statement</li>
              <li>Nostalgia as a source of comfort and originality</li>
            </ul>
          </div>
        </div>
        <div className="krv-split__photo">
          <img src={GEO_IMG} alt="Clean geometric retro detail" loading="lazy" />
        </div>
      </section>

      {/* ── FULL-SCREEN IMAGE ── */}
      <section className="krv-section krv-section--fullscreen">
        <figure className="krv-fullscreen">
          <img src={WIDE_IMG} alt="Retro Vibes kitchen wide view" loading="lazy" />
        </figure>
      </section>

      {/* ── SPLIT 3: How to create this style — photo left + text right (inverse) ── */}
      <section className="krv-split krv-split--olive krv-split--inverse">
        <div className="krv-split__panel">
          <div className="krv-split__inner">
            <h2 className="krv-split__title">How do you create this style with the Keller range?</h2>
            <p className="krv-split__body">
              Combine warm wood-effect finishes such as Cognac Oak or Ithaca Savannah Oak with deep colours like mustard yellow or cacao from our colour programme.
            </p>
            <p className="krv-split__body">
              Add accents with ribbed textures, geometric fronts or fluted glass for that distinctive vintage touch. Finish the look with classic handles and a statement worktop. This way, you bring the nostalgia of then into the comfort of today.
            </p>
          </div>
        </div>
        <div className="krv-split__photo">
          <img src={STYLE_IMG} alt="Style inspiration details" loading="lazy" />
        </div>
      </section>

      {/* ── THIS IS ANOTHER WAY TO DO IT + FAQ ── */}
      <section className="krv-section krv-section--try-this">
        <div className="krv-container krv-container--narrow">
          <h2 className="krv-section__title">This is another way to do it</h2>
          <p className="krv-section__body">
            Prefer a different shade of green? Take a look at our melamine and lacquer colour collections.
          </p>
          <p className="krv-section__body u-mt-3">
            The kitchen designs shown on this website and in our kitchen brochure are intended as inspiration. All kitchens can be adapted to your wishes in terms of layout, model, colour, handle (rail) or handleless design, as well as many other options. Would you like to explore the possibilities? Visit one of our Keller dealers. They will be happy to create a personal design in this style, tailored to your home and budget.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="krv-section krv-section--faq">
        <div className="krv-container krv-container--content">
          <dl className="krv-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="krv-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="krv-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="krv-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="krv-faq__answer">
                    <p>{item.a}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="krv-cta-section">
        <div className="krv-container krv-container--narrow krv-container--centered">
          <h2 className="krv-cta__title">Curious to find out more?</h2>
          <p className="krv-cta__body">Would you like to see the materials of this kitchen in real life?</p>
          <Link to="/contact" className="krv-cta__btn">Find a dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        /* ── tokens ── */
        .krv-page {
          --white:       #ffffff;
          --green-dark:  #646154;
          --green-frame: #aaa28f;
          --olive:       #5a574a;
          --tan:         #a99e80;
          --charcoal:    #1d1d1f;
          --mid:         #424245;
          --border:      #dedede;
          --ff-serif:    var(--font-serif, Georgia, serif);
          --ff-sans:     var(--font-sans, system-ui, sans-serif);
          background: var(--white);
          color: var(--charcoal);
          overflow-x: hidden;
          font-family: var(--ff-sans);
        }

        .u-mt-3 { margin-top: 16px; }

        /* ── containers ── */
        .krv-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .krv-container--narrow   { max-width: 780px; }
        .krv-container--wide     { max-width: 100%; padding: 0; }
        .krv-container--content  { max-width: 1080px; }
        .krv-container--centered {
          text-align: center;
          display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .krv-container { padding: 0 20px; }
        }

        /* ── hero ── */
        .krv-hero {
          position: relative;
          height: 100vh;
          overflow: hidden;
          background: #111;
        }
        .krv-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          opacity: 0.82;
        }
        .krv-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.68) 0%,
            rgba(0,0,0,0.12) 50%,
            transparent 100%
          );
          display: flex; align-items: flex-end;
          padding-bottom: 68px;
        }
        .krv-hero__subtitle {
          font-family: var(--ff-serif);
          font-style: italic;
          font-size: clamp(18px, 2.4vw, 28px);
          font-weight: 300;
          color: rgba(255,255,255,0.9);
          margin: 0 0 10px;
        }
        .krv-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── breadcrumbs (overlaid on hero) ── */
        .krv-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          margin-bottom: 14px;
        }
        .krv-breadcrumbs a {
          color: rgba(255,255,255,0.75); text-decoration: none;
          transition: color 0.2s;
        }
        .krv-breadcrumbs a:hover { color: #fff; }
        .krv-breadcrumbs__current { color: #fff; font-weight: 700; }


        /* ── intro ── */
        .krv-section--intro {
          padding: 80px 0 72px;
          text-align: center;
        }
        .krv-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 24px; line-height: 1.2;
        }
        .krv-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid); margin: 0;
        }
        .krv-intro__body--lead {
          font-size: 20px; font-weight: 600; color: var(--charcoal);
        }

        /* ── split sections ── */
        .krv-split {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .krv-split {
            grid-template-columns: 5fr 7fr;
          }
          .krv-split--inverse {
            grid-template-columns: 7fr 5fr;
          }
          .krv-split--inverse .krv-split__panel {
            order: 2;
          }
          .krv-split--inverse .krv-split__photo {
            order: 1;
          }
        }

        /* panel backgrounds */
        .krv-split--green-dark .krv-split__panel { background: var(--green-frame); }
        .krv-split--olive .krv-split__panel      { background: var(--green-frame); }

        .krv-split__panel {
          display: flex; align-items: center;
          color: #fff;
        }
        .krv-split__inner {
          padding: 60px 48px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .krv-split__inner { padding: 72px 64px; } }
        @media (min-width: 1200px) { .krv-split__inner { padding: 88px 80px; } }

        .krv-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: #fff; margin: 0; line-height: 1.2;
        }
        .krv-split__body {
          font-size: 15px; line-height: 1.75;
          color: rgba(255,255,255,0.88); margin: 0;
        }
        .krv-split__label {
          font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: rgba(255,255,255,0.5); margin-top: 4px;
        }
        .krv-split__list {
          margin: 2px 0 0; padding-left: 20px;
          font-size: 15px; line-height: 1.9;
          color: rgba(255,255,255,0.88);
        }
        .krv-split__list li + li { margin-top: 4px; }

        /* split photo — 100vh on desktop */
        .krv-split__photo { overflow: hidden; min-height: 420px; }
        @media (min-width: 860px) {
          .krv-split__photo {
            min-height: unset;
            height: 100vh;
          }
        }
        .krv-split__photo img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; display: block;
        }

        /* ── full-screen image ── */
        .krv-section--fullscreen { padding: 0; }
        .krv-fullscreen {
          margin: 0; padding: 0;
          height: 100vh; overflow: hidden;
        }
        .krv-fullscreen img {
          display: block; width: 100%; height: 100%;
          object-fit: cover;
        }

        /* ── try this / inspiration text ── */
        .krv-section--try-this {
          padding: 80px 0 64px;
          text-align: center;
        }
        .krv-section__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 22px; line-height: 1.15;
        }
        .krv-section__body {
          font-size: 17px; line-height: 1.8; color: var(--mid); margin: 0;
        }

        /* ── FAQ ── */
        .krv-section--faq { padding: 0 0 80px; }
        .krv-faq__list { border-top: 1px solid var(--border); }
        .krv-faq__item { border-bottom: 1px solid var(--border); }
        .krv-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--charcoal); text-align: left; transition: color .2s;
        }
        .krv-faq__toggle:hover { color: var(--olive); }
        .krv-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--olive);
        }
        .krv-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--mid);
        }
        .krv-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .krv-cta-section {
          background: var(--tan);
          padding: 96px 0 112px;
        }
        .krv-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 18px; line-height: 1.1;
        }
        .krv-cta__body {
          font-size: 17px; line-height: 1.7;
          color: rgba(0,0,0,0.65); margin: 0 0 40px;
        }
        .krv-cta__btn {
          display: inline-block;
          font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: #fff;
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, transform .2s;
        }
        .krv-cta__btn:hover { background: var(--olive); transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .krv-hero { height: 55vh; min-height: 360px; }
          .krv-hero__overlay { padding-bottom: 40px; }
          .krv-section--intro { padding: 52px 0 44px; }
          .krv-section--try-this { padding: 52px 0 44px; }
          .krv-section--faq  { padding: 0 0 60px; }
          .krv-cta-section   { padding: 64px 0 72px; }
          .krv-split__inner  { padding: 48px 24px; }
          .krv-fullscreen    { height: 50vh; }
        }
      `}</style>
    </motion.div>
  )
}
