import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Local imports from uks-tuscan-villa assets folder
import UKS_TUSCAN_VILLA_HERO from '../assets/uks-tuscan-villa/uks-tuscan-villa-hero.webp';
import UKS_TUSCAN_VILLA_WIDE1 from '../assets/uks-tuscan-villa/uks-tuscan-villa-wide1.webp';
import UKS_TUSCAN_VILLA_SPLIT from '../assets/uks-tuscan-villa/uks-tuscan-villa-split.webp';
import UKS_TUSCAN_VILLA_WIDE2 from '../assets/uks-tuscan-villa/uks-tuscan-villa-wide2.webp';

const FAQ_DATA = [
  {
    q: 'Why not try this?',
    a: 'For an even more luxurious version, choose a lacquered front instead of melamine. By choosing a laminate top instead of composite, the price tag becomes a bit more friendly. The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration and can be adapted in terms of layout, model, colour, handle (frame)/handleless and many other options. More information about the possibilities? Visit one of our Keller dealers. They are happy to make a design in this style that suits your home and budget.'
  },
  {
    q: 'How do I maintain melamine?',
    a: 'Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth. After cleaning, always dry the kitchen elements with a soft cloth to prevent water from penetrating the seams which could lead to swelling.'
  }
]

export default function KellerTuscanVilla() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="ktv-page"
    >
      {/* ── HERO ── */}
      <section className="ktv-hero">
        <img src={UKS_TUSCAN_VILLA_HERO} alt="Tuscan Villa kitchen" className="ktv-hero__img" loading="eager" />
        <div className="ktv-hero__overlay">
          <div className="ktv-container">
            <nav className="ktv-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/classic-kitchens">Classic Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="ktv-breadcrumbs__current">Tuscan Villa</span>
            </nav>
            <p className="ktv-hero__subtitle">With a southern charm</p>
            <h1 className="ktv-hero__title">Tuscan Villa</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="ktv-section ktv-section--intro">
        <div className="ktv-container ktv-container--narrow">
          <h2 className="ktv-intro__title">With a southern charm</h2>
          <p className="ktv-intro__body">
            In the Tuscan Villa we see warm colours that provide a Mediterranean touch. The warm hues in the worktop,
            kitchen fronts and accessories create a really attractive setting in this kitchen.
          </p>
          <p className="ktv-intro__body ktv-mt">
            In this kitchen we combined the island in the new colour sesame with a unit wall in cognac oak, one of our
            matte melamines. The bronze handles match the water tap and sink perfectly. The Roma Imperiale top in
            polished ceramic is really stunning and brings together all the tones in the kitchen. A special element is
            the dining table that is integrated into the island.
          </p>
        </div>
      </section>

      {/* ── WIDE IMAGE 1 (Window Size - slightly small) ── */}
      <section className="ktv-section ktv-section--img-wide no-pt">
        <div className="ktv-container ktv-container--wide">
          <figure className="ktv-figure">
            <img src={UKS_TUSCAN_VILLA_WIDE1} alt="Tuscan Villa layout view" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── SPLIT: Text panel left + photo right ── */}
      <section className="ktv-split">
        <div className="ktv-split__panel">
          <div className="ktv-split__inner">
            <h2 className="ktv-split__title">Beautiful, warm tones</h2>
            
            <p className="ktv-split__label">In this kitchen:</p>
            <ul className="ktv-split__list">
              <li>Melamine sesame, model Elba</li>
              <li>Cognac oak, model Bronx</li>
              <li>Handle trims in bronze</li>
            </ul>

            <p className="ktv-split__label">Eyecatchers:</p>
            <ul className="ktv-split__list">
              <li>Semi-tall units with appliances</li>
              <li>Table integrated into kitchen island</li>
              <li>The beautiful worktop and bronze handles, sink and water tap</li>
            </ul>
          </div>
        </div>
        <div className="ktv-split__photo">
          <img src={UKS_TUSCAN_VILLA_SPLIT} alt="Tuscan Villa detailing and table integration" loading="lazy" />
        </div>
      </section>

      {/* ── WIDE IMAGE 2 (Window Size - slightly small) ── */}
      <section className="ktv-section ktv-section--img-wide">
        <div className="ktv-container ktv-container--wide">
          <figure className="ktv-figure">
            <img src={UKS_TUSCAN_VILLA_WIDE2} alt="Tuscan Villa kitchen collage" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ (Warm sandstone/taupe bg) ── */}
      <section className="ktv-section ktv-section--faq">
        <div className="ktv-container ktv-container--content">
          <h2 className="ktv-faq__heading">It can be done this way too</h2>
          <p className="ktv-faq__intro">
            If you want to opt for a more luxurious version of this kitchen, you can choose stained veneer and lacquer
            instead of melamine.
          </p>
          <p className="ktv-faq__intro ktv-mt">
            The kitchen layouts you find on this website and in our kitchen brochure are meant to inspire and can be
            adjusted in terms of layout, model, color, handle/list/handleless, and many other options. Want more
            information about the possibilities? Visit one of our{' '}
            <Link to="/contact" className="ktv-link-faq">Keller dealers</Link>. They would be happy to create a design
            in this style that fits your home and budget.
          </p>

          <dl className="ktv-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="ktv-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="ktv-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="ktv-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="ktv-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — White bg, dark text ── */}
      <section className="ktv-cta-section">
        <div className="ktv-container ktv-container--narrow ktv-container--centered">
          <h2 className="ktv-cta__title">Curious about our programme?</h2>
          <p className="ktv-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="ktv-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .ktv-page {
          --white:      #ffffff;
          --light-bg:   #ffffff;
          --taupe-bg:   #928d87;
          --charcoal:   #1d1d1f;
          --mid-grey:   #424245;
          --text-white: #ffffff;
          --text-muted: rgba(255, 255, 255, 0.75);
          --border-white: rgba(255, 255, 255, 0.15);
          --ff-serif:   var(--font-serif, Georgia, serif);
          --ff-sans:    var(--font-sans, system-ui, sans-serif);
          background: var(--light-bg);
          color: var(--charcoal);
          overflow-x: hidden;
          font-family: var(--ff-sans);
        }
        .ktv-mt { margin-top: 16px; }

        /* ── containers ── */
        .ktv-container {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
        }
        .ktv-container--narrow  { max-width: 780px; }
        .ktv-container--content { max-width: 1080px; }
        .ktv-container--wide    { max-width: 1326px; margin: 0 auto; padding: 0 40px; }
        .ktv-container--centered {
          text-align: center; display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .ktv-container { padding: 0 20px; }
          .ktv-container--wide { padding: 0 20px; }
        }

        /* ── hero ── */
        .ktv-hero {
          position: relative; height: 100vh; overflow: hidden; background: #111;
        }
        .ktv-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; opacity: 0.85;
        }
        .ktv-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 50%, transparent 100%);
          display: flex; align-items: flex-end; padding-bottom: 68px;
        }

        /* breadcrumbs */
        .ktv-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 14px;
        }
        .ktv-breadcrumbs a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color .2s; }
        .ktv-breadcrumbs a:hover { color: #fff; }
        .ktv-breadcrumbs__current { color: #fff; font-weight: 700; }

        .ktv-hero__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(18px, 2.4vw, 28px); font-weight: 300;
          color: rgba(255,255,255,0.9); margin: 0 0 10px;
        }
        .ktv-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── general sections ── */
        .ktv-section {
          padding: 80px 0;
        }
        .ktv-section.no-pt { padding-top: 0; }
        
        .ktv-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 24px; line-height: 1.2;
          text-align: center;
        }
        .ktv-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid-grey); margin: 0;
          text-align: center;
        }

        /* ── split section ── */
        .ktv-split {
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .ktv-split { grid-template-columns: 5fr 7fr; }
        }
        .ktv-split__panel {
          display: flex; align-items: center; background: var(--taupe-bg); color: var(--text-white);
        }
        .ktv-split__inner {
          padding: 60px 48px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .ktv-split__inner { padding: 72px 64px; } }
        @media (min-width: 1200px) { .ktv-split__inner { padding: 88px 80px; } }

        .ktv-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: var(--text-white); margin: 0; line-height: 1.25;
        }
        .ktv-split__body {
          font-size: 15px; line-height: 1.75; color: var(--text-muted); margin: 0;
        }
        .ktv-split__label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: rgba(255,255,255,0.6); margin-top: 4px;
        }
        .ktv-split__list {
          list-style: none;
          padding-left: 0;
          margin: 8px 0 0;
          font-size: 15px;
          line-height: 1.8;
          color: var(--text-white);
        }
        .ktv-split__list li {
          position: relative;
          padding-left: 22px;
        }
        .ktv-split__list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--text-white);
          font-weight: 700;
        }
        .ktv-split__list li + li { margin-top: 6px; }

        .ktv-split__photo { overflow: hidden; min-height: 420px; }
        @media (min-width: 860px) {
          .ktv-split__photo { min-height: unset; height: 100vh; }
        }
        .ktv-split__photo img {
          width: 100%; height: 100%; object-fit: cover; object-position: center; display: block;
        }

        /* ── wide image ── */
        .ktv-section--img-wide { padding: 40px 0; background: var(--light-bg); }
        .ktv-figure { margin: 0; overflow: hidden; border-radius: 0; }
        .ktv-figure img { display: block; width: 100%; height: auto; }

        /* ── FAQ ── */
        .ktv-section--faq {
          padding: 80px 0 72px; background: var(--taupe-bg); color: var(--text-white);
        }
        .ktv-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--text-white); margin: 0 0 20px; line-height: 1.15;
        }
        .ktv-faq__intro {
          font-size: 17px; line-height: 1.8; color: var(--text-muted); margin: 0;
        }
        .ktv-link-faq { color: var(--text-white); text-decoration: underline; font-weight: 600; }
        .ktv-link-faq:hover { color: rgba(255,255,255,0.7); }

        .ktv-faq__list { border-top: 1px solid var(--border-white); margin-top: 40px; }
        .ktv-faq__item { border-bottom: 1px solid var(--border-white); }
        .ktv-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--text-white); text-align: left; transition: color .2s;
        }
        .ktv-faq__toggle:hover { color: var(--text-muted); }
        .ktv-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--text-white);
        }
        .ktv-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--text-muted);
        }
        .ktv-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .ktv-cta-section {
          background: var(--white); padding: 96px 0 112px; text-align: center; color: var(--charcoal);
        }
        .ktv-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 18px; line-height: 1.1;
        }
        .ktv-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--mid-grey); margin: 0 0 40px;
        }
        .ktv-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: var(--white);
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, color .25s, transform .2s;
        }
        .ktv-cta__btn:hover { background: #000000; transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .ktv-hero          { height: 55vh; min-height: 360px; }
          .ktv-hero__overlay { padding-bottom: 40px; }
          .ktv-section--intro { padding: 52px 0 44px; }
          .ktv-section--faq   { padding: 52px 0 52px; }
          .ktv-cta-section    { padding: 64px 0 72px; }
          .ktv-split__inner   { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
