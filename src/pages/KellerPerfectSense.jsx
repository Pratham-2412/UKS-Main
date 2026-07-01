import UKS_KELLER_PERFECT_SENSE_1920_X_1090_HERO_PERFECTSENSE from '../assets/uks-keller-perfect-sense/uks-keller-perfect-sense-1920-x-1090-hero-perfectsense.webp';
import UKS_KELLER_PERFECT_SENSE_615X718_CARROUSEL_PFSENSE from '../assets/uks-keller-perfect-sense/uks-keller-perfect-sense-615x718-carrousel-pfsense.webp';
import UKS_KELLER_PERFECT_SENSE_2022_COLLAGE_PERFECT_SENSE from '../assets/uks-keller-perfect-sense/uks-keller-perfect-sense-2022-collage-perfect-sense.webp';
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


// Images
const HERO_IMG      = UKS_KELLER_PERFECT_SENSE_1920_X_1090_HERO_PERFECTSENSE
const WIDE1_IMG     = UKS_KELLER_PERFECT_SENSE_1920_X_1090_HERO_PERFECTSENSE
const SPLIT_IMG     = UKS_KELLER_PERFECT_SENSE_615X718_CARROUSEL_PFSENSE
const WIDE2_IMG     = UKS_KELLER_PERFECT_SENSE_2022_COLLAGE_PERFECT_SENSE

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: 'Keller offers Fenix® fronts in black and white. Prefer an ultra matt kitchen in a different colour? Then choose one of the six beautiful, stylish colors in ultra matt melamine.'
  },
  {
    q: 'How do I maintain Fenix®?',
    a: 'Do not allow stains to dry on ultra matt. Remove stains immediately with plenty of water and, if necessary, a mild all-purpose cleaner or green soap dissolved in water. After cleaning, rinse the soap residue with lukewarm water. Be sure to use a clean cloth, as sand or dust can cause scratches. Do not use microfibre cloths or miracle sponges; they may contain small abrasive particles. Wipe the cleaned doors immediately afterwards with a soft cloth for a streak-free result and to prevent water from penetrating the seams which could lead to swelling.'
  }
]

export default function KellerPerfectSense() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="kps-page"
    >
      {/* ── HERO ── */}
      <section className="kps-hero">
        <img src={HERO_IMG} alt="Perfect Sense kitchen" className="kps-hero__img" loading="eager" />
        <div className="kps-hero__overlay">
          <div className="kps-container">
            <nav className="kps-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/modern-kitchens">Modern kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="kps-breadcrumbs__current">Perfect Sense</span>
            </nav>
            <h1 className="kps-hero__title">Perfect Sense</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="kps-section kps-section--intro">
        <div className="kps-container kps-container--narrow">
          <h2 className="kps-intro__title">Modern black and white in Japandi style</h2>
          <p className="kps-intro__body">
            Do you want to take your interior to the next level? Discover this breathtaking kitchen in Japandi style with sleek Fenix® fronts!
          </p>
          <p className="kps-intro__body u-mt-3">
            The Japandi style combines minimalist aesthetics from Japan with Scandinavian design. With the combination of these styles, we create a harmonious kitchen design and a soothing ambiance that provides a perfect setting for relaxing moments and cozy gatherings. In this kitchen you can enjoy a cup of tea in the morning or effortlessly prepare a delicious dinner for friends or family.
          </p>
        </div>
      </section>

      {/* ── WIDE LANDSCAPE IMAGE 1 — full bleed ── */}
      <section className="kps-section kps-section--img-wide">
        <div className="kps-container kps-container--wide">
          <figure className="kps-figure">
            <img src={WIDE1_IMG} alt="Perfect Sense space overview" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── SPLIT: Text panel left + 100vh photo right ── */}
      <section className="kps-split">
        <div className="kps-split__panel">
          <div className="kps-split__inner">
            <h2 className="kps-split__title">Bring harmony and style to your kitchen</h2>
            <p className="kps-split__body">
              With Fenix® material you not only get a stylish design, but also a sustainable, scratch-resistant and maintenance-friendly solution for your kitchen.
            </p>
            <p className="kps-split__body">
              Thanks to a special (nano) technology, this material is extremely matt, has a soft feel with the surprising bonus of being anti-fingerprint. In addition, micro-scratches on the surface are thermally repairable.
            </p>
            <p className="kps-split__label">In this kitchen:</p>
            <ul className="kps-split__list">
              <li>Fenix® fronts - model Sense</li>
              <li>Tall units in one piece</li>
              <li>Composite top with special edge finish</li>
              <li>Handle trim lighting</li>
            </ul>
          </div>
        </div>
        <div className="kps-split__photo">
          <img src={SPLIT_IMG} alt="Perfect Sense detail view" loading="lazy" />
        </div>
      </section>

      {/* ── WIDE COLLAGE IMAGE 2 — full bleed ── */}
      <section className="kps-section kps-section--img-wide">
        <div className="kps-container kps-container--wide">
          <figure className="kps-figure">
            <img src={WIDE2_IMG} alt="Perfect Sense moodboard collage" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS ── */}
      <section className="kps-section kps-section--try-this">
        <div className="kps-container kps-container--narrow">
          <h2 className="kps-section__title">Why not try this?</h2>
          <p className="kps-section__body">
            By opting for ultra matt melamine and a laminate top, the price tag becomes a bit more friendly.
          </p>
          <p className="kps-section__body u-mt-3">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration and can be adapted in terms of layout, model, colour, handle (trim)/handleless and many other options. More information about the possibilities? Visit one of our Keller dealers. They are happy to make a design in this style that suits your home and budget.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="kps-section kps-section--faq">
        <div className="kps-container kps-container--content">
          <dl className="kps-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="kps-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="kps-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="kps-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="kps-faq__answer">
                    <p>{item.a}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — sandy brown/warm grey bg ── */}
      <section className="kps-cta-section">
        <div className="kps-container kps-container--narrow kps-container--centered">
          <h2 className="kps-cta__title">Curious about our programme?</h2>
          <p className="kps-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="kps-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        /* ── tokens ── */
        .kps-page {
          --white:      #ffffff;
          --slate-dark: #33373e;
          --warm-grey:  #d0c8bd;
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
        .kps-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .kps-container--narrow   { max-width: 780px; }
        .kps-container--wide     { max-width: 100%; padding: 0; }
        .kps-container--content  { max-width: 1080px; }
        .kps-container--centered {
          text-align: center;
          display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .kps-container       { padding: 0 20px; }
        }

        /* ── hero ── */
        .kps-hero {
          position: relative;
          height: 100vh;
          overflow: hidden;
          background: #111;
        }
        .kps-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          opacity: 0.8;
        }
        .kps-hero__overlay {
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
        .kps-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 12px; letter-spacing: 0.04em;
          color: rgba(255,255,255,0.55);
          margin-bottom: 16px;
        }
        .kps-breadcrumbs a {
          color: rgba(255,255,255,0.8); text-decoration: none;
          transition: color 0.2s;
        }
        .kps-breadcrumbs a:hover { color: #f5f5f7; }
        .kps-breadcrumbs__current { color: rgba(255,255,255,0.9); }
        .kps-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 76px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── intro ── */
        .kps-section--intro {
          padding: 72px 0 68px;
        }
        .kps-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 22px; line-height: 1.15;
        }
        .kps-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid); margin: 0;
        }

        /* ── split section ── */
        .kps-split {
          display: grid;
          grid-template-columns: 1fr;
          margin-bottom: 64px;
        }
        @media (min-width: 860px) {
          .kps-split {
            grid-template-columns: 5fr 7fr;
          }
        }
        .kps-split__panel {
          background: var(--slate-dark);
          display: flex; align-items: center;
          color: #fff;
        }
        .kps-split__inner {
          padding: 60px 48px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .kps-split__inner { padding: 72px 64px; } }
        @media (min-width: 1200px) { .kps-split__inner { padding: 88px 80px; } }

        .kps-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: #fff; margin: 0; line-height: 1.2;
        }
        .kps-split__body {
          font-size: 15px; line-height: 1.75;
          color: rgba(255,255,255,0.85); margin: 0;
        }
        
        .kps-split__label {
          font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: rgba(255,255,255,0.45); margin-top: 6px;
        }
        .kps-split__list {
          margin: 2px 0 0; padding-left: 18px;
          font-size: 15px; line-height: 1.9;
          color: rgba(255,255,255,0.88);
        }
        .kps-split__list li + li { margin-top: 3px; }

        /* split photo 100vh on widescreen */
        .kps-split__photo { overflow: hidden; min-height: 420px; }
        @media (min-width: 860px) {
          .kps-split__photo {
            min-height: unset;
            height: 100vh;
          }
        }
        .kps-split__photo img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; display: block;
        }

        /* ── figures ── */
        .kps-section--img-wide { padding: 64px 0; }
        .kps-figure { margin: 0; padding: 0; overflow: hidden; }
        .kps-figure img { display: block; width: 100%; height: auto; }

        /* ── why not try this ── */
        .kps-section--try-this { padding: 72px 0 64px; }
        .kps-section__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 22px; line-height: 1.15;
        }
        .kps-section__body {
          font-size: 17px; line-height: 1.8; color: var(--mid); margin: 0;
        }

        /* ── FAQ ── */
        .kps-section--faq { padding: 0 0 80px; }
        .kps-faq__list { border-top: 1px solid var(--border); }
        .kps-faq__item { border-bottom: 1px solid var(--border); }
        .kps-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--charcoal); text-align: left; transition: color .2s;
        }
        .kps-faq__toggle:hover { color: var(--slate-dark); }
        .kps-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--slate-dark);
        }
        .kps-faq__answer { margin: 0; padding: 0 0 24px; font-size: 15px; line-height: 1.8; color: var(--mid); }
        .kps-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .kps-cta-section {
          background: var(--warm-grey);
          padding: 96px 0 112px;
        }
        .kps-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 18px; line-height: 1.1;
        }
        .kps-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--mid); margin: 0 0 40px;
        }
        .kps-cta__btn {
          display: inline-block;
          font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: #fff;
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, transform .2s;
        }
        .kps-cta__btn:hover { background: var(--slate-dark); transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .kps-hero          { height: 55vh; min-height: 360px; }
          .kps-hero__overlay { padding-bottom: 40px; }
          .kps-intro         { padding: 48px 0 40px; }
          .kps-section--faq  { padding: 0 0 60px; }
          .kps-cta-section   { padding: 64px 0 72px; }
          .kps-split__inner  { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
