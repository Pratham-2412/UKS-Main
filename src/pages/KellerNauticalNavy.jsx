import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const BASE = 'https://www.kellerkitchens.com/media/cache/generic/rc'

// Images
const HERO_IMG   = `${BASE}/dwWkswQ9/uploads/media/630c8fac00834/1920-x-1090-hero-nauticalnavy.webp?originalExtension=jpg`
const SPLIT_IMG  = `${BASE}/68DPdVBx/uploads/media/6311e89f9a8ba/960-x-1024-afbeelding-bij-tekst-nautical-navy.webp?originalExtension=jpg`
const WIDE_IMG   = `${BASE}/33wwGozg/uploads/media/6316f6bba6976/1326-x-884-raster-nautical-navy.webp?originalExtension=jpg`

// Videos
const VIDEO_LANDSCAPE = 'https://www.kellerkitchens.com/uploads/media/637cd396b577f/video-nauticalnavy-landscape.mp4'
const VIDEO_PORTRAIT  = 'https://www.kellerkitchens.com/uploads/media/637cd3a9b72b8/video-nauticalnavy-portrait.mp4'

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: 'The melamine in navy blue is also available in the colours sea salt, sage green and pecan brown. You can also choose all other (uni) colours in melamine. The Ribbonwood model is also available in pure oak and raven black. Our handless trims are available in 2,050 NCS lacquer colours and five metallic colours.'
  },
  {
    q: 'How do I maintain melamine?',
    a: 'Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth. After cleaning, always dry the kitchen elements with a soft cloth to prevent water from penetrating the seams which could lead to swelling.'
  },
  {
    q: 'How do I maintain veneer?',
    a: 'Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth or brush for cleaning. Swipe in the direction of the wood grain to remove dirt particles from the pores. Wipe the cleaned doors immediately afterwards with a soft cloth for a streak-free result and to prevent water from penetrating the seams which could lead to swelling.'
  }
]

export default function KellerNauticalNavy() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="knn-page"
    >
      {/* ── HERO ── */}
      <section className="knn-hero">
        <img src={HERO_IMG} alt="Nautical Navy kitchen" className="knn-hero__img" loading="eager" />
        <div className="knn-hero__overlay">
          <div className="knn-container">
            <nav className="knn-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/modern-kitchens">Modern kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="knn-breadcrumbs__current">Nautical Navy</span>
            </nav>
            <h1 className="knn-hero__title">Nautical Navy</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT — light grey bg ── */}
      <section className="knn-intro">
        <div className="knn-container knn-container--narrow">
          <h2 className="knn-intro__title">Modern with classic allure</h2>
          <p className="knn-intro__body">
            The island in navy blue and the high units wall in warm walnut veneer with a relief structure
            breathe the atmosphere of a marina. But of course they fit into any modern interior!
          </p>
        </div>
      </section>

      {/* ── FULL SCREEN VIDEO ── */}
      <section className="knn-video-section">
        <div className="knn-video-wrap">
          <video className="knn-video knn-video--landscape" muted autoPlay loop playsInline>
            <source src={VIDEO_LANDSCAPE} type="video/mp4" />
          </video>
          <video className="knn-video knn-video--portrait" muted autoPlay loop playsInline>
            <source src={VIDEO_PORTRAIT} type="video/mp4" />
          </video>
        </div>
      </section>

      {/* ── SPLIT: Text panel left + 100vh photo right ── */}
      <section className="knn-split">
        <div className="knn-split__panel">
          <div className="knn-split__inner">
            <h2 className="knn-split__title">Navy blue and warm walnut</h2>
            <p className="knn-split__body">
              Note the special design: The T-shape of the composite top is reflected in the open units in the rear wall.
              The beautiful, warm design makes this wall unit a real design piece of furniture.
              The wine cabinet made from kitchen units and four appliances give the kitchen a luxurious finishing touch.
            </p>
            <p className="knn-split__label">In this kitchen:</p>
            <ul className="knn-split__list">
              <li>Melamine fronts in chic navy blue</li>
              <li>Warm walnut veneer with relief structure combined with open units in NCS colour and matching handle strip</li>
              <li>Wine cabinet with tall door in smoked glass and LED lighting</li>
            </ul>
            <p className="knn-split__label">The materials:</p>
            <ul className="knn-split__list">
              <li>Veneer Front Ribbonwood in warm walnut</li>
              <li>Melamine front Elba in navy blue</li>
              <li>Handless trim and open units in NCS colour</li>
              <li>Glass cabinet in light smoked glass, TIP-ON with LED strip lighting</li>
            </ul>
          </div>
        </div>
        <div className="knn-split__photo">
          <img src={SPLIT_IMG} alt="Nautical Navy detail view" loading="lazy" />
        </div>
      </section>

      {/* ── WIDE LANDSCAPE IMAGE — full width ── */}
      <section className="knn-section knn-section--img-wide">
        <div className="knn-container knn-container--wide">
          <figure className="knn-figure">
            <img src={WIDE_IMG} alt="Nautical Navy kitchen layout overview" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS ── */}
      <section className="knn-section knn-section--try-this">
        <div className="knn-container knn-container--narrow">
          <h2 className="knn-section__title">Why not try this?</h2>
          <p className="knn-section__body">
            For an even more luxurious version, choose a lacquered front instead of melamine.
            By choosing a laminate top instead of composite, the price tag becomes a bit more friendly.
          </p>
          <p className="knn-section__body u-mt-4">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration
            and can be adapted in terms of layout, model, colour, handle (frame)/handleless and many other options.
            More information about the possibilities? Visit one of our Keller dealers. They are happy to make a design
            in this style that suits your home and budget.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="knn-section knn-section--faq">
        <div className="knn-container knn-container--content">
          <dl className="knn-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="knn-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="knn-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="knn-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="knn-faq__answer">
                    <p>{item.a}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — light grey ── */}
      <section className="knn-cta-section">
        <div className="knn-container knn-container--narrow knn-container--centered">
          <h2 className="knn-cta__title">Curious about our programme?</h2>
          <p className="knn-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="knn-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        /* ── tokens ── */
        .knn-page {
          --white:      #ffffff;
          --intro-bg:   #efefef;
          --panel-bg:   #2a2a2f;
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

        .u-mt-4 { margin-top: 16px; }

        /* ── containers ── */
        .knn-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .knn-container--narrow   { max-width: 780px; }
        .knn-container--wide     { max-width: 100%; padding: 0; }
        .knn-container--content  { max-width: 1080px; }
        .knn-container--centered {
          text-align: center;
          display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .knn-container       { padding: 0 20px; }
        }

        /* ── hero ── */
        .knn-hero {
          position: relative;
          height: 100vh;
          overflow: hidden;
          background: #111;
        }
        .knn-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          opacity: 0.8;
        }
        .knn-hero__overlay {
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
        .knn-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 12px; letter-spacing: 0.04em;
          color: rgba(255,255,255,0.55);
          margin-bottom: 16px;
        }
        .knn-breadcrumbs a {
          color: rgba(255,255,255,0.8); text-decoration: none;
          transition: color 0.2s;
        }
        .knn-breadcrumbs a:hover { color: #f5f5f7; }
        .knn-breadcrumbs__current { color: rgba(255,255,255,0.9); }
        .knn-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 76px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── intro (light grey bg) ── */
        .knn-intro {
          background: var(--intro-bg);
          padding: 72px 0 68px;
        }
        .knn-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 22px; line-height: 1.15;
        }
        .knn-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid); margin: 0;
        }

        /* ── video section ── */
        .knn-video-section {
          width: 100%;
          background: #000;
          overflow: hidden;
        }
        .knn-video-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
        }
        .knn-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .knn-video--portrait { display: none; }
        @media (max-width: 768px) {
          .knn-video-wrap { aspect-ratio: 9/16; }
          .knn-video--landscape { display: none; }
          .knn-video--portrait  { display: block; }
        }

        /* ── split section ── */
        .knn-split {
          display: grid;
          grid-template-columns: 1fr;
          margin-bottom: 64px;
        }
        @media (min-width: 860px) {
          .knn-split {
            grid-template-columns: 5fr 7fr;
          }
        }
        .knn-split__panel {
          background: var(--panel-bg);
          display: flex; align-items: center;
          color: #fff;
        }
        .knn-split__inner {
          padding: 60px 48px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .knn-split__inner { padding: 72px 64px; } }
        @media (min-width: 1200px) { .knn-split__inner { padding: 88px 80px; } }

        .knn-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: #fff; margin: 0; line-height: 1.2;
        }
        .knn-split__body {
          font-size: 15px; line-height: 1.75;
          color: rgba(255,255,255,0.85); margin: 0;
        }
        
        .knn-split__label {
          font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: rgba(255,255,255,0.45); margin-top: 6px;
        }
        .knn-split__list {
          margin: 2px 0 0; padding-left: 18px;
          font-size: 15px; line-height: 1.9;
          color: rgba(255,255,255,0.88);
        }
        .knn-split__list li + li { margin-top: 3px; }

        /* split photo 100vh on widescreen */
        .knn-split__photo { overflow: hidden; min-height: 420px; }
        @media (min-width: 860px) {
          .knn-split__photo {
            min-height: unset;
            height: 100vh;
          }
        }
        .knn-split__photo img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; display: block;
        }

        /* ── figures ── */
        .knn-section--img-wide { padding: 64px 0; }
        .knn-figure { margin: 0; padding: 0; overflow: hidden; }
        .knn-figure img { display: block; width: 100%; height: auto; }

        /* ── why not try this ── */
        .knn-section--try-this { padding: 72px 0 64px; }
        .knn-section__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 22px; line-height: 1.15;
        }
        .knn-section__body {
          font-size: 17px; line-height: 1.8; color: var(--mid); margin: 0;
        }

        /* ── FAQ ── */
        .knn-section--faq { padding: 0 0 80px; }
        .knn-faq__list { border-top: 1px solid var(--border); }
        .knn-faq__item { border-bottom: 1px solid var(--border); }
        .knn-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--charcoal); text-align: left; transition: color .2s;
        }
        .knn-faq__toggle:hover { color: var(--panel-bg); }
        .knn-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--panel-bg);
        }
        .knn-faq__answer { margin: 0; padding: 0 0 24px; font-size: 15px; line-height: 1.8; color: var(--mid); }
        .knn-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .knn-cta-section {
          background: var(--cta-bg);
          padding: 96px 0 112px;
        }
        .knn-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 18px; line-height: 1.1;
        }
        .knn-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--mid); margin: 0 0 40px;
        }
        .knn-cta__btn {
          display: inline-block;
          font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: #fff;
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, transform .2s;
        }
        .knn-cta__btn:hover { background: var(--panel-bg); transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .knn-hero          { height: 55vh; min-height: 360px; }
          .knn-hero__overlay { padding-bottom: 40px; }
          .knn-intro         { padding: 48px 0 40px; }
          .knn-section--faq  { padding: 0 0 60px; }
          .knn-cta-section   { padding: 64px 0 72px; }
          .knn-split__inner  { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
