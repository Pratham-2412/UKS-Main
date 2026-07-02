import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

// Local imports from uks-new-country assets folder
import UKS_NEW_COUNTRY_HERO from '../assets/uks-new-country/uks-new-country-hero.webp';
import UKS_NEW_COUNTRY_FULLSCREEN from '../assets/uks-new-country/uks-new-country-fullscreen.webp';
import UKS_NEW_COUNTRY_SPLIT from '../assets/uks-new-country/uks-new-country-split.webp';
import UKS_NEW_COUNTRY_CAROUSEL1 from '../assets/uks-new-country/uks-new-country-carousel1.webp';
import UKS_NEW_COUNTRY_CAROUSEL2 from '../assets/uks-new-country/uks-new-country-carousel2.webp';
import UKS_NEW_COUNTRY_CAROUSEL3 from '../assets/uks-new-country/uks-new-country-carousel3.webp';
import UKS_NEW_COUNTRY_WIDE from '../assets/uks-new-country/uks-new-country-wide.webp';

const CAROUSEL_SLIDES = [
  {
    title: 'Shelfs and LED lighting',
    image: UKS_NEW_COUNTRY_CAROUSEL1
  },
  {
    title: 'Integrated herb planter behind the worktop',
    image: UKS_NEW_COUNTRY_CAROUSEL2
  },
  {
    title: 'Ribbed veneer as an accent',
    image: UKS_NEW_COUNTRY_CAROUSEL3
  }
]

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: "You can also opt for a veneer front without a frame, flat or with a groove. You can also opt for shaker doors in melamine, which makes the kitchen less vulnerable to scratches and dents."
  },
  {
    q: 'How do I maintain a lacquered kitchen?',
    a: 'Lacquer is more sensitive than melamine, be careful in order to avoid scratches and dents. Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth. After cleaning, always dry the kitchen elements with a soft cloth to prevent water from penetrating the seams which could lead to swelling.'
  },
  {
    q: 'How do I maintain veneer?',
    a: 'Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth or brush for cleaning. Swipe in the direction of the wood grain to remove dirt particles from the pores. Wipe the cleaned doors immediately afterwards with a soft cloth for a streak-free result and to prevent water from penetrating the seams which could lead to swelling.'
  }
]

export default function KellerNewCountry() {
  const [openFaq, setOpenFaq] = useState(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length)
  }

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="knc-page"
    >
      {/* ── HERO ── */}
      <section className="knc-hero">
        <img src={UKS_NEW_COUNTRY_HERO} alt="New Country kitchen" className="knc-hero__img" loading="eager" />
        <div className="knc-hero__overlay">
          <div className="knc-container">
            <nav className="knc-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/country-kitchens">Country Style Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="knc-breadcrumbs__current">New Country</span>
            </nav>
            <p className="knc-hero__subtitle">Rustic with a contemporary twist</p>
            <h1 className="knc-hero__title">New Country</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="knc-section knc-section--intro">
        <div className="knc-container knc-container--narrow">
          <h2 className="knc-intro__title">Traditional country reinvented</h2>
          <p className="knc-intro__body">
            New Country celebrates the beauty of nature and embraces the charm of the countryside. Picture natural textures, fresh green, and inviting wooden elements that create a sense of tranquility and comfort. It's a style that effortlessly blends traditional aesthetics with contemporary design, resulting in a space that feels both timeless and welcoming.
          </p>
          <p className="knc-intro__body knc-mt">
            It's a sanctuary where you can savor the simple pleasures, whether it's sipping a cup of tea by the window, baking fresh bread, or gathering with loved ones around a farmhouse-style table.
          </p>
        </div>
      </section>

      {/* ── FULL SCREEN / WIDE HERO IMAGE ── */}
      <section className="knc-fullscreen">
        <img src={UKS_NEW_COUNTRY_FULLSCREEN} alt="New Country kitchen layout view" loading="lazy" />
      </section>

      {/* ── SPLIT: Text panel left + photo right (Sage background `#7d8574`) ── */}
      <section className="knc-split">
        <div className="knc-split__panel">
          <div className="knc-split__inner">
            <h2 className="knc-split__title">Sage green with pure oak as an accent</h2>
            <p className="knc-split__body">
              The traditional frame doors in sage green with T-knobs and handles in antique bronze create an atmosphere from the past. The appliances and luxurious drawers provide the convenience of today. The worktop in two finishes, the open unit in the island and the spice boxes in the worktop create special accents.
            </p>
            
            <p className="knc-split__label">In this kitchen :</p>
            <ul className="knc-split__list">
              <li>Veneer with relief in pure oak for a modern accent</li>
              <li>'Old-fashioned' cupboard with cooler and freezer</li>
              <li>Special accents in the island</li>
            </ul>

            <p className="knc-split__label">The materials :</p>
            <ul className="knc-split__list">
              <li>Wooden front Braham in structured lacquer sage green (NCS-colour S5010-G30Y)</li>
              <li>Veneer front Ribbonwood in pure oak</li>
              <li>Handle 712 in antique bronze</li>
              <li>T-handle 713 in antique bronze</li>
              <li>Glass doors in clear glass</li>
            </ul>
          </div>
        </div>
        <div className="knc-split__photo">
          <img src={UKS_NEW_COUNTRY_SPLIT} alt="Sage green cabinets detail view" loading="lazy" />
        </div>
      </section>

      {/* ── DETAILS CAROUSEL SECTION (Sage background `#7d8574`) ── */}
      <section className="knc-section-carousel">
        <div className="knc-container">
          <div className="knc-carousel-grid">
            <div className="knc-carousel-text">
              <h2 className="knc-carousel-title">The difference is in the details</h2>
              <p className="knc-carousel-body">
                In the New Country kitchen, refinement takes centre stage. The combination of warm wood tones, soft colours such as sand, greige and muted greens creates a calm, contemporary look. Think of framed cabinet doors with clean, subtle lines, a ceramic worktop with a natural texture, and handles in brushed metal. Lighting and accessories also play an important role, adding atmosphere and a personal touch. It is these carefully considered details that give your kitchen its character and ensure a style that continues to feel right for years to come.
              </p>
              
              <div className="knc-carousel-nav">
                <button onClick={handlePrev} className="knc-nav-btn" aria-label="Previous slide">
                  ←
                </button>
                <span className="knc-carousel-counter">
                  {activeSlide + 1} / {CAROUSEL_SLIDES.length}
                </span>
                <button onClick={handleNext} className="knc-nav-btn" aria-label="Next slide">
                  →
                </button>
              </div>
            </div>

            <div className="knc-carousel-media-wrapper">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="knc-carousel-slide"
                >
                  <h3 className="knc-slide-title">{CAROUSEL_SLIDES[activeSlide].title}</h3>
                  <div className="knc-slide-image-box">
                    <img
                      src={CAROUSEL_SLIDES[activeSlide].image}
                      alt={CAROUSEL_SLIDES[activeSlide].title}
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── WIDE IMAGE (Window Size - slightly small) ── */}
      <section className="knc-section knc-section--img-wide">
        <div className="knc-container knc-container--wide">
          <figure className="knc-figure">
            <img src={UKS_NEW_COUNTRY_WIDE} alt="New Country kitchen island view" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ (White bg, charcoal text) ── */}
      <section className="knc-section knc-section--faq">
        <div className="knc-container knc-container--content">
          <h2 className="knc-faq__heading">Why not try this?</h2>
          <p className="knc-faq__intro">
            Choose a melamine front in a wood look and laminate worktop for a budget-friendly option.
          </p>
          <p className="knc-faq__intro knc-mt">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration and can be adapted in terms of layout, model, colour, handle (trim)/handleless and many other options. More information about the possibilities? Visit one of our <Link to="/contact" className="knc-link-faq">Keller dealers</Link>. They are happy to make a design in this style that suits your home and budget.
          </p>

          <dl className="knc-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="knc-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="knc-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="knc-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="knc-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — Lavender/soft grey bg, dark text ── */}
      <section className="knc-cta-section">
        <div className="knc-container knc-container--narrow knc-container--centered">
          <h2 className="knc-cta__title">Curious about our programme?</h2>
          <p className="knc-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="knc-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .knc-page {
          --white:      #ffffff;
          --light-bg:   #ffffff;
          --sage-bg:    #7d8574;
          --frame-bg:   #a9b0a0;
          --cta-bg:     #d8d6db;
          --charcoal:   #1d1d1f;
          --mid-grey:   #424245;
          --text-white: #ffffff;
          --text-muted: rgba(255, 255, 255, 0.75);
          --border-white: rgba(255, 255, 255, 0.15);
          --border-dark: rgba(0, 0, 0, 0.12);
          --ff-serif:   var(--font-serif, Georgia, serif);
          --ff-sans:    var(--font-sans, system-ui, sans-serif);
          background: var(--light-bg);
          color: var(--charcoal);
          overflow-x: hidden;
          font-family: var(--ff-sans);
        }
        .knc-mt { margin-top: 16px; }

        /* ── containers ── */
        .knc-container {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
        }
        .knc-container--narrow  { max-width: 780px; }
        .knc-container--content { max-width: 1080px; }
        .knc-container--wide    { max-width: 1326px; margin: 0 auto; padding: 0 40px; }
        .knc-container--centered {
          text-align: center; display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .knc-container { padding: 0 20px; }
          .knc-container--wide { padding: 0 20px; }
        }

        /* ── hero ── */
        .knc-hero {
          position: relative; height: 100vh; overflow: hidden; background: #111;
        }
        .knc-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; opacity: 0.85;
        }
        .knc-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 50%, transparent 100%);
          display: flex; align-items: flex-end; padding-bottom: 68px;
        }

        /* breadcrumbs */
        .knc-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 14px;
        }
        .knc-breadcrumbs a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color .2s; }
        .knc-breadcrumbs a:hover { color: #fff; }
        .knc-breadcrumbs__current { color: #fff; font-weight: 700; }

        .knc-hero__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(18px, 2.4vw, 28px); font-weight: 300;
          color: rgba(255,255,255,0.9); margin: 0 0 10px;
        }
        .knc-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── general sections ── */
        .knc-section {
          padding: 80px 0;
        }
        .knc-section.no-pt { padding-top: 0; }
        
        .knc-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 24px; line-height: 1.2;
          text-align: center;
        }
        .knc-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid-grey); margin: 0;
          text-align: center;
        }

        /* ── full screen image ── */
        .knc-fullscreen { background: var(--light-bg); line-height: 0; }
        .knc-fullscreen img { display: block; width: 100%; height: auto; }

        /* ── split section ── */
        .knc-split {
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .knc-split { grid-template-columns: 42fr 58fr; }
        }
        .knc-split__panel {
          display: flex; align-items: center; background: var(--sage-bg); color: var(--text-white);
        }
        .knc-split__inner {
          padding: 48px 40px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .knc-split__inner { padding: 60px 56px; } }
        @media (min-width: 1200px) { .knc-split__inner { padding: 72px 72px; } }

        .knc-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: var(--text-white); margin: 0; line-height: 1.25;
        }
        .knc-split__body {
          font-size: 15px; line-height: 1.75; color: var(--text-muted); margin: 0;
        }
        .knc-split__label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: rgba(255,255,255,0.6); margin-top: 4px;
        }
        .knc-split__list {
          list-style: none;
          padding-left: 0;
          margin: 8px 0 0;
          font-size: 15px;
          line-height: 1.8;
          color: var(--text-white);
        }
        .knc-split__list li {
          position: relative;
          padding-left: 22px;
        }
        .knc-split__list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--text-white);
          font-weight: 700;
        }
        .knc-split__list li + li { margin-top: 6px; }

        .knc-split__photo { overflow: hidden; }
        .knc-split__photo img {
          display: block; width: 100%; height: auto;
          aspect-ratio: 960 / 900;
          object-fit: cover; object-position: center;
        }
        @media (min-width: 860px) {
          .knc-split__photo { display: flex; align-items: stretch; }
          .knc-split__photo img { height: 100%; aspect-ratio: auto; }
        }

        /* ── details carousel section ── */
        .knc-section-carousel {
          background: var(--sage-bg); color: var(--text-white); padding: 80px 0;
        }
        .knc-carousel-grid {
          display: grid; grid-template-columns: 1fr; gap: 48px; align-items: center;
        }
        @media (min-width: 860px) {
          .knc-carousel-grid { grid-template-columns: 42fr 58fr; }
        }
        .knc-carousel-text {
          display: flex; flex-direction: column; gap: 18px;
        }
        .knc-carousel-title {
          font-family: var(--ff-serif);
          font-size: clamp(24px, 3vw, 36px); font-weight: 300;
          color: var(--text-white); margin: 0;
        }
        .knc-carousel-body {
          font-size: 15px; line-height: 1.75; color: var(--text-muted); margin: 0;
        }
        .knc-carousel-nav {
          display: flex; align-items: center; gap: 16px; margin-top: 12px;
        }
        .knc-nav-btn {
          background: none; border: 1px solid rgba(255,255,255,0.3);
          color: var(--text-white); font-size: 18px; width: 44px; height: 44px;
          border-radius: 50%; cursor: pointer; display: flex; align-items: center;
          justify-content: center; transition: all 0.25s ease;
        }
        .knc-nav-btn:hover {
          background: var(--white); color: var(--charcoal); border-color: var(--white);
        }
        .knc-carousel-counter {
          font-size: 14px; font-weight: 600; color: var(--text-white); min-width: 48px; text-align: center;
        }
        .knc-carousel-media-wrapper {
          position: relative; width: 100%; display: flex; flex-direction: column;
        }
        .knc-carousel-slide {
          display: flex; flex-direction: column; gap: 16px;
        }
        .knc-slide-title {
          font-size: 18px; font-weight: 400; font-family: var(--ff-serif);
          color: var(--text-white); margin: 0;
        }
        .knc-slide-image-box {
          width: 100%; aspect-ratio: 1.15; overflow: hidden; border-radius: 4px; background: rgba(0,0,0,0.1);
        }
        .knc-slide-image-box img {
          width: 100%; height: 100%; object-fit: cover; object-position: center;
        }

        /* ── wide image ── */
        .knc-section--img-wide { padding: 40px 0; background: var(--light-bg); }
        .knc-figure { margin: 0; overflow: hidden; border-radius: 0; }
        .knc-figure img { display: block; width: 100%; height: auto; }

        /* ── FAQ ── */
        .knc-section--faq {
          padding: 80px 0 72px; background: var(--light-bg); color: var(--charcoal);
        }
        .knc-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 20px; line-height: 1.15;
        }
        .knc-faq__intro {
          font-size: 17px; line-height: 1.8; color: var(--mid-grey); margin: 0;
        }
        .knc-link-faq { color: var(--charcoal); text-decoration: underline; font-weight: 600; }
        .knc-link-faq:hover { color: rgba(0,0,0,0.7); }

        .knc-faq__list { border-top: 1px solid var(--border-dark); margin-top: 40px; }
        .knc-faq__item { border-bottom: 1px solid var(--border-dark); }
        .knc-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--charcoal); text-align: left; transition: color .2s;
        }
        .knc-faq__toggle:hover { color: rgba(0,0,0,0.6); }
        .knc-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--charcoal);
        }
        .knc-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--mid-grey);
        }
        .knc-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .knc-cta-section {
          background: var(--cta-bg); padding: 96px 0 112px; text-align: center; color: var(--charcoal);
        }
        .knc-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 18px; line-height: 1.1;
        }
        .knc-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--mid-grey); margin: 0 0 40px;
        }
        .knc-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: var(--white);
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, color .25s, transform .2s;
        }
        .knc-cta__btn:hover { background: #000000; transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .knc-hero          { height: 55vh; min-height: 360px; }
          .knc-hero__overlay { padding-bottom: 40px; }
          .knc-section--intro { padding: 52px 0 44px; }
          .knc-section--faq   { padding: 52px 0 52px; }
          .knc-cta-section    { padding: 64px 0 72px; }
          .knc-split__inner   { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
