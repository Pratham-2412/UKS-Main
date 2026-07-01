import UKS_KELLER_MODERN_URBAN_MODERN_URBAN_1326_X_884_AFBEELDING from '../assets/uks-keller-modern-urban/uks-keller-modern-urban-modern-urban-1326-x-884-afbeelding.webp';
import UKS_KELLER_MODERN_URBAN_MODERN_URBAN_BEELD_BIJ_TEKST from '../assets/uks-keller-modern-urban/uks-keller-modern-urban-modern-urban-beeld-bij-tekst.webp';
import UKS_KELLER_MODERN_URBAN_MODERN_URBAN_BEELD_BIJ_TEKST2 from '../assets/uks-keller-modern-urban/uks-keller-modern-urban-modern-urban-beeld-bij-tekst2.webp';
import UKS_KELLER_MODERN_URBAN_615X718_CARROUSELAFBEELDING_EVEREST_HAVER from '../assets/uks-keller-modern-urban/uks-keller-modern-urban-615x718-carrouselafbeelding-everest-haver.webp';
import UKS_KELLER_MODERN_URBAN_615X718_CARROUSELAFBEELDING_EVEREST_AS from '../assets/uks-keller-modern-urban/uks-keller-modern-urban-615x718-carrouselafbeelding-everest-as.webp';
import UKS_KELLER_MODERN_URBAN_615X718_CARROUSELAFBEELDING_EVEREST_TURF from '../assets/uks-keller-modern-urban/uks-keller-modern-urban-615x718-carrouselafbeelding-everest-turf.webp';
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


// All images exactly as referenced in Keller Modern Urban page
const HERO_IMG     = UKS_KELLER_MODERN_URBAN_MODERN_URBAN_1326_X_884_AFBEELDING
const SPLIT1_IMG   = UKS_KELLER_MODERN_URBAN_MODERN_URBAN_BEELD_BIJ_TEKST
const SPLIT2_IMG   = UKS_KELLER_MODERN_URBAN_MODERN_URBAN_BEELD_BIJ_TEKST2
const WIDE_IMG     = UKS_KELLER_MODERN_URBAN_MODERN_URBAN_1326_X_884_AFBEELDING

// Carousel slides
const SLIDES = [
  {
    title: 'Oat',
    image: UKS_KELLER_MODERN_URBAN_615X718_CARROUSELAFBEELDING_EVEREST_HAVER
  },
  {
    title: 'Ash',
    image: UKS_KELLER_MODERN_URBAN_615X718_CARROUSELAFBEELDING_EVEREST_AS
  },
  {
    title: 'Peat',
    image: UKS_KELLER_MODERN_URBAN_615X718_CARROUSELAFBEELDING_EVEREST_TURF
  }
]

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose?',
    a: 'Model Everest is available in three colours: ash, peat and oat. Ultramat is available in 8 colours: silk, white, mist, loam, clay, fossil grey, graphite and carbon.'
  },
  {
    q: 'How do I maintain melamine?',
    a: 'Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth. After cleaning, always dry the kitchen elements with a soft cloth to prevent water from penetrating the seams which could lead to swelling.'
  }
]

export default function KellerModernUrban() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % SLIDES.length)
  }

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="kmu-page"
    >
      {/* ── HERO ── */}
      <section className="kmu-hero">
        <img src={HERO_IMG} alt="Modern Urban kitchen" className="kmu-hero__img" loading="eager" />
        <div className="kmu-hero__overlay">
          <div className="kmu-container">
            <nav className="kmu-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/modern-kitchens">Modern kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="kmu-breadcrumbs__current">Modern Urban</span>
            </nav>
            <p className="kmu-hero__subtitle">With trendy ribbed decor</p>
            <h1 className="kmu-hero__title">Modern Urban</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="kmu-section kmu-section--white kmu-section--intro">
        <div className="kmu-container kmu-container--narrow">
          <h2 className="kmu-section__title">Compact, modern and stylish</h2>
          <p className="kmu-section__body">
            This kitchen design fits in with the new construction methods. Compact, modern and stylish.
          </p>
          <p className="kmu-section__body u-mt-4">
            The design can be used for modular construction projects, where space must be used optimally. Without an island, the layout becomes even more compact. By expanding the island, the design can be used in a loft or bungalow style. The Everest model is a melamine version in the much-requested ribbed decor. In this way, design and attainability go hand in hand.
          </p>
        </div>
      </section>

      {/* ── SPLIT 1: Trends Travertine (Brown Panel) ── */}
      <section className="kmu-split kmu-split--reverse">
        <div className="kmu-split__panel kmu-split__panel--brown">
          <div className="kmu-split__panel-inner">
            <h2 className="kmu-split__title">Trends: travertine is back</h2>
            <p className="kmu-split__body">
              The interior trends of today are a palette of greyed browns and greiges. The play of lines that we have seen in wood in recent years is still very much present and is now also available in melamine.
            </p>
            <p className="kmu-split__body">
              In addition to natural stone and calm marble/marble looks, travertine is strikingly present, both in its traditional form and in prints that are almost indistinguishable from the real thing. We had seen travertine for a while, but now we really couldn't ignore it any longer.
            </p>
          </div>
        </div>
        <div className="kmu-split__photo">
          <img src={SPLIT1_IMG} alt="Travertine design trends" loading="lazy" />
        </div>
      </section>

      {/* ── SPLIT 2: Colors and Materials (Light Brown Panel) ── */}
      <section className="kmu-split">
        <div className="kmu-split__panel kmu-split__panel--lightbrown">
          <div className="kmu-split__panel-inner">
            <h2 className="kmu-split__title">Colours &amp; materials</h2>
            <p className="kmu-split__label">In this kitchen:</p>
            <ul className="kmu-split__list">
              <li>Niche in travertine look</li>
              <li>High doors for a walk-in closet</li>
              <li>Line play in the front</li>
            </ul>
            <p className="kmu-split__label">The materials:</p>
            <ul className="kmu-split__list">
              <li>Melamine front Everest | peat - <strong>NEW 2025!</strong></li>
              <li>Ultra matte Evia | graphite</li>
              <li>Handle trim | metallic bronze</li>
            </ul>
          </div>
        </div>
        <div className="kmu-split__photo">
          <img src={SPLIT2_IMG} alt="Colours and materials detail" loading="lazy" />
        </div>
      </section>

      {/* ── WIDE LANDSCAPE IMAGE ── */}
      <section className="kmu-section kmu-section--img-wide">
        <div className="kmu-container kmu-container--wide">
          <figure className="kmu-figure">
            <img src={WIDE_IMG} alt="Modern Urban layout view" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── CAROUSEL SECTION: Everest Ribbed ── */}
      <section className="kmu-carousel-section">
        <div className="kmu-container">
          <div className="kmu-carousel-grid">
            <div className="kmu-carousel-info">
              <h2 className="kmu-section__title">Everest, ribbed decor in melamine</h2>
              <p className="kmu-section__body">
                Lines, slats, ribs. We see it in all kinds of elements of the interior.
              </p>
              <p className="kmu-section__body u-mt-3">
                In addition to the veneer versions, we are introducing the Everest model. A melamine decor with tactile ribs, available in 3 colours. Very attractive in terms of design and price level.
              </p>
              
              <div className="kmu-carousel-nav">
                <button onClick={handlePrev} className="kmu-carousel-btn" aria-label="Previous slide">&#8592;</button>
                <span className="kmu-carousel-counter">
                  {SLIDES[activeSlide].title}
                </span>
                <button onClick={handleNext} className="kmu-carousel-btn" aria-label="Next slide">&#8594;</button>
              </div>
            </div>

            <div className="kmu-carousel-display">
              <div className="kmu-carousel-slide-card">
                <div className="kmu-carousel-img-wrap">
                  <img src={SLIDES[activeSlide].image} alt={SLIDES[activeSlide].title} />
                </div>
                <div className="kmu-carousel-slide-label">{SLIDES[activeSlide].title}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS (Lighter Brown Panel Background) ── */}
      <section className="kmu-section kmu-section--try-this">
        <div className="kmu-container kmu-container--narrow">
          <h2 className="kmu-section__title kmu-section__title--white">Why not try this?</h2>
          <p className="kmu-section__body kmu-section__body--white">
            For a more luxurious finish, choose a veneer front instead of melamine. Our Ribbonwood model is also available in three colours: raven black, pure oak and warm walnut.
          </p>
          <p className="kmu-section__body kmu-section__body--white u-mt-4">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration and can be adapted in terms of layout, model, colour, handle (frame)/handleless and many other options. More information about the possibilities? Visit one of our Keller dealers. They are happy to make a design in this style that suits your home and budget.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="kmu-section kmu-section--faq">
        <div className="kmu-container kmu-container--content">
          <h2 className="kmu-faq__heading">Why not try this?</h2>
          <dl className="kmu-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="kmu-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="kmu-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="kmu-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="kmu-faq__answer">
                    <p>{item.a}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="kmu-cta-section">
        <div className="kmu-container kmu-container--narrow kmu-container--centered">
          <h2 className="kmu-cta__title">Curious about our programme?</h2>
          <p className="kmu-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="kmu-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        /* ── tokens ── */
        .kmu-page {
          --white:      #ffffff;
          --charcoal:   #1d1d1f;
          --mid:        #424245;
          --border:     #dedede;
          --brown:      #8c795f;
          --lightbrown: #ada191;
          --lightgray:  #e3e3e3;
          --ff-serif:   var(--font-serif, Georgia, serif);
          --ff-sans:    var(--font-sans, system-ui, sans-serif);
          background: var(--white);
          color: var(--charcoal);
          overflow-x: hidden;
          font-family: var(--ff-sans);
        }

        .u-mt-3 { margin-top: 12px; }
        .u-mt-4 { margin-top: 16px; }

        /* ── containers ── */
        .kmu-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .kmu-container--narrow   { max-width: 780px; }
        .kmu-container--wide     { max-width: 100%; padding: 0; }
        .kmu-container--content  { max-width: 1000px; }
        .kmu-container--centered {
          text-align: center;
          display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .kmu-container       { padding: 0 20px; }
          .kmu-container--wide { padding: 0 16px; }
        }

        .km-split-section {
          padding: 40px 0;
        }
        .km-split-section--no-top-pad {
          padding-top: 0;
        }

        /* ── hero ── */
        .kmu-hero {
          position: relative;
          height: 100vh;
          overflow: hidden;
          background: #111;
        }
        .kmu-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          opacity: 0.8;
        }
        .kmu-hero__overlay {
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
        .kmu-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 12px; letter-spacing: 0.04em;
          color: rgba(255,255,255,0.55);
          margin-bottom: 16px;
        }
        .kmu-breadcrumbs a {
          color: rgba(255,255,255,0.8); text-decoration: none;
          transition: color 0.2s;
        }
        .kmu-breadcrumbs a:hover { color: #f5f5f7; }
        .kmu-breadcrumbs__current { color: rgba(255,255,255,0.9); }
        .kmu-hero__subtitle {
          font-family: var(--ff-serif);
          font-size: 20px; font-weight: 300;
          color: rgba(255,255,255,0.9); margin: 0 0 8px;
        }
        .kmu-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 76px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── section wrappers ── */
        .kmu-section { width: 100%; background: var(--white); }
        .kmu-section--intro    { padding: 72px 0 64px; }
        .kmu-section--img-wide { padding: 64px 0; }
        .kmu-section--try-this {
          background: var(--lightbrown);
          padding: 80px 0;
        }
        .kmu-section--faq      { padding: 80px 0 96px; }

        .kmu-section__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.5vw, 42px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 24px; line-height: 1.15;
        }
        .kmu-section__title--white { color: #fff; }
        .kmu-section__body {
          font-size: 17px; line-height: 1.8; color: var(--mid); margin: 0;
        }
        .kmu-section__body--white { color: rgba(255,255,255,0.9); }


        /* ── split section ── */
        .kmu-split {
          display: grid;
          grid-template-columns: 1fr;
          background: var(--white);
          margin-bottom: 64px;
        }
        @media (min-width: 860px) {
          .kmu-split {
            grid-template-columns: 5fr 7fr;
            min-height: 600px;
          }
        }
        @media (min-width: 1200px) { .kmu-split { min-height: 680px; } }
        .kmu-split--reverse {
          direction: ltr;
        }
        @media (min-width: 860px) {
          .kmu-split--reverse {
            grid-template-columns: 7fr 5fr;
          }
          .kmu-split--reverse .kmu-split__panel {
            order: 2;
          }
          .kmu-split--reverse .kmu-split__photo {
            order: 1;
          }
        }

        .kmu-split__panel {
          display: flex; align-items: center;
          color: #fff;
        }
        .kmu-split__panel--brown { background: var(--brown); }
        .kmu-split__panel--lightbrown { background: var(--lightbrown); }

        .kmu-split__panel-inner {
          padding: 56px 48px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .kmu-split__panel-inner { padding: 72px 64px; } }
        @media (min-width: 1200px) { .kmu-split__panel-inner { padding: 88px 80px; } }

        .kmu-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: #fff; margin: 0; line-height: 1.2;
        }
        .kmu-split__body {
          font-size: 16px; line-height: 1.75;
          color: rgba(255,255,255,0.85); margin: 0;
        }
        .kmu-split__body + .kmu-split__body { margin-top: 12px; }
        
        .kmu-split__label {
          font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: rgba(255,255,255,0.45); margin-top: 6px;
        }
        .kmu-split__list {
          margin: 2px 0 0; padding-left: 18px;
          font-size: 15px; line-height: 1.9;
          color: rgba(255,255,255,0.88);
        }
        .kmu-split__list li + li { margin-top: 3px; }

        .kmu-split__photo { overflow: hidden; min-height: 420px; }
        @media (min-width: 860px) {
          .kmu-split__photo {
            min-height: unset;
            height: 100vh;
          }
        }
        .kmu-split__photo img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; display: block;
        }

        /* ── figures (full bleed, no crop) ── */
        .kmu-figure { margin: 0; padding: 0; overflow: hidden; }
        .kmu-figure img { display: block; width: 100%; height: auto; }

        /* ── carousel ── */
        .kmu-carousel-section {
          background: #fafafa;
          padding: 80px 0 96px;
        }
        .kmu-carousel-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }
        @media (min-width: 860px) {
          .kmu-carousel-grid {
            grid-template-columns: 5fr 7fr;
          }
        }
        .kmu-carousel-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .kmu-carousel-nav {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 32px;
        }
        .kmu-carousel-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid var(--border);
          background: #fff;
          color: var(--charcoal);
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
        }
        .kmu-carousel-btn:hover {
          background: var(--lightgray);
          border-color: var(--charcoal);
        }
        .kmu-carousel-counter {
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--mid);
        }
        .kmu-carousel-display {
          display: flex;
          justify-content: center;
        }
        .kmu-carousel-slide-card {
          width: 100%;
          max-width: 480px;
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .kmu-carousel-img-wrap {
          aspect-ratio: 615 / 718;
          overflow: hidden;
        }
        .kmu-carousel-img-wrap img {
          width: 100%; height: 100%; object-fit: cover;
        }
        .kmu-carousel-slide-label {
          padding: 16px 24px;
          font-size: 16px;
          font-weight: 600;
          color: var(--charcoal);
          border-top: 1px solid var(--border);
        }

        /* ── FAQ ── */
        .kmu-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(24px, 3vw, 38px);
          font-weight: 300; color: var(--charcoal); margin: 0 0 24px;
        }
        .kmu-faq__list       { margin-top: 48px; border-top: 1px solid var(--border); }
        .kmu-faq__item       { border-bottom: 1px solid var(--border); }
        .kmu-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--charcoal); text-align: left;
          transition: color 0.2s;
        }
        .kmu-faq__toggle:hover { color: var(--brown); }
        .kmu-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--brown);
        }
        .kmu-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--mid);
        }
        .kmu-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .kmu-cta-section {
          background: var(--lightgray);
          padding: 96px 0 112px;
        }
        .kmu-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 18px; line-height: 1.1;
        }
        .kmu-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--mid); margin: 0 0 40px;
        }
        .kmu-cta__btn {
          display: inline-block;
          font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: #fff;
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background 0.25s, transform 0.2s;
        }
        .kmu-cta__btn:hover {
          background: var(--brown); transform: translateY(-2px);
        }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .kmu-hero         { height: 55vh; min-height: 360px; }
          .kmu-hero__overlay { padding-bottom: 40px; }
          .kmu-section--intro { padding: 48px 0 40px; }
          .kmu-section--faq   { padding: 56px 0 64px; }
          .kmu-cta-section    { padding: 64px 0 72px; }
          .kmu-split__panel-inner { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
