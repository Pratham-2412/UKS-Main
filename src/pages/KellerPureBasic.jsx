import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const BASE = 'https://www.kellerkitchens.com/media/cache/generic/rc'

// Images
const HERO_IMG     = `${BASE}/ER0ewnd3/uploads/media/630c82c26d026/1920-x-1090-hero-purebasic.webp?originalExtension=jpg`
const WIDE1_IMG    = `${BASE}/2eDwzNlG/uploads/media/630c82c26d026/1920-x-1090-hero-purebasic.webp?originalExtension=jpg`
const SPLIT_IMG    = `${BASE}/FFJDbIhr/uploads/media/630c83f38a9f7/960-x-1024-purebasic.webp?originalExtension=jpg`
const WIDE2_IMG    = `${BASE}/zed5tJUC/uploads/media/630c89a5e6bab/1326-x-884-raster-purebasic.webp?originalExtension=jpg`

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: 'To really give your kitchen a "personal touch", you can choose from 2,050 colors in matt, textured, silk gloss and high gloss lacquer. Our handle trims are also available in 2,050 colours.'
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

export default function KellerPureBasic() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="kpb-page"
    >
      {/* ── HERO ── */}
      <section className="kpb-hero">
        <img src={HERO_IMG} alt="Pure Basic kitchen" className="kpb-hero__img" loading="eager" />
        <div className="kpb-hero__overlay">
          <div className="kpb-container">
            <nav className="kpb-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/modern-kitchens">Modern kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="kpb-breadcrumbs__current">Pure Basic</span>
            </nav>
            <h1 className="kpb-hero__title">Pure Basic</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="kpb-section kpb-section--intro">
        <div className="kpb-container kpb-container--narrow">
          <h2 className="kpb-intro__title">The Scandinavian touch</h2>
          <p className="kpb-intro__body">
            The <strong>Scandinavian interior trend</strong> is more popular than ever: light colours, natural materials, and a minimalist design. The <strong>Pure Basic</strong> translates this style into a timeless design that radiates calm and space. With subtle details and modern finishes, you create a kitchen that perfectly aligns with the latest interior trends.
          </p>
        </div>
      </section>

      {/* ── WIDE LANDSCAPE IMAGE 1 — full bleed ── */}
      <section className="kpb-section kpb-section--img-wide">
        <div className="kpb-container kpb-container--wide">
          <figure className="kpb-figure">
            <img src={WIDE1_IMG} alt="Pure Basic space view" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── SPLIT: Text panel left + 100vh photo right ── */}
      <section className="kpb-split">
        <div className="kpb-split__panel">
          <div className="kpb-split__inner">
            <h2 className="kpb-split__title">The Scandinavian interior style</h2>
            <p className="kpb-split__body">
              The white fronts are finished in silk gloss lacquer in the colour ice. The handle trims in stainless steel.
            </p>
            <p className="kpb-split__label">Which Scandinavian style suits you?</p>
            <ul className="kpb-split__list">
              <li><strong>Minimalist Scandinavian</strong> – Clean lines, neutral tones, and a calm interior</li>
              <li><strong>Modern Scandinavian</strong> – Warm wood accents, soft contrasts, and subtle details</li>
              <li><strong>Scandi-Boho</strong> – Natural textures, playful details, and a relaxed look</li>
            </ul>
            <p className="kpb-split__label">In this kitchen:</p>
            <ul className="kpb-split__list">
              <li>White matt lacquered fronts</li>
              <li>Handleless design with horizontal handle trims</li>
              <li>Handle trims in the same lacquer colour as the fronts</li>
            </ul>
          </div>
        </div>
        <div className="kpb-split__photo">
          <img src={SPLIT_IMG} alt="Pure Basic details" loading="lazy" />
        </div>
      </section>

      {/* ── WIDE LANDSCAPE IMAGE 2 — full bleed ── */}
      <section className="kpb-section kpb-section--img-wide">
        <div className="kpb-container kpb-container--wide">
          <figure className="kpb-figure">
            <img src={WIDE2_IMG} alt="Pure Basic layout overhead" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ (sandy beige bg) ── */}
      <section className="kpb-section kpb-section--faq">
        <div className="kpb-container kpb-container--content">
          <h2 className="kpb-faq__heading">Why not try this?</h2>
          <p className="kpb-faq__intro">
            You can save money by having the kitchen and worktop made of melamine. The handle trims can also be lacquered in white or any other colour to your taste.
          </p>
          <p className="kpb-faq__intro u-mt-3">
            The kitchens on this website and in our brochure are examples for inspiration. You can adjust the layout, model, colour, and handles (or opt for a handleless design). There are many more possibilities!
          </p>
          <p className="kpb-faq__intro u-mt-3">
            Would you like to know more? Visit a Keller dealer. They will be happy to help you design a kitchen in this style that suits your home and budget.
          </p>

          <dl className="kpb-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="kpb-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="kpb-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="kpb-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="kpb-faq__answer">
                    <p>{item.a}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — warm off-white bg ── */}
      <section className="kpb-cta-section">
        <div className="kpb-container kpb-container--narrow kpb-container--centered">
          <h2 className="kpb-cta__title">Curious about our programme?</h2>
          <p className="kpb-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="kpb-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        /* ── tokens ── */
        .kpb-page {
          --white:      #ffffff;
          --cognac:     #8e6e48;
          --sandy-beige: #ac9d87;
          --off-white:   #e6dfd5;
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

        .u-mt-3 { margin-top: 12px; }

        /* ── containers ── */
        .kpb-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .kpb-container--narrow   { max-width: 780px; }
        .kpb-container--wide     { max-width: 100%; padding: 0; }
        .kpb-container--content  { max-width: 1080px; }
        .kpb-container--centered {
          text-align: center;
          display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .kpb-container       { padding: 0 20px; }
        }

        /* ── hero ── */
        .kpb-hero {
          position: relative;
          height: 100vh;
          overflow: hidden;
          background: #111;
        }
        .kpb-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          opacity: 0.8;
        }
        .kpb-hero__overlay {
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
        .kpb-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 12px; letter-spacing: 0.04em;
          color: rgba(255,255,255,0.55);
          margin-bottom: 16px;
        }
        .kpb-breadcrumbs a {
          color: rgba(255,255,255,0.8); text-decoration: none;
          transition: color 0.2s;
        }
        .kpb-breadcrumbs a:hover { color: #f5f5f7; }
        .kpb-breadcrumbs__current { color: rgba(255,255,255,0.9); }
        .kpb-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 76px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── intro ── */
        .kpb-section--intro {
          padding: 72px 0 68px;
        }
        .kpb-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 22px; line-height: 1.15;
        }
        .kpb-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid); margin: 0;
        }

        /* ── split section ── */
        .kpb-split {
          display: grid;
          grid-template-columns: 1fr;
          margin-bottom: 64px;
        }
        @media (min-width: 860px) {
          .kpb-split {
            grid-template-columns: 5fr 7fr;
          }
        }
        .kpb-split__panel {
          background: var(--cognac);
          display: flex; align-items: center;
          color: #fff;
        }
        .kpb-split__inner {
          padding: 60px 48px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .kpb-split__inner { padding: 72px 64px; } }
        @media (min-width: 1200px) { .kpb-split__inner { padding: 88px 80px; } }

        .kpb-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: #fff; margin: 0; line-height: 1.2;
        }
        .kpb-split__body {
          font-size: 15px; line-height: 1.75;
          color: rgba(255,255,255,0.85); margin: 0;
        }
        
        .kpb-split__label {
          font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: rgba(255,255,255,0.45); margin-top: 6px;
        }
        .kpb-split__list {
          margin: 2px 0 0; padding-left: 18px;
          font-size: 15px; line-height: 1.9;
          color: rgba(255,255,255,0.88);
        }
        .kpb-split__list li + li { margin-top: 3px; }

        /* split photo 100vh on widescreen */
        .kpb-split__photo { overflow: hidden; min-height: 420px; }
        @media (min-width: 860px) {
          .kpb-split__photo {
            min-height: unset;
            height: 100vh;
          }
        }
        .kpb-split__photo img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; display: block;
        }

        /* ── figures ── */
        .kpb-section--img-wide { padding: 64px 0; }
        .kpb-figure { margin: 0; padding: 0; overflow: hidden; }
        .kpb-figure img { display: block; width: 100%; height: auto; }

        /* ── FAQ (sandy beige bg) ── */
        .kpb-section--faq {
          background: var(--sandy-beige);
          color: #fff;
          padding: 80px 0 96px;
        }
        .kpb-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px);
          font-weight: 300; color: #fff;
          margin: 0 0 24px;
        }
        .kpb-faq__intro {
          font-size: 16px; line-height: 1.8;
          color: rgba(255,255,255,0.9); margin: 0;
        }
        .kpb-faq__list {
          margin-top: 48px;
          border-top: 1px solid var(--border);
        }
        .kpb-faq__item {
          border-bottom: 1px solid var(--border);
        }
        .kpb-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: #fff; text-align: left;
        }
        .kpb-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: #fff;
        }
        .kpb-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8;
          color: rgba(255,255,255,0.85);
        }
        .kpb-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .kpb-cta-section {
          background: var(--off-white);
          padding: 96px 0 112px;
        }
        .kpb-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 18px; line-height: 1.1;
        }
        .kpb-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--mid); margin: 0 0 40px;
        }
        .kpb-cta__btn {
          display: inline-block;
          font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: #fff;
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, transform .2s;
        }
        .kpb-cta__btn:hover { background: var(--cognac); transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .kpb-hero          { height: 55vh; min-height: 360px; }
          .kpb-hero__overlay { padding-bottom: 40px; }
          .kpb-intro         { padding: 48px 0 40px; }
          .kpb-section--faq  { padding: 56px 0 64px; }
          .kpb-cta-section   { padding: 64px 0 72px; }
          .kpb-split__inner  { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
