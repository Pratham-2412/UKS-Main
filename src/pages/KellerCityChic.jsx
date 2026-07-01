import UKS_KELLER_CITY_CHIC_1920_X_1090_HERO_CITYCHIC_WALNOOTKARAMEL from '../assets/uks-keller-city-chic/uks-keller-city-chic-1920-x-1090-hero-citychic-walnootkaramel.webp';
import UKS_KELLER_CITY_CHIC_615X718_CARROUSEL_CITYCHIC_WALNOOTKARAMEL from '../assets/uks-keller-city-chic/uks-keller-city-chic-615x718-carrousel-citychic-walnootkaramel.webp';
import UKS_KELLER_CITY_CHIC_1326_X_884_RASTER_CITYCHIC_WALNOOTKARAMEL from '../assets/uks-keller-city-chic/uks-keller-city-chic-1326-x-884-raster-citychic-walnootkaramel.webp';
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const HERO_IMG  = UKS_KELLER_CITY_CHIC_1920_X_1090_HERO_CITYCHIC_WALNOOTKARAMEL
const WIDE_IMG  = UKS_KELLER_CITY_CHIC_1920_X_1090_HERO_CITYCHIC_WALNOOTKARAMEL
const SPLIT_IMG = UKS_KELLER_CITY_CHIC_615X718_CARROUSEL_CITYCHIC_WALNOOTKARAMEL
const GRID_IMG  = UKS_KELLER_CITY_CHIC_1326_X_884_RASTER_CITYCHIC_WALNOOTKARAMEL

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: 'You can choose from our extensive range of melamine in various wood decors. For a more luxurious version, choose a veneer front in stain or a lacquer colour of your choice. The lacquered open cabinet is available in 2,050 lacquer colours, so there is always a shade that perfectly matches your interior. This also applies to the handle trim.'
  },
  {
    q: 'How do I maintain melamine?',
    a: 'Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth. After cleaning, always dry the kitchen elements with a soft cloth to prevent water from penetrating the seams which could lead to swelling.'
  },
  {
    q: 'How do I maintain a lacquered kitchen?',
    a: 'Lacquer is more sensitive than melamine, be careful in order to avoid scratches and dents. Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth. After cleaning, always dry the kitchen elements with a soft cloth to prevent water from penetrating the seams which could lead to swelling.'
  }
]

export default function KellerCityChic() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="kcc-page"
    >

      {/* ── HERO ── full-bleed, title bottom-left */}
      <section className="kcc-hero">
        <img
          src={HERO_IMG}
          alt="City Chic kitchen"
          className="kcc-hero__img"
          loading="eager"
        />
        <div className="kcc-hero__overlay">
          <div className="kcc-container">
            <nav className="kcc-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/modern-kitchens">Modern kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="kcc-breadcrumbs__current">City chic</span>
            </nav>
            <h1 className="kcc-hero__title">City chic</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="kcc-section kcc-section--intro">
        <div className="kcc-container kcc-container--narrow">
          <h2 className="kcc-intro__title">Modern kitchen with a warm touch</h2>
          <p className="kcc-intro__body">
            A beautiful combination of walnut caramel, cool marble and trendy matt black.
            The marble-look worktop covers the sides of the kitchen island for a luxurious look.
          </p>
        </div>
      </section>

      {/* ── WIDE LANDSCAPE IMAGE ── */}
      <section className="kcc-section kcc-section--img-wide">
        <div className="kcc-container kcc-container--wide">
          <figure className="kcc-figure kcc-figure--landscape">
            <img
              src={WIDE_IMG}
              alt="City Chic – full kitchen view"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* ── SPLIT: dark panel LEFT + portrait RIGHT ── */}
      <section className="kcc-split">
        <div className="kcc-split__panel">
          <div className="kcc-split__panel-inner">
            <h2 className="kcc-split__title">Wood look, marble &amp; matt black</h2>
            <p className="kcc-split__lead">This luxurious modern kitchen has a timeless appearance.</p>
            <p className="kcc-split__label">In this kitchen:</p>
            <ul className="kcc-split__list">
              <li>Warm oak fronts</li>
              <li>Sleek, modern water tap in black</li>
              <li>Black sink</li>
              <li>Black lacquered handles</li>
              <li>White marble (look) worktop</li>
              <li>Large open units in ultra matt carbon</li>
            </ul>
          </div>
        </div>
        <div className="kcc-split__photo">
          <img
            src={SPLIT_IMG}
            alt="City Chic – kitchen island detail"
            loading="lazy"
          />
        </div>
      </section>

      {/* ── RASTER / GRID IMAGE ── */}
      <section className="kcc-section kcc-section--img-wide kcc-section--top-gap">
        <div className="kcc-container kcc-container--wide">
          <figure className="kcc-figure kcc-figure--raster">
            <img
              src={GRID_IMG}
              alt="City Chic – overhead layout"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="kcc-section kcc-section--faq">
        <div className="kcc-container kcc-container--content">
          <h2 className="kcc-faq__heading">Why not try this?</h2>
          <p className="kcc-faq__intro">
            For an even more luxurious version, choose a lacquered front instead of melamine.
            By choosing a laminate top instead of composite, the price tag becomes a bit more friendly.
          </p>
          <p className="kcc-faq__intro kcc-faq__intro--spaced">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve
            as inspiration and can be adapted in terms of layout, model, colour, handle (trim)/handleless
            and many other options. More information about the possibilities? Visit one of our Keller dealers.
            They are happy to make a design in this style that suits your home and budget.
          </p>

          <dl className="kcc-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="kcc-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="kcc-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="kcc-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="kcc-faq__answer">
                    <p>{item.a}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — light grey background ── */}
      <section className="kcc-cta-section">
        <div className="kcc-container kcc-container--narrow kcc-container--centered">
          <h2 className="kcc-cta__title">Curious about our programme?</h2>
          <p className="kcc-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="kcc-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        /* ── tokens ── */
        .kcc-page {
          --white:     #ffffff;
          --offwhite:  #f5f5f3;
          --ltgray:    #e3e3e3;
          --charcoal:  #1d1d1f;
          --mid:       #424245;
          --light:     #86868b;
          --border:    #dedede;
          --dark-panel:#18191b;
          --ff-serif:  var(--font-serif, Georgia, serif);
          --ff-sans:   var(--font-sans, system-ui, sans-serif);
          background: var(--white);
          color: var(--charcoal);
          overflow-x: hidden;
          font-family: var(--ff-sans);
        }

        /* ── containers ── */
        .kcc-container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 48px;
        }
        .kcc-container--narrow  { max-width: 820px; }
        .kcc-container--wide    { max-width: 100%; padding: 0 32px; }
        .kcc-container--content { max-width: 1100px; }
        .kcc-container--centered {
          text-align: center;
          display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .kcc-container         { padding: 0 20px; }
          .kcc-container--wide   { padding: 0 16px; }
        }

        /* ── hero ── */
        .kcc-hero {
          position: relative;
          height: 68vh;
          min-height: 480px;
          max-height: 720px;
          overflow: hidden;
          background: #111;
        }
        .kcc-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          opacity: 0.80;
        }
        .kcc-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.70) 0%,
            rgba(0,0,0,0.15) 50%,
            transparent 100%
          );
          display: flex; align-items: flex-end;
          padding-bottom: 64px;
        }
        .kcc-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 12px; letter-spacing: 0.04em;
          color: rgba(255,255,255,0.55);
          margin-bottom: 16px;
        }
        .kcc-breadcrumbs a {
          color: rgba(255,255,255,0.80);
          text-decoration: none;
          transition: color 0.2s;
        }
        .kcc-breadcrumbs a:hover { color: #c9a97a; }
        .kcc-breadcrumbs__current { color: #c9a97a; }
        .kcc-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 76px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0;
          letter-spacing: -0.02em;
        }

        /* ── section wrappers ── */
        .kcc-section { width: 100%; background: var(--white); }
        .kcc-section--intro    { padding: 72px 0 64px; }
        .kcc-section--img-wide { padding: 0 0 6px; }
        .kcc-section--top-gap  { padding-top: 6px; }
        .kcc-section--faq      { padding: 80px 0 96px; }

        /* ── intro text ── */
        .kcc-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.5vw, 42px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 24px; line-height: 1.15;
        }
        .kcc-intro__body {
          font-size: 17px; line-height: 1.8;
          color: var(--mid); margin: 0;
        }

        /* ── figures (full image, no crop) ── */
        .kcc-figure          { margin: 0; padding: 0; }
        .kcc-figure img      { display: block; width: 100%; height: auto; }
        .kcc-figure--landscape { width: 100%; }
        .kcc-figure--raster    { width: 100%; }

        /* ── split section ── */
        .kcc-split {
          display: grid;
          grid-template-columns: 1fr;
          background: var(--white);
        }
        @media (min-width: 860px) {
          .kcc-split {
            grid-template-columns: 5fr 7fr;
            min-height: 600px;
          }
        }
        @media (min-width: 1200px) { .kcc-split { min-height: 680px; } }

        /* very dark charcoal panel */
        .kcc-split__panel {
          background: var(--dark-panel);
          display: flex; align-items: center;
        }
        .kcc-split__panel-inner {
          padding: 56px 48px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .kcc-split__panel-inner { padding: 72px 64px; } }
        @media (min-width: 1200px) { .kcc-split__panel-inner { padding: 88px 80px; } }

        .kcc-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: #fff;
          margin: 0; line-height: 1.2;
        }
        .kcc-split__lead {
          font-size: 16px; line-height: 1.75;
          color: rgba(255,255,255,0.82); margin: 0;
        }
        .kcc-split__label {
          font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: rgba(255,255,255,0.45);
          margin-top: 6px;
        }
        .kcc-split__list {
          margin: 2px 0 0; padding-left: 18px;
          font-size: 15px; line-height: 1.9;
          color: rgba(255,255,255,0.88);
        }
        .kcc-split__list li + li { margin-top: 3px; }

        /* portrait photo */
        .kcc-split__photo {
          overflow: hidden;
          min-height: 420px;
        }
        @media (min-width: 860px) { .kcc-split__photo { min-height: unset; } }
        .kcc-split__photo img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          display: block;
        }

        /* ── FAQ ── */
        .kcc-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(24px, 3vw, 38px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 24px;
        }
        .kcc-faq__intro {
          font-size: 16px; line-height: 1.8;
          color: var(--mid); margin: 0;
        }
        .kcc-faq__intro--spaced { margin-top: 14px; }

        .kcc-faq__list       { margin-top: 48px; border-top: 1px solid var(--border); }
        .kcc-faq__item       { border-bottom: 1px solid var(--border); }
        .kcc-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--charcoal); text-align: left;
          transition: color 0.2s;
        }
        .kcc-faq__toggle:hover { color: var(--dark-panel); }
        .kcc-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: #18191b;
        }
        .kcc-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--mid);
        }
        .kcc-faq__answer p { margin: 0; }

        /* ── CTA — light grey ── */
        .kcc-cta-section {
          background: var(--ltgray);
          padding: 96px 0 112px;
        }
        .kcc-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 18px; line-height: 1.1;
        }
        .kcc-cta__body {
          font-size: 17px; line-height: 1.7;
          color: var(--mid); margin: 0 0 40px;
        }
        .kcc-cta__btn {
          display: inline-block;
          font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: #fff;
          padding: 16px 42px; border-radius: 3px;
          text-decoration: none;
          transition: background 0.25s, transform 0.2s;
        }
        .kcc-cta__btn:hover {
          background: #18191b; transform: translateY(-2px);
        }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .kcc-hero         { height: 55vh; min-height: 360px; }
          .kcc-hero__overlay { padding-bottom: 40px; }
          .kcc-section--intro { padding: 48px 0 40px; }
          .kcc-section--faq   { padding: 56px 0 64px; }
          .kcc-cta-section    { padding: 64px 0 72px; }
          .kcc-split__panel-inner { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
